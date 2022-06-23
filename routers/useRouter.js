const express = require('express');
const {
  createUserController,
  findAllController,
  getByIdController,
  deletUserController,
} = require('../controller/userController');

const {
  nameValidation,
  emailValidation,
  passValidation,
} = require('../middleware/userValidation');

const auth = require('../middleware/tokenValidation');

const router = express.Router();

router.post('/',
  nameValidation,
  emailValidation,
  passValidation,
  createUserController);

router.get('/',
  auth.tokenValidation,
  findAllController);

router.get('/:id',
  auth.tokenValidation,
  getByIdController);

router.delete('/me',
  auth.tokenValidation,
  deletUserController);

module.exports = router;