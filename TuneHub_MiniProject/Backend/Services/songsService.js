const Song = require('../models/songs');
const User = require('../models/user');
exports.getAllSongs=async()=>{
    try{
        const app = await Song.find();
        return app;
    }catch(error){
        throw new Error(error.message)
    }
}

exports.getSongsById = async(id)=>{
    try{
        const app = await Song.findById(id);
        return app;
    }catch(error){
        throw new Error(error.message)
    }  
  /*  const user=await User.findOne({email});
   const app=await Application.findById(id);
   if(app.restrictedUser.includes(user._id)){
      throw new Error('Forbidden');
   }
   return app; */


}

exports.addSongs = async (newSongsAdded)=>{
 const newSongs = new Song(newSongsAdded);
 return await newSongs.save();
}

exports.updateSongs = async(id,updatedSongs)=>{
    return await Song.findByIdAndUpdate(id,updatedSongs,{new:true});

}

exports.deleteSongs = async(id)=>{
  
    return await Song.findByIdAndDelete(id);
}