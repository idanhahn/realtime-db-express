var express = require('express');
let router = express.Router();

var apiController = require('../controllers/apiController')

// GET ALL
router.get('/', apiController.get_all);

// GET BY :ID
router.get('/:id', apiController.get_by_id);

// CREATE
router.post('/', apiController.create)

// REMOVE BY :ID
router.delete('/:id', apiController.remove_by_id)

// UPDATE BY :ID
router.patch('/:id', apiController.update_by_id)


module.exports = router;
