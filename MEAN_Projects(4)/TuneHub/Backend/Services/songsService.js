const Song = require('../models/Song');
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