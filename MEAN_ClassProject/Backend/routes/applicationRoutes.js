const express=require('express');
const router=express.Router();

const {authorize}=require('../middleware/authMiddleware')
const applicationController=require('../Controllers/applicationControllers');
router.get('/',applicationController.getAllApplications);
router.get('/:id',applicationController.getAllApplicationById);
router.post('/',applicationController.createApplication);
router.put('/:id',applicationController.updateApplication);
router.delete('/:id',applicationController.deleteApplication);

module.exports=router;