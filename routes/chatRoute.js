var express = require('express');
let router = express.Router();

var chatController = require('../controllers/chatController')

// GET ALL
router.get('/', chatController.get_all);

// GET BY :ID
//router.get('/:id', chatController.get_by_id);

// CREATE
router.post('/', chatController.create)

// REMOVE BY :ID
//router.delete('/:id', chatController.remove_by_id)

// UPDATE BY :ID - NOT SUPORTED
//router.patch('/:id', chatController.update_by_id)


module.exports = router;
