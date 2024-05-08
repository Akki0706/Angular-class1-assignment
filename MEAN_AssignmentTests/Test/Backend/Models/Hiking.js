const mongoose = require('mongoose');
const hikingSchema = new mongoose.Schema({

 
    name:{
        type:String,
        required:true
    },

    
    location:{
        type:String,
        required:true
    },  

    difficult:{
        type:String,
        required:true,
        enum:['easy','moderate','difficult']
    },

    length:{
        type:Number,
        required:true,
        min:0
    },

    elevationGain:{
        type:Number,
        required:true,
        min:0
    },

    description:{
        type:String,
        required:true
    },
review:[{
    rating:{
        type:Number,
        required:true,
        min:0,
        max:5
    },

    comment:{
        type:String,
        required:true
    }
}]

})


const hiking = mongoose.model('hiking',hikingSchema);
module.exports= hiking;