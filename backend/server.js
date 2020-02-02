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

async function addUser(data) {
  const user = new UserModel({
    email: data.email,
    username: data.username,
    password: data.password
  });

  try {
    const doc = await user.save();
    console.log(doc);
  } catch (err) {
    console.log('Registering user error: ' + err.message);
  }
}

UserModel.authenticate('helele', 'abc123').then(id => {
  console.log(id);
}).catch(err => {
  console.log(err);
});

//middlewares
app.use(express.json());
app.use(cors());


function addToDatabase(commentObj) {
  console.log(commentObj);
}

app.post('/signUp', (req, res) => {
  addUser(req.body);
  res.end();
});

app.post('/login', async (req, res) => {
  const data = req.body;
  try {
    const userId = await UserModel.authenticate(data.username, data.password);
    console.log(userId);
  } catch (err) {
    console.log(err.message);
  }
  
  res.end();
});

app.put('/comment', (req, res) => {
  addToDatabase(req.body);
  res.end('comment successfully retrieved');
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