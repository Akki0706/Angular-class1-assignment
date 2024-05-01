const mongoose = require("mongoose");
const CommentSchema = new mongoose.Schema({
    Application:{
        type:mongoose.Schema.Types.ObjectId,
    
        ref:'Applications'
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
     
        ref:'User'
    },

    statement :{
        type:String,
        required:true
    },

    rating:{
        type:Number,
        required:true
    }

})
const Comments = mongoose.model('Comments',CommentSchema);
module.exports=Comments;