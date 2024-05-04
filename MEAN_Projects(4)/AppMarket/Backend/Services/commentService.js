const Comment = require("../models/comment");
const application = require('../models/application');
exports.getComment=async(id)=>{
    try{
       return await application.findById(id).comment;
    }
    catch(error){
     throw new Error(error);
    }
 }
exports.createComment=async(id,newFields,userid)=>{
    try{
        newFields.user = userid;
        newFields.Application=id;
        const comment=new Comment(newFields);
     return await comment.save();
    }
    catch(error){
     throw new Error(error);
    }
 }

 exports.deleteComment=async(id)=>{
    try{
      return await Comment.delete({_id:id});
    }
    catch(error){
     throw new Error(error);
    }
 }