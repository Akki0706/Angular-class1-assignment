const express=require('express');
const router = express.Router();
const {favCount}=require('../middleware/authMiddleware')
const favouritesController = require('../Controllers/favouritesAppController')

router.get('/', favouritesController.getAllFavourites);
router.post('/:id',favCount,favouritesController.addToFavourites);
router.delete('/:id',favouritesController.removeFromFavourites);


module.exports=router;