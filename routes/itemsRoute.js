const express = require('express');
const {getAllItems, getAllItemsTesting} = require('../controllers/itemsController');

const router = express.Router();

router.route("/").get(getAllItems);
router.route("/testing").get(getAllItemsTesting)

module.exports = router;