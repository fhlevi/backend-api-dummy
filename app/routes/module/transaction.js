var express = require('express');
var router = express.Router();
var transaction_controller = require('../../controllers/transactionController');

router.get('/wallet/history-transaction/:type?', transaction_controller.transactionHistory)

module.exports = router;