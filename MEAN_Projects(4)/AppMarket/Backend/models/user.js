const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    },
    downloadedApplications:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Application'
    }],

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

userschema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(this.password, salt);

        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

userschema.methods.checkPassword = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, (err, isMatch) => {
            if (err) {
                reject(err);
            } else {
                resolve(isMatch);
            }
        });
    });
};


const User = new mongoose.model('User',userschema);
module.exports=User;

