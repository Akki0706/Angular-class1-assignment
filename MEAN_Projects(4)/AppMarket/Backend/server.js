const express = require('express');
const mongoose = require('mongoose');
const cors =require("cors");
const {authenticateUser, authorizeUser, authorizeCreator}=require('./Middleware/authMiddleware');
const approutes = require('./routes/approutes')
const authRoutes = require('./routes/authRoutes')
const downloadRoutes = require('./routes/downloadRoute')
require('dotenv').config()
const bodyParser = require('body-parser');
const app=express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Connected to Mongodb')
}).catch((error)=>{
        console.log('Failed to connect to mongodb',error)
})
app.use('/auth',authRoutes);
app.use('/applications',authenticateUser,approutes);
app.use('/downloads',authenticateUser,authorizeUser('user'),downloadRoutes)
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}...`)
})
