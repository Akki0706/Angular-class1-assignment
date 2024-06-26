const express = require('express');
const router = express.Router();
const trailController = require('../Controllers/trialController');
const commentController = require('../Controllers/commentController');
const reviewController = require('../Controllers/reviewController');

router.get('/search', trailController.searchByLocation);
router.get('/filter', trailController.filter);
router.get('/', trailController.getAllTrails);
router.get('/:id', trailController.getTrailById);
router.put('/:id', trailController.updateTrail);
router.post('/', trailController.createTrail);
router.delete('/:id', trailController.deleteTrail);




router.get('/:id/reviews', reviewController.getAllReview);
router.post('/:id/reviews', reviewController.createReview);
router.put('/:trailid/reviews/:id', reviewController.updateReview);
router.delete('/:trailid/reviews/:id', reviewController.deleteReview);
module.exports = router;
