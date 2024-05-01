const express = require('express');
const router = express.Router();

const appController = require('../Controllers/applicationController');
const commentController = require('../Controllers/commentController');
router.get('/',appController.getAllApplication);
router.get('/:id',appController.getApplicationById);
router.post('/',appController.createApplication);
router.delete('/;id',appController.deleteApplication);
router.put('/:id',appController.updateApplication);
router.post('/comment/:id',commentController.createComment)
module.exports = router;