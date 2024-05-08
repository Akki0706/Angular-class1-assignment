const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const userSchema=new mongoose.Schema({
    
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin']
    }

},{
    toJSON: {virtuals: true},
    toObject:{ virtuals: true}
})
userSchema.virtual('playlists', {
    'ref': 'playlist',
    localField: '_id',
    foreignField: 'user',
});
userSchema.pre('save', async function(next) {
    
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



userSchema.methods.checkPassword = function(password) {
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
const User=new mongoose.model('User',userSchema);
module.exports=User;