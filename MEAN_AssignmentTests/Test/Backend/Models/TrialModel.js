const mongoose=require('mongoose');
const trailSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    location:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true,
        enum:["easy","moderate","difficult"]
       
    },
    length:{
        type:Number,
        min:0,
        required:true
    },
    elevationGain:{
        type:Number,
        min:0,
        required:true
    },
    description:{
        type:String,
        required:true
    },
},{
    timestamps:true,
    toObject:{virtuals:true},
    toJSON:{virtuals:true}
})
trailSchema.virtual('comments', {
    'ref': 'Comment',
    localField: '_id',
    foreignField: 'trail',
});
trailSchema.virtual('reviews', {
    'ref': 'Review',
    localField: '_id',
    foreignField: 'trail',
});
const Trail=new mongoose.model('Trail',trailSchema);
module.exports=Trail;