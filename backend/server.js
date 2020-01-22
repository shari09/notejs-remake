const https = require('https');
const fs = require('fs');
const express = require('express'),
      app = express();


// const {check, validationResult} = require('express-validator');
// const cors = require('cors');
require('dotenv').config({path: 'config/.env'});

const MongoClient = require('mongodb').MongoClient;
const mongoUri = `mongodb+srv://
               ${process.env.DB_USER}
              :${process.env.DB_PASSWORD}
              @cluster0-kj3qd.mongodb.net/test?retryWrites=true&w=majority`;

app.use(express.json());
// app.use(cors());



const client = new MongoClient(mongoUri, {useUnifiedTopology: true});
client.connect(err => {
  const collection = client.db('test').collection('devices');
  //perform actions on the collection obj
  client.close();
});


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

server.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});