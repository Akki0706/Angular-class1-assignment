const playlist = require('../models/Playlist');
const Songs=require('../models/Song');
exports.getAllSongs=async()=>{
    try{
     return await Songs.find({visibility:true});
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.getSongById=async(id)=>{
     try{
      return await Songs.findById(id);
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.createSong=async(newFields)=>{
     try{
         const song=new Songs(newFields);
      return await song.save();
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.updateSong=async(id,updatedFields)=>{
     try{
      const song=await Songs.findById(id);
      if(song.visibility==true && updatedFields.visibility==false){
         await playlist.updateMany({songs:id},{$pull:{songs:id}})
      }
      return await Songs.findByIdAndUpdate(id,updatedFields,{new:true});
     }
     catch(error){
      throw new Error(error);
     }
  }
  exports.deleteSong=async(id)=>{
     try{
      await playlist.updateMany({songs:id},{$pull:{songs:id}})
      return await Songs.findByIdAndDelete(id);
     }
     catch(error){
      throw new Error(error);
     }
  }