const ApplicationService = require('../Services/applicationServices');
const favouriteAppServices = require('../Services/favouriteAppServices')


exports.getAllApplications = async (req,res)=>{
    try{
      const {category,appName}=req.query;
        const applications = await ApplicationService.getAllApplcations(category,appName);
        res.json(applications);
    }catch(error){
        res.status(500).json(error.message);
    }
}

exports.getAllApplicationById = async (req,res)=>{
    try{
        const application = await ApplicationService.getApplicationById(req.user_email,req.params.id);
        if(!application){
            res.status(404).json({message:'Application not found'});
        }
        res.json(application);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

exports.deleteApplication = async (req,res)=>{
    try{
         await ApplicationService.deleteApplication(req.params.id);
        
        res.json({message:'Application Deleted Successfully'});
    }catch(error){
        res.status(500).json({message:'Failed to delete applications..'});
    }
}

exports.updateApplication = async (req,res)=>{
    try{
        const application = await ApplicationService.updateApplication(req.user_email,req.params.id,req.body);
        if(!application){
            res.status(404).json({message:'Application not found'});
        }
        res.json(application);
    }catch(error){
        res.status(500).json({message:'Failed to update applications..'});
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
        res.status(500).json(error.message);
    }
}

exports.deleteApplication=async(req,res)=>{
    try{
        await ApplicationService.deleteApplication(req.user_email,req.params.id);
        await favService.deleteFromFavorites(req.params.id);
        res.json({message:"Application deleted Successfully"});
    }
   catch(error){
    res.status(500).json({message:"Failed to delete application"})
   }
}
