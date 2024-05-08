const express = require('express');
const mongoose = require('mongoose');


const Hikeroutes = require('./routes/approutes')
require('dotenv').config()
const bodyParser = require('body-parser');
const app=express();
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to Mongodb')
}).catch((error)=>{
        console.log('Failed to connect to mongodb',error)
})
app.use('/Hiking',Hikeroutes);
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`)
})
