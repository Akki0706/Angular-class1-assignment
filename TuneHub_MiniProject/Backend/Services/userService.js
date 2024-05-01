/*
const User = require('../models/user');

const Songs = require('../models/songs');
exports.getAllUsers=async()=>{
  return await User.find();
}

 exports.addToRestrictedPaylist= async(playlist_id,userid)=>{
    try{
        const admin=await User.findOne({});
        const song=await Songs.findById(playlist_id);
        if(song.user.toString()!==admin._id.toString()){
           throw new Error("Forbidden");
        }
        song.restrictedUserPlaylist.push(userid);
        song.save();
        return application.restrictedUserPlaylist;
       
    }
    catch(error){
      throw new Error(error.message);
    }
  }
  exports.removeFromRestrictedPlaylist= async(playlist_id,userid)=>{
    try{
        const admin=await User.findOne({email});
        const song=await Song.findById(playlist_id);
        if(song.user.toString()!==admin._id.toString()){
           throw new Error("Forbidden");
        }
        song.restrictedUserPlaylist=song.restrictedUserPlaylist.filter((user)=>{
            user.toString()!==userid.toString();
        })
        song.save();
      
       
    }
    catch(error){
      throw new Error(error.message);
    }
  }

  */