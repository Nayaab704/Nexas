import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  languages: {
    type: [String],
    required: true,
    enum: ['Java', 'c', 'python', 'js']
  },
  domain: {
    type: String,
    required: true,
    enum: ['front-end testing', 'DS', 'back-end']
  },
  experience: {
    type: String,
    required: true,
    enum: ['1-3', '3-6', '>6']
  }
});

const User = mongoose.model('User', userSchema);

export default User;
