const express = require('express');

const { emailValidation, passValidation } = require('../middleware/loginValidation');
const { loginController } = require('../controller/loginController');

const router = express.Router();

router.post('/',
  emailValidation,
  passValidation,
  loginController);

module.exports = router;