import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
 // dob: { type: Date, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
 // location: {
 //   type: { type: String },
  //  coordinates: [Number]
  //}
});

//userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

export default User;
