import express from "express";
import mongoose from "mongoose";
import User from "./src/model/User.js";
import authRoutes from './src/routes/authRoutes.js';


import path from 'path';
import dotenv from 'dotenv';

import pkg from 'app-root-path';
const appRootPath = pkg.path;

dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

const app = express();

app.use(express.json());
app.use(authRoutes);
//app.use('/group', groupRoutes);

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



export default app;
