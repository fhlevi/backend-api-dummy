var express = require('express');
var router = express.Router();
var product_controller = require('../../controllers/productController');

router.get('/ppob/get/denom/:code', product_controller.getProductList);

module.exports = router;
