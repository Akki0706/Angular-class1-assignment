const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const songRoutes=require('./routes/songsRoutes')
const authRoutes=require('./routes/authRoutes');
const playlistRoutes=require('./routes/playlistRoutes')
const {authenticateUser}=require('./Middleware/authMiddleware');
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/songs',authenticateUser,songRoutes);
app.use('/playlists',authenticateUser,playlistRoutes);
app.use('/auth',authRoutes)
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})