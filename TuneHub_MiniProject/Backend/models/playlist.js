const mongoose = require('mongoose');
const playlistSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }, 
    playlistSongs:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Song',
        default:""
    }]

    
})

const Playlist = mongoose.model('Playlist',playlistSchema);
module.exports=Playlist;