const Application=require('../models/Application')
const User=require('../models/User')

exports.getAllApplcations = async (category,appName)=>{
    try{
        let query={};
        if(category){
            query.genre=category;
        }
        if(appName){
            query.appName={$regex : new RegExp(appName,'i')}
        }
        return await Application.find(query);
    }catch(error){
        throw new Error(error.message)
    }
}



exports.getApplicationById = async (email,id)=>{
    
 const user=await User.findOne({email});
 const app=await Application.findById(id);
 if(app.restrictedUser.includes(user._id)){
    throw new Error('Forbidden');
 }
 return app;



}
exports.createApplication = async (email,newFields)=>{
   const admin = await User.findOne({email});
   newFields.user = admin._id;
const newApplication=new Application(newFields);
return await newApplication.save();
}


exports.updateApplication= async(email,id,updatedFields)=>{
    const admin = await User.findOne({email});
   const application = await Application.findById(id);
  // console.log('Application user: ',application.user);
  //  console.log('Admin Id:',admin._id);
  //  console.log(application.user.toString() !== admin._id.toString()); 
   if(application.user.toString() !== admin._id.toString()){
    throw new Error('Forbiddeen');
   }
    
return await Application.findByIdAndUpdate(id,updatedFields,{new:true});
}

exports.deleteApplication = async (email,id)=>{
    const admin=await User.findOne({email});
    const application = await Application.findById(id);
   // console.log('Application user: ',application.user);
   //  console.log('Admin Id:',admin._id);
   //  console.log(application.user.toString() !== admin._id.toString()); 
    if(application.user.toString() !== admin._id.toString()){
     throw new Error('Forbiddeen');
    }
return await Application.findByIdAndDelete(id);
}