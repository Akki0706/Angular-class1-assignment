const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
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
    enum:['user','admin'],
default:'user'
},   
},
{
    timestamps:true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
},);
userschema.virtual('createdApplications',{
    'ref':'Application',
    localField:'_id',
    foreignField:'user'
});

const User = new mongoose.model('User',userschema);
module.exports=User;

