const songsService = require('../Services/songsService');

exports.getAllSongs =async (req,res)=>{
    try{
        const songs = await songsService.getAllSongs();
        res.json(songs);
    }catch(error){
        res.status(500).json(error.message);
    }
}

exports.getSongsById = async(req,res)=>{
    try{
        const songs = await songsService.getSongsById(req.params.id);
        res.json(songs);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.updateSongs = async(req,res)=>{
    try{
        const songs = await songsService.updateSongs(req.params.id,req.body);
        if(!songs){
            res.status(404).json({message:'Songs not found'});
        }
        res.json(songs);
    }catch(error){
        res.status(500).json({message:'Failed to update songs'});
    }

}

exports.deleteSongs = async (req,res)=>{
    try{
         await songsService.deleteSongs(req.params.id);
        
        res.json({message:'Songs Deleted Successfully'});
    }catch(error){
        res.status(500).json({message:'Failed to delete applications..'});
    }
}

exports.addSongs = async (req,res)=>{
    try{
        const songs = await songsService.addSongs(req.body);
        if(!songs){
            res.status(404).json({messsage:'Songs not found'});
        }
        res.json(songs);
    }catch(error){
        res.status(500).json(error.message);
    }
}
