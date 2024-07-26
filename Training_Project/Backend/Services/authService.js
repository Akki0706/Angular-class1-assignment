const User=require('../models/User');

const jwt=require('jsonwebtoken');

exports.register=async (username,email,password,role='user')=>{
    const existingUser = await User.findOne({email});
    if(existingUser){
        throw new Error('User Already Exists');
    }
    const newUser = new User({username,email,password,role});
    await newUser.save();
    return 'User registered successfully';
}

exports.login=async(username,password,role='user')=>{
    const user = await User.findOne({username});
    if(!user){
        throw new Error('Invalid Username');
    }

    user.checkPassword(password,(error,isMatch)=>{
        if(error || !isMatch){
            throw new Error('Invalid Password')
        }
    })

    if(role && user.role !== role){
        throw new Error('Invalid Role')
    }
    

    const token =jwt.sign({userId:user._id},'jwt_secret_key',{expiresIn:60*60});
    return token;
}

