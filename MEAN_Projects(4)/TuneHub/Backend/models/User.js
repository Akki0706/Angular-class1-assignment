const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    }
},{
    toJSON :{virtuals:true},
    toObject :{virtuals:true}
})

userSchema.virtual('playlists',{
    ref :'playlist',
    localField:'_id',
    foreignField:'user',
});

const User = new mongoose.model('User',userSchema);
module.exports = User;
