const authService = require('../Services/authService');

exports.register=async(req,res)=>{
    const {username, email,password,role}=req.body;
    try{
        const message = await authService.register(username,email,password,role);
        res.status(201).json({message});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.login=async(req,res)=>{
    const { username,password,role}=req.body;
    try{
        const token = await authService.login(username,password,role);
     
       
        res.json(token);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}
