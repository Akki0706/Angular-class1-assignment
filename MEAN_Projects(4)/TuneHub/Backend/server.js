const express = require('express');
const mongoose = require('mongoose');
const songsRoutes = require('./routes/songsRoutes')

const bodyParser = require('body-parser');
require('dotenv').config()
const app=express();
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to Mongodb')
}).catch((error)=>{
        console.log('Failed to connect to mongodb',error)
})

app.use('/songs',songsRoutes)
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`)
})
