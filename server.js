import express from "express";
import mongoose from "mongoose";
import User from "./model/User.js"; 

const app = express();

const uri = "mongodb+srv://rootuser:password%401@nexascluster.8876mb9.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

  } catch (error) {
    console.error(error);
  }

}

connect();

app.listen(8000, () => {
  console.log("server started on port 8000");
});

async function run() {
  const user = new User({
    username: "babs",
    password: "Swexxx",
    email: "ainababs0@gmail",
    gender: "male"
  });
  await user.save();
  console.log(user);
}

run();
