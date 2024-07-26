const authService = require('../Services/authService');

exports.register=async(req,res)=>{
    const { email,password,role}=req.body;
    try{
        const message = await authService.register(email,password,role);
        res.status(201).json({message});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.login=async(req,res)=>{
    const { email,password,role}=req.body;
    try{
        const token = await authService.login(email,password,role);
        req.session.authorization={
            token,
            email
        }
        res.json(token);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.logout=(req,res)=>{
    try{
        authService.logout(req);
        res.status(200).json({message:'Logged Out Successfully'});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}