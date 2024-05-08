const express = require('express');
const router = express.Router();
const {authenticateUser, authorizeUser, authorizeCreator}=require('../Middleware/authMiddleware');
const appController = require('../Controllers/applicationController');
const commentController = require('../Controllers/commentController');
router.get('/',appController.getAllApplication);
router.get('/:id',appController.getApplicationById);
router.post('/', authorizeUser('admin'),  appController.createApplication);
router.delete('/:id', authorizeUser('admin'),authorizeCreator,appController.deleteApplication);
router.put('/:id', authorizeUser('admin'),authorizeCreator, appController.updateApplication);
router.post('/comment/:id',commentController.createComment);
router.delete('/comment/delete/:id',commentController.deleteComment);
router.get('/comment/:id',commentController.getComments);
module.exports = router;