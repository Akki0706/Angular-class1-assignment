const ApplicationService = require('../Services/applicationServices');


exports.getAllApplications = async (req,res)=>{
    try{
        const {category,appName}=req.query;
        const applications = await ApplicationService.getAllApplcations(category,appName);
        res.json(applications);
    }catch(error){
        res.status(500).json({message:'Failed to fetch applications..'});
    }
}

exports.getAllApplicationById = async (req,res)=>{
    try{
        const application = await ApplicationService.getApplicationById(req.params.id);
        if(!application){
            res.status(404).json({message:'Application not found'});
        }
        res.json(application);
    }catch(error){
        res.status(500).json({message:'Failed to fetch applications..'});
    }
}

exports.deleteApplication = async (req,res)=>{
    try{
         await ApplicationService.deleteApplication(req.user_email,req.params.id);
        
        res.json({message:'Application Deleted Successfully'});
    }catch(error){
        res.status(500).json({message:'Failed to delete applications..'});
    }
}

exports.updateApplication = async (req,res)=>{
    try{
        console.log(req.body)
        const application = await ApplicationService.updateApplication(req.params.id,req.body);
        console.log(application)
        if(!application){
            res.status(404).json({message:'Application not found'});
        }
        res.json(application);
    }catch(error){
        res.status(500).json(error.message);
    }
}

exports.createApplication = async (req,res)=>{
    try{
        const application = await ApplicationService.createApplication(req.user_email,req.body);
        if(!application){
            res.status(404).json({message:'Application not found'});
        }
        res.json(application);
    }catch(error){
        res.status(500).json({message:'Failed to create applications..'});
    }
}