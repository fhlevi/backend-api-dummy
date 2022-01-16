var express = require('express');
var router = express.Router();
var inquiry_controller = require('../../controllers/inquiryController');

router.post('/ppob/get/topup', inquiry_controller.topupInquiry)

module.exports = router