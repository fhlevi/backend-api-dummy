var express = require('express');
var router = express.Router();
var balance_controller = require('../../controllers/balanceController');

router.get('/ppob/checkBalance', balance_controller.balance_check)

module.exports = router;