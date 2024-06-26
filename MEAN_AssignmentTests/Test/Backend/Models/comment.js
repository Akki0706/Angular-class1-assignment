const mongoose=require('mongoose');
const commentSchema=new mongoose.Schema({
    Trail:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"trail",
        required:true
    },
    comment_statement:{
        type:String,
        required:true
    }
})
const Comment=new mongoose.model('Comment',commentSchema);
module.exports=Comment;