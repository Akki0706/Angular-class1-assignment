const application = require('../models/application');
const Comment=require('../models/comment');
const User=require('../models/user');
exports.getAllApplication = async(filters)=> {
try{
const {appName,category}=filters;
const query ={};
query.visibility=true;
if(appName){
    query.appName={$regex:new RegExp(appName,'i')};
}
if(category){
    query.genre=category;
}
return await application.find(query).populate('comments');
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

exports.createApplication = async(newFields,id) => {
    newFields.user=id;
    const createdApplications = new application(newFields);
    return await createdApplications.save();
}

exports.deleteApplication = async(id)=> {
    try{
   await Comment.deleteMany({Application:id});
   await User.updateMany({downloadedApplications:id},{$pull:{downloadedApplications:id}});
    return await application.findByIdAndDelete(id);
    }catch(error){
        throw new Error(error);
    }
}

exports.updateApplication = async(id,updatedFields)=> {
    const Application = application.findById(id);
    if(Application.visibility==true && updatedFields.visibility==false){
        await User.updateMany({downloadedApplications:id},{$pull:{downloadedApplications:id}});
    }
    return await application.findByIdAndUpdate(id,updatedFields,{new:true});
}