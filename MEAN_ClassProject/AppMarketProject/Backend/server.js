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
const userRoutes=require('./routes/userRoutes');
app.use('/auth',authRoutes);


const applicationRoutes=require('./routes/applicationRoutes')
const favouriteAppRoutes=require('./routes/favouriteAppRoutes')
const {authenticate , authorize}=require('./middleware/authMiddleware')
 app.use('/applications',authenticate,applicationRoutes);    
 app.use('/user/favourites',authenticate,authorize('user'), favouriteAppRoutes)
 app.use('/user',authenticate,authorize('admin'),userRoutes);   
 const port =process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}......`)
})
