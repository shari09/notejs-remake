const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
// const {check, validationResult} = require('express-validator');
const cors = require('cors');
require('dotenv').config({path: 'config/.env'});
const database = require('./database.js');
const UserModel = require('./models/user.js');


//mongodb stuff
database.connect();

let userId;

async function addUser(data) {
  const user = new UserModel({
    email: data.email,
    username: data.username,
    password: data.password
  });

  //save user data to database
  try {
    const doc = await user.save();
    userId = doc._id;
  } catch (err) {
    console.log('Registering user error: ' + err.message);
  }
}

//middlewares
app.use(express.json());
app.use(cors());


function addToDatabase(commentObj) {
  console.log(commentObj);
}

//inconsistency with promise.then and async/await but that is fine :))

app.post('/signUp', (req, res) => {
  addUser(req.body).then(() => {
    res.send({state: 'success'});
  }).catch(err => {
    console.log(err.message);
    res.end();
  });
});

app.post('/login', async (req, res) => {
  const data = req.body;
  try {
    //get user id
    userId = await UserModel.authenticate(data.username, data.password);
    console.log(userId);
    res.send({state: 'success'});
  } catch (err) {
    res.send({state: err.message});
  }
});

app.put('/comment', (req, res) => {
  addToDatabase(req.body);
  res.send({state: 'comment successfully retrieved'});
});

app.get('/comment', (req, res) => {
  res.end('hello');
});


const server = https.createServer({
  key: fs.readFileSync('config/server.key'),
  cert: fs.readFileSync('config/server.cert')
}, app);

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});