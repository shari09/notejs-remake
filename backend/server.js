const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
// const {check, validationResult} = require('express-validator');
// const cors = require('cors');
// require('dotenv').config();

app.use(express.json());
// app.use(cors());

function addToDatabase(commentObj) {
  console.log(commentObj);
}

app.put('/', (req, res) => {
  addToDatabase(req.body);
  res.end();
});

const server = https.createServer({
  key: fs.readFileSync('config/server.key'),
  cert: fs.readFileSync('config/server.cert')
}, app);

server.listen(3000, () => {
  console.log(`listening on port 3000`);
});