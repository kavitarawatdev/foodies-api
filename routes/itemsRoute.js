const express = require('express');
const {getAllItems, getAllItemsTesting, getIndItem} = require('../controllers/itemsController');

const router = express.Router();

router.route("/").get(getAllItems);
router.route("/testing").get(getAllItemsTesting);
router.route("/:id").get(getIndItem);

module.exports = router;