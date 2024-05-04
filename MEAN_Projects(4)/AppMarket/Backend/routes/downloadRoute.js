const express=require('express');
const router=express.Router();
const downloadController=require('../Controllers/downloadController');
router.get('/',downloadController.getdownloads)
router.delete('/:id',downloadController.removefromdownloads)
router.post('/:id',downloadController.addtodownloads);
module.exports=router;

