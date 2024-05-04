const appServices = require('../Services/appServices');

exports.getAllApplication =async (req,res)=>{
    try{
        const app = await appServices.getAllApplication(req.query);
        res.json(app);
    }catch(error){
        res.status(500).json(error.message);
    }
}

exports.getApplicationById = async(req,res)=>{
    try{
        const app = await appServices.getApplicationById(req.params.id);
        res.json(app);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.updateApplication = async(req,res)=>{
    try{
        const app = await appServices.updateApplication(req.params.id,req.body);
        if(!app){
            res.status(404).json({message:'Application not found'});
        }
        res.json(app);
    }catch(error){
        res.status(500).json({message:'Failed to update application'});
    }

}

exports.deleteApplication = async (req,res)=>{
    try{
         await appServices.deleteApplication(req.params.id);
        
        res.json({message:'Application  Deleted Successfully'});
    }catch(error){
        res.status(500).json({message:'Failed to delete applications..'});
    }
}

exports.createApplication = async (req,res)=>{
    try{
        const app = await appServices.createApplication(req.body,req.user._id);
        if(!app){
            res.status(404).json({messsage:'Application not found'});
        }
        res.json(app);
    }catch(error){
        res.status(500).json(error.message);
    }
}
