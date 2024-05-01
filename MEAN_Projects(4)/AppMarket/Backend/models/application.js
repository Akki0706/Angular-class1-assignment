const mongoose = require('mongoose');
const applicationSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
    
        ref:'User'
    },
    appName:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true
    },

    releaseDate:{
        type:String,
        required:true
    },

    version:{
        type:Number,
        required:true,
        maxlength:20
    },


    genre:{
        type:String,
        required:true,
      enum:  ['Games','Beauty','Fashion','Women','Health']
    },

    downloadCount:{
        type:Number,
        default:0
    }
    
},{
    timestamps: true ,

    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});

applicationSchema.virtual('comments', {
    ref: 'Comments',
    localField: '_id',
    foreignField: 'Application',
});

applicationSchema.virtual('averageRating').get(function() {
    const comments = this.comments;
    if (!comments || comments.length === 0) return 0;


    const totalRatings = comments.length;
    const totalSum = comments.reduce((sum, comment) => sum + comment.rating, 0);
    return totalSum / totalRatings;

})

const Applications = mongoose.model('Applications',applicationSchema);
module.exports=Applications;