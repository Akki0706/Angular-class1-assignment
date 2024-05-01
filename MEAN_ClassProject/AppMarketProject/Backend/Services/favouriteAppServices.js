const User = require('../models/User')

exports.getAllFavourites = async(email)=>{
try{
    const user = await User.findOne({email});
    return user.favouriteApplications;
}catch(error){
throw new Error(error.message)
}
}

exports.addToFavourites = async(email,appId)=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error('User not found');
        }
        user.favouriteApplications.push(appId);
        await user.save();
        return user.favouriteApplications;
    }catch(error){
    throw new Error(error.message)
    }
    }



exports.removeFromFavourites = async(email,appId)=>{
    try{
        const user = await User.findOne({email});
        if(!user){
            throw new Error('User not found');
        }

        user.favouriteApplications =  user.favouriteApplications.filter(app => app.toString() !== appId);
        await user.save(); 
    }catch(error){
    throw new Error(error.message)
    }
    }

    exports.deleteFromFavorites=async(id)=>{
        try{
          const users=await User.find();
          users.forEach((user)=>{
           if(user.favouriteApplications.includes(id)){
              this.removeFromFavourites(user.email,id);
           }
          })
        }
        catch(error){
           throw new Error(error.message);
        }
      }
