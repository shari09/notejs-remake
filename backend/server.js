const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
// const {check, validationResult} = require('express-validator');
const cors = require('cors');
require('dotenv').config({path: 'config/.env'});


//middlewares
app.use(express.json());
app.use(cors());


function addToDatabase(commentObj) {
  console.log(commentObj);
}

app.post('/signUp', (req, res) => {
  console.log(req.body);
  res.end();
});

app.post('/login', (req, res) => {
  console.log(req.body);
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