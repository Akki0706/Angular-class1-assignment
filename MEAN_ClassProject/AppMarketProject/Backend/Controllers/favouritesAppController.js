const  favouritesService = require('../Services/favouriteAppServices')

exports.getAllFavourites = async (req,res)=>{
    try{
        const favApps = await favouritesService.getAllFavourites(req.user_email);
        res.json(favApps);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.addToFavourites = async (req,res)=>{
    try{
         await favouritesService.addToFavourites(req.user_email,req.params.id);
        res.status(200).json({message:'Application added to favourites'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.removeFromFavourites = async (req,res)=>{
    try{
         await favouritesService.removeFromFavourites(req.user_email,req.params.id);
        res.status(200).json({message:'Application removed from favourites'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
}