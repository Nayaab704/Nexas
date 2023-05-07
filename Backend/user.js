import mongoose from "mongoose";
const userProfile= mongoose.Schema({
name: String,
password: String,
email: String,
domain: String,
language: String,
experience: String
})

export default mongoose.model('users',userProfile ) //default syntax to export the model
