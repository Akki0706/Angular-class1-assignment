const express = require('express');
const router = express.Router();

const playlistController = require('../Controllers/playlistController')
router.get('/',playlistController.getAllPlaylist);
router.get('/:id',playlistController.getPlaylistById);
router.post('/:id',playlistController.addPlaylist);
router.delete('/:id',playlistController.deletePlaylist);

module.exports = router;