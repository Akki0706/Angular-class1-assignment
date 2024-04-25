const mongoose=require('mongoose');
const { release, type } = require('os');
const applicationSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    
    appName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    releaseDate:{
        type:Date,
        required:true
    },
    version:{
        type:String,
        default:"1.0"
    },
    ratings:{
        type:Number,
        min:0,
        max:5,
        default:0
    },
    genre:{
        type:String,
        required:true,
        enum:['Games','Beauty','Fashion','Health','Women']
    }

})

const Application=mongoose.model('Application',applicationSchema);
module.exports=Application;