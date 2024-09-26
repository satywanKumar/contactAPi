const express = require('express')
const app = express()
const contactRoute = require('./routes/contact')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user')

mongoose.connect('mongodb+srv://satya123:satya123@sbs.1onrk.mongodb.net/?retryWrites=true&w=majority&appName=SBS')
.then(()=>{
   console.log('connected with database') 
})
.catch(err=>{
    console.log(err)
})

app.use(bodyParser.json());


app.use('/contact',contactRoute);
app.use('/user',userRoute);


module.exports = app;