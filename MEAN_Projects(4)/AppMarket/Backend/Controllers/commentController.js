const commentService=require('../Services/commentService');
exports.createComment=async(req,res)=>{
    try{
        const comment=await commentService.createComment(req.params.id,req.body);
       if(!comment){
         res.json("comment not created");
       }
       res.json(comment);
    }
    catch(error){
        res.json({message:error.message});
    }

}