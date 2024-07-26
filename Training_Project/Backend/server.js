const express = require('express');
const mongoose = require('mongoose');
const session=require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config()
const cors = require("cors");
const app=express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI).then(()=>{
            console.log('Connected to Mongodb')
        }).catch((error)=>{
                console.log('Failed to connect to mongodb',error)
        })
        app.use(session({
            secret:'secret_key',
            resave:true,
            saveUninitialized:true
        }))
        
        const authRoutes=require('./routes/authRoutes');
      
        app.use('/auth',authRoutes);

 const port =process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}......`)
})
