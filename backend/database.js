const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

require('dotenv').config('./config/.env');

const dbName = 'all-data';

const server = `mongodb+srv://${process.env.DB_USER}\
:${process.env.DB_PASSWORD}\
@the-only-cluster-em9iy.mongodb.net/${dbName}?retryWrites=true&w=majority`;


function Database() {
  this.connect = () => {
    mongoose.connect(server).then(() => {
      console.log('Connection successful');
    }).catch(err => {
      console.log('Connection error: ' + err.message);
    })
  };

  this.close = () => {
    mongoose.connection.close().then(() => {
      console.log('Connection closed');
    }).catch(err => {
      console.log('Connection closing error: ' + err.message);
    })
  };
}

module.exports = new Database();



// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://shari09:<password>@the-only-cluster-em9iy.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
