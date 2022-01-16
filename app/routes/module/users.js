var express = require('express');
var router = express.Router();
var user_controller = require('../../controllers/userController');

/* POST login users listing. */
router.post('/login', user_controller.loginUser);

module.exports = router;
