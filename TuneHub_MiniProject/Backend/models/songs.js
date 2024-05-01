const  mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
    songName:{
        type:String,
        required:true
    },
    singerName:{
        type:String,
        required:true
    },
    musicDirector:{
        type:String,
        required:true
    },
    releaseDate:{
        type:String,
        required:true
    },
    albumName:{
        type:String,
        required:true
    },
    
restrictedUserPlaylist:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Application'

}],

visibility:{
    type:Boolean,
    default:true
    
}


})

const Song = mongoose.model('Song',songSchema);
module.exports=Song;