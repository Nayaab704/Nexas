//https://medium.com/swlh/run-python-script-from-node-js-and-send-data-to-browser-15677fcf199f
// Getting ARRAY output to JS using note2.py ref:test2.js

const express = require('express')
const {spawn} = require('child_process');
const spawner =require('child_process').spawn;
const sk = require('scikit-node')
const app = express()
const port = 5000
app.get('/', (req, res) => {
 
// array
const data_to_pass_in = [155];

var dataToSend;
const python_process= spawner('py', ['algo.py', JSON.stringify(data_to_pass_in)]);
python_process.stdout.on('data', function (data) {
    console.log('Data received from python:', JSON.parse(data.toString()));
    dataToSend = JSON.parse(data.toString());
    console.log(dataToSend[0]);
   });

 /*  
 var dataToSend;
 // spawn new child process to call the python script
 const python = spawn('py', ['note1.py']);
 
 // collect data from script
 python.stdout.on('data', function (data) {
  console.log(`Pipe data from python script ...`);
  dataToSend = data.toString();
 });*/

 // in close event we are sure that stream from child process is closed
 python_process.on('close', (code) => {
 console.log(`child process close all stdio with code ${code}`);
 // send data to browser
 //res.send(dataToSend)
 res.send(dataToSend)
 console.log(dataToSend)

 });


})
app.listen(port, () => console.log(`Example app listening on port 
${port}!`))
