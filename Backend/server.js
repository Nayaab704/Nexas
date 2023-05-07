import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt'; // to secure users from hackers
import Users from './user.js'; 
import Cors from 'cors';  // to let FE make req to BE

// App config
const app = express();
const port = 8001;
const connection_url = `mongodb+srv://admin:admin@cluster0.s65iai2.mongodb.net/test` //connection url to db

// Midllewares
app.use(express.json()) //format to return data
app.use(Cors())

// DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// API endpoints
app.get('/', (req, res) => res.status(200).send("Hello Doraemon"))



app.get('/users', (req, res) => {
  res.json(users);
})
//signing up 
app.post('/users/sign-up', async (req, res) => {
  const checkUser = await Users.findOne({email: req.body.email})
  if(checkUser !== null){
    res.send("Email already in use")
  } else {

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = { name: req.body.name, email: req.body.email, password: hashedPassword };
    Users.create(user);
    res.status(201).send(user);
  } catch {
    res.status(500).send()
  } 
}
})
//login
app.post('/users/login', async (req, res) => {
  const user = await Users.findOne({email: req.body.email});
    if(user === null){
    return res.status(400).send("User doesn't exist")
  } else {
    try {
      if(await bcrypt.compare(req.body.password, user.password)) {
        res.send(user)
        res.status(200)
      } else {
        res.send('invalid pass')
      }
    } catch {
      res.status(500).send('server internal error')
    }
  }
})

// Listener
app.listen(port, () => console.log(`Hi! Welcome back Harry 😏 listening on localhost ${port}`));
