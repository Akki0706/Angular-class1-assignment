const express=require('express');
const router=express.Router()
const playlistController=require('../Controllers/playlistController');
router.get('/',playlistController.getAllPlaylist)
router.get('/:id',playlistController.getPlaylistById)
router.post('/',playlistController.createplaylist)
router.put('/:id',playlistController.updatePlaylist)
router.delete('/:id',playlistController.deleteplaylist)
router.put('/:pid/addsong/:sid',playlistController.addToPlayList)
router.delete('/:pid/removesong/:sid',playlistController.removeFromPlaylist)
module.exports=router;