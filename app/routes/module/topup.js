var express = require('express');
var router = express.Router();
var topup_controller = require('../../controllers/topupController');

router.post('/ppob/topup', topup_controller.topupList)

module.exports = router