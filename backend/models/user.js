const mongoose = require('mongoose');
const crypto = require('crypto');
const util = require('util');
const randomBytes = util.promisify(crypto.randomBytes);
const pbkdf2 = util.promisify(crypto.pbkdf2);

// const timestamp = require('./plugins/timestamp.js');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  salt: {
    type: Buffer
  },
  iteration: {
    type: Number
  }
});

UserSchema.pre('save', async function(next) {
  try {
    this.salt = await randomBytes(128);
    this.iteration = 1000;
    const hash = await pbkdf2(this.password, 
                              this.salt, 
                              this.iteration,
                              128,
                              'sha256');
    this.password = hash.toString('hex');
  } catch (err) {
    console.log('Hashing password error: ' + err.message);
  }
});

// UserSchema.plugin(timestamp);

UserSchema.statics.authenticate = async (username, password) => {
  return new Promise(async function(resolve, reject) {
    try {
      const user = await UserModel.findOne({username: username});
      if (!user) {
        reject(new Error('User not found'));
      } else {
        const hashed = await pbkdf2(password, 
                                      user.salt, 
                                      user.iteration,
                                      128,
                                      'sha256');
        const passwordStr = hashed.toString('hex'); 
        if (passwordStr === user.password) {
          resolve(user._id);
        }

        reject(new Error('Incorrect password'));
      }
    } catch (err) {
      console.log('Authentication error: ' + err.message);
    }
  });
};
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;