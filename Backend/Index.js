const express = require('express')
const mongoose = require('mongoose')


// Connect to database
mongoose.connect(`mongodb://127.0.0.1:27017/Nexas`)
.then(()=> {
  console.log("database connected")
})

// defined schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
})


// instantiante a model
const User = mongoose.model('User', userSchema )

// call the express function
const app = express()

// set our view enginre to ejs
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))



// for requesting a resource
app.get('/register', function(req, res){
  res.render('register');
})

// for sending a resource (email & password)
app.post('/register', function(req, res){
  const {email , password} = req.body
  console.log(email, password)
})


// listen on port 3000
app.listen(3000, function(){
  console.log("server is running")
})



