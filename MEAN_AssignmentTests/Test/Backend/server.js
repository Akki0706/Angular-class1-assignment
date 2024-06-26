const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');

require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("Failed to connect to mongodb",error);
})
const trailRoutes=require('./Routes/trialRoutes');
app.use('/trails',trailRoutes);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})