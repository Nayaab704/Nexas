import mongoose from 'mongoose';
import { getNextSequenceValue } from '../controllers/counter.js';

const userSchema = new mongoose.Schema({
  _id: { type: Number }, // custom _id field starting from 100 for ML algorithm
  username: { type: String, required: true },
  password: { type: String, required: true },
  languages: {
    java: { type: Number },
    c: { type: Number },
    python: { type: Number },
    js: { type: Number }
  },
  coding_platform: {
    codechef: { type: Number },
    leetcode: { type: Number },
    hackerrank: { type: Number },
    interviewbit: { type: Number }
  },
  domain: {
    frontend: { type: Number },
    testing: { type: Number },
    ds: { type: Number },
    backend: { type: Number }
  },
  experience: {
    oneToThree: { type: Number },
    threeToSix: { type: Number },
    greaterThanSix: { type: Number }
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    this._id = await getNextSequenceValue('userId');
  }
  next();
});

const User = mongoose.model('User', userSchema);

export default User;


// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   languages: {
//     type: [String],
//     required: true,
//     enum: ['Java', 'c', 'python', 'js']
//   },
//   domain: {
//     type: String,
//     required: true,
//     enum: ['front-end testing', 'DS', 'back-end']
//   },
//   experience: {
//     type: String,
//     required: true,
//     enum: ['1-3', '3-6', '>6']
//   }
// });

// const User = mongoose.model('User', userSchema);

// export default User;

