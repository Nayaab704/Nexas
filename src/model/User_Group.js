//relationship between users and groups, associate users with groups and assign roles to them within those groups.
import mongoose from 'mongoose';

const userGroupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
  role: { type: String, enum: ['admin', 'member'], required: true }
});

const User_Group = mongoose.model('User_Group', userGroupSchema);

export default User_Group;
