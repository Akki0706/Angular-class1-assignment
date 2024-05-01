const Comment = require("../models/comment");

exports.createComment=async(id,newFields)=>{
    try{
        newFields.Application=id;
        const comment=new Comment(newFields);
     return await comment.save();
    }
    catch(error){
     throw new Error(error);
    }
 }