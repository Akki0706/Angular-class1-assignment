
const trials = require('../Models/Hiking');
exports.getAllTrial= async()=> {
try{
return await trials.find();
}
catch(error){
    throw new Error(error.message)
}
}

exports.getTrialById= async(id)=> {
    try{
        const trail =  await trials.findById(id);
        return trail;
        
    }catch (error){
        throw new Error(error.message);
    }
}

exports.createTrial = async (newFields, id) => {
    try {
        newFields.user = id;
        const createdTrial = new trials(newFields);
        const savedTrial = await createdTrial.save();
        return savedTrial;
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
}

exports.deleteTrial = async(id)=> {
    try{
   
    return await deletedTrial.findByIdAndDelete(id);
    }catch(error){
        throw new Error(error);
    }
}


exports.updateTrial = async (id, updatedFields) => {
    try {
        const updatedTrial = await trials.findByIdAndUpdate(id, updatedFields, { new: true });
        if (!updatedTrial) {
            throw new Error('Trial not found');
        }
        return updatedTrial;
    } catch (error) {
        console.error(error.message);
        throw error; 
    }
}
