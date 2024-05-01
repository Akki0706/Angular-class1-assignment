const application = require('../models/application');

exports.getAllApplication = async()=> {
try{
const app = await application.find().populate('comments');
return app;
}
catch(error){
    throw new Error(error.message)
}
}
exports.getApplicationById= async(id)=> {
    try{
        const app = await application.findById(id);
        return app;
    }catch (error){
        throw new Error(error.message)
    }
}

exports.createApplication = async(newFields) => {
    const createdApplications = new application(newFields);
    return await createdApplications.save();
}

exports.deleteApplication = async(id)=> {
    const deletedApp = await application.findById(id);
    return await deletedApp.findByIdAndDelete(id);
}

exports.updateApplication = async(id,updatedFields)=> {
    return await application.findByIdAndUpdate(id,updatedFields,{new:true});
}