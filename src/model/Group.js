//const mongoose = require('mongoose');
import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: String, enum: ['webdevelopment', 'mobile', 'ui', 'machine_learning', 'data_analysis', 'full_stack'] },
  keywords: { type: [String] }
});

const Group = mongoose.model('Group', groupSchema);

export default Group;
