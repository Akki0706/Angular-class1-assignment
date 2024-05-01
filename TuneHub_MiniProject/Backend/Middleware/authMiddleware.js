const jwt = require('jsonwebtoken');


exports.authenticate=(req,res,next)=>{
    if(req.session.authorization){
        const token =req.session.authorization['token'];
        if(!token){
            return res.status(401).json({message:'Unauthorized'});
        }
        jwt.verify(token,'jwt_secret_key',(error,user)=>{
            if(error){
                return res.status(401).json({message:'Unauthorized'});
            }
            req.user_email=req.session.authorization['email'];
            next();
        })
    }else{
        return res.status(403).json({message:'User Not Logged In'});
    }
}