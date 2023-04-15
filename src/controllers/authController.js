import bcrypt from 'bcrypt';
import User from '../model/User.js';
import path from 'path';
import dotenv from 'dotenv';
import pkg from 'app-root-path';
const appRootPath = pkg.path;

dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

// Create a new user account
export const signup = async (req, res) => {
  const { username, password, languages, domain, experience } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      languages,
      domain,
      experience
    });

    const savedUser = await user.save();
    console.log("User saved to MongoDB:", savedUser);

    res.status(201).json({ message: "User created successfully", userId: savedUser._id });
  } catch (error) {
    console.error("Error saving user to MongoDB:", error);
    res.status(500).json({ message: "Error creating user" });
  }
}
