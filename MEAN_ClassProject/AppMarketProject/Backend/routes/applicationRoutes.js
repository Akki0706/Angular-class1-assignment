const express=require('express');
const router=express.Router();

const {authorize,viewCount,favCount}=require('../middleware/authMiddleware')
const applicationController=require('../Controllers/applicationControllers');
router.get('/', applicationController.getAllApplications);
router.get('/:id',viewCount,applicationController.getAllApplicationById);
router.post('/',authorize('admin'),applicationController.createApplication);
router.put('/:id',favCount,authorize('admin'),applicationController.updateApplication);
router.delete('/:id',authorize('admin'),applicationController.deleteApplication);



module.exports=router;