import bcrypt from 'bcrypt';
import User from '../model/User.js';
import path from 'path';
import dotenv from 'dotenv';
import pkg from 'app-root-path';
const appRootPath = pkg.path;

dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

// Create a new user account
export const signup = async (req, res) => {
  const { username, password, languages, coding_platform, domain, experience } = req.body;

  const updatedLanguages = {
    java: languages.includes('java') ? 1 : 0,
    c: languages.includes('c') ? 1 : 0,
    python: languages.includes('python') ? 1 : 0,
    js: languages.includes('js') ? 1 : 0
  };

  const updatedCodingPlatform = {
    codechef: coding_platform.includes('codechef') ? 1 : 0,
    leetcode: coding_platform.includes('leetcode') ? 1 : 0,
    hackerrank: coding_platform.includes('hackerrank') ? 1 : 0,
    interviewbit: coding_platform.includes('interviewbit') ? 1 : 0
  };

  const updatedDomain = {
    frontend: domain.includes('frontend') ? 1 : 0,
    testing: domain.includes('testing') ? 1 : 0,
    ds: domain.includes('ds') ? 1 : 0,
    backend: domain.includes('backend') ? 1 : 0
  };

  const updatedExperience = {
    oneToThree: experience.includes('1-3') ? 1 : 0,
    threeToSix: experience.includes('3-6') ? 1 : 0,
    greaterThanSix: experience.includes('>6') ? 1 : 0
  };

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashedPassword,
      languages: updatedLanguages,
      coding_platform: updatedCodingPlatform,
      domain: updatedDomain,
      experience: updatedExperience
    });

    const savedUser = await user.save();
    console.log("User saved to MongoDB:", savedUser);

    res.status(201).json({ message: "User created successfully", userId: savedUser._id });
  } catch (error) {
    console.error("Error saving user to MongoDB:", error);
    res.status(500).json({ message: "Error creating user" });
  }
}




// import bcrypt from 'bcrypt';
// import User from '../model/User.js';
// import path from 'path';
// import dotenv from 'dotenv';
// import pkg from 'app-root-path';
// const appRootPath = pkg.path;

// dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

// // Create a new user account
// export const signup = async (req, res) => {
//   const { username, password, languages, domain, experience } = req.body;

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({
//       username,
//       password: hashedPassword,
//       languages,
//       domain,
//       experience
//     });

//     const savedUser = await user.save();
//     console.log("User saved to MongoDB:", savedUser);

//     res.status(201).json({ message: "User created successfully", userId: savedUser._id });
//   } catch (error) {
//     console.error("Error saving user to MongoDB:", error);
//     res.status(500).json({ message: "Error creating user" });
//   }
// }
