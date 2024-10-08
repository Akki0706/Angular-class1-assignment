const express=require('express');
const router=express.Router();
const userController=require('../Controllers/userController')
router.get('/',userController.getAllUser);
router.post('/restricted/:id',userController.addToRestricted);
router.delete('/restricted/:id',userController.removeFromRestricted);
module.exports=router;
