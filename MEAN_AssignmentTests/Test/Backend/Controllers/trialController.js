const trailService=require('../Services/trialsService');
exports.getAllTrails = async (req, res) => {
    try {
        const { sort } = req.query;
        const trails = await trailService.getAllTrails(sort);
        res.json(trails);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getTrailById=async(req,res)=>{
    try{
        const trail=await trailService.getTrailById(req.params.id);
       if(!trail){
         res.json("trail not found");
       }
       res.json(trail)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.createTrail=async(req,res)=>{
    try{
        const trail=await trailService.createTrail(req.body);
       if(!trail){
         res.json("trail not created");
       }
       res.json(trail);
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.updateTrail=async(req,res)=>{
    try{
        const trail=await trailService.updateTrail(req.params.id,req.body);
       if(!trail){
         res.json("failed to update");
       }
       res.json(trail)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.deleteTrail=async(req,res)=>{
    try{
        const trail=await trailService.deleteTrail(req.params.id);
       if(!trail){
         res.json(" not found");
       }
       res.json("trail deleted ")
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.searchByLocation=async(req,res)=>{
    try{
        const location=req.query.location; 
        const trail=await trailService.searchByLocation(location);
       if(!trail){
         res.json("trails not found");
       }
       res.json(trail)
    }
    catch(error){
        res.json({message:error.message});
    }

}
exports.filter=async(req,res)=>{
    try{

        const trail=await trailService.filter(req.query);
       if(!trail){
         res.json("trails not found");
       }
       res.json(trail)
    }
    catch(error){
        res.json({message:error.message});
    }

}
