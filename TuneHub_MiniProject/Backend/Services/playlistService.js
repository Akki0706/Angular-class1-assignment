const Playlist = require('../models/playlist')
const User=require('../models/user')

exports.getAllPlaylist=async()=>{
    try{
        const playlist = await Playlist.find();
        return playlist;
    }catch(error){
        throw new Error(error.message)
    }
}

exports.getPlaylistById = async(id)=>{
    try{
        const playlist = await Playlist.findById(id);
        return playlist;
    }catch(error){
        throw new Error(error.message)
    }
}

exports.addPlaylist = async (email,id)=>{
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        } 
        const playlist = new Playlist({user:user._id});
        playlist.playlistSongs.push(id);
        return await playlist.save();
    } catch (error) {
        throw new Error('Failed to add playlist: ' + error.message);
    }
}

exports.updatePlaylist = async(id,updatedPlaylist)=>{
    return await Playlist.findByIdAndUpdate(id,updatedPlaylist,{new:true});

}


exports.deletePlaylist = async(id)=>{
    const Playlist = await Playlist.findById(id);
    return await Playlist.findByIdAndDelete(id);
}


exports.addsongstoplaylist = async(userId, playlistId, songData)=>{
    try {
        // Check if user and playlist exist
        const playlist = await Playlist.findOne({ _id: playlistId, user: userId });
        if (!playlist) {
          throw new Error('Playlist not found for this user.');
        }
    
        // Create new song
        const song = new song(songData);
        await song.save();
    
        // Add song to playlist
        playlist.songs.push(song);
        await playlist.save();
    
        return { success: true, message: 'Song added to playlist.' };
      } catch (error) {
        return { success: false, message: error.message };
      }
    }