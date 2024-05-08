const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const questionRoutes=require('./Routes/QuestionRoutes')
const AnswerRoutes=require('./Routes/AnswerRoutes')
const CommentRoutes=require('./Routes/CommentRoutes')
const authRoutes=require('./Routes/authRoutes')
const userRoutes=require('./Routes/UserRoutes')
const {authenticateUser}=require('./Middleware/authMiddleware')
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/question/answer',authenticateUser,AnswerRoutes);
app.use('/question/answers/comment',authenticateUser,CommentRoutes);
app.use('/question',authenticateUser,questionRoutes);
app.use('/users',authenticateUser,userRoutes);
app.use('/auth',authRoutes);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})
