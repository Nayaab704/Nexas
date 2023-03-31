const User = require('./user');

async function register(req, res) {
  const { username, password, email, dob, gender, location } = req.body;

  // Check if the email is already in use
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).send({ error: 'Email already in use' });
  }

  const user = new User({
    username,
    password,
    email,
    dob,
    gender,
    location,
  });

  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
}

module.exports = {
  register,
};
