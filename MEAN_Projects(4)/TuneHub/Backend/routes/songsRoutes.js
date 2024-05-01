const express = require('express');
const router = express.Router();

const songsController = require('../Controllers/songsController');

router.get('/',songsController.getAllSongs);
router.get('/:id',songsController.getSongsById);
router.post('/',songsController.addSongs);
router.put('/:id',songsController.updateSongs);
router.delete('/:id',songsController.deleteSongs);

module.exports=router;