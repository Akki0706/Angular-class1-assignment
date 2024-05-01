const playlistService = require('../Services/playlistService');
 const Playlist = require('../models/playlist')


exports.getAllPlaylist =async (req,res)=>{
    try{
        const playlists = await playlistService.getAllPlaylist();
        res.json(playlists);
    }catch(error){
        res.status(500).json(error.message);
    }
}

exports.getPlaylistById = async(req,res)=>{
    try{
        const playlists = await songsService.getPlaylistById(req.params.id);
        res.json(playlists);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
/*
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
*/
/*
exports.deletePlaylist = async (req,res)=>{
    try{
         const playlists = await playlistService.deletePlaylist(req.params.id);
        if(!playlists){
        res.status(500).json({message:'Playlists not found '});
        }
        res.json(playlists);
    }catch(error){
        res.status(500).json({message:'Failed to delete playlists..'});
    }
}
*/

exports.deletePlaylist = async (req, res) => {
    try {
        const id = req.params.id;
        // Check if playlistId is valid (optional)
        if (!id) {
            return res.status(400).json({ message: 'Invalid playlist ID' });
        }

        const Playlist = await playlistService.deletePlaylist(id);
        if (!Playlist) {
            return res.status(404).json({ message: 'Playlist not found' });
        }
        
        res.json({ message: 'Playlist deleted successfully', Playlist });
    } catch (error) {
        console.error('Error deleting playlist:', error);
        res.status(500).json({ message: error.message });
    }
};



exports.addPlaylist = async (req,res)=>{
    try{
        const playlists = await playlistService.addPlaylist(req.user_email,req.params.id);
        if(!playlists){
            res.status(404).json({messsage:'Songs not found'});
        }
        res.json(playlists);
    }catch(error){
        res.status(500).json(error.message);
    } 
}


exports.addSongtoPlaylist = async(req,res)=>{
    const { userId, playlistId } = req.params;
  const songData = req.body;

  try {
    const result = await addSongToPlaylist(userId, playlistId, songData);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(400).json({ error: result.message });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error.' });
  }
}
