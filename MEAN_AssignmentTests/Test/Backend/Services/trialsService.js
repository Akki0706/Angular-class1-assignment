const Trail = require('../Models/TrialModel');
exports.getAllTrails = async (sortBy) => {
    try {
        let query = Trail.find();
        
        if (sortBy === 'rating') {
            query = query.sort({ rating: -1 });
        } else if (sortBy === 'length') {
            query = query.sort({ length: 1 });
        } else if (sortBy === 'elevationGain') {
            query = query.sort({ elevationGain: 1 });
        } else if (sortBy !== undefined) {
            throw new Error('Invalid sorting parameter');
        }
        return await query.exec();
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getTrailById=async(id)=>{
    try{
     return await Trail.findById(id);
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.createTrail=async(newFields)=>{
    try{
       
        const trail=new Trail(newFields);
     return await trail.save();
    }
    catch(error){
     throw new Error(error);
    }
 }
 exports.updateTrail=async(id,updatedFields)=>{
    try{
   
     return await Trail.findByIdAndUpdate(id,updatedFields,{new:true});
    }
    catch(error){
     throw new Error(error);
    }
 }
exports.deleteTrail=async(id)=>{
    try{
     
     return await Trail.findByIdAndDelete(id);
    }
    catch(error){
     throw new Error(error);
   }
}
exports.searchByLocation=async(loc)=>{
   try{
      
    return await Trail.find({location:{$regex:new RegExp(loc,'i')}}).populate('comments').populate('reviews');
   }
   catch(error){
    throw new Error(error);
   }
}
exports.filter=async(filter)=>{
   try{
      const query={};
      const {difficulty,minLength,maxLength,minElevation,maxElevation}=filter  
      if(difficulty){
         query.difficulty={$regex:new RegExp(difficulty,'i')}
      }
      if(minLength){
         query.length={$gte:minLength}
      }
      if(maxLength){
         query.length={$lte:maxLength}
      }
      if(minElevation){
         query.elevationGain={$gte:minElevation}
      }
      if(maxElevation){
         query.elevationGain={$lte:maxElevation}
      }
    return await Trail.find(query).populate('comments').populate('reviews');
   }
   catch(error){
    throw new Error(error);
   }
}
