const express = require('express');

const auth = require('../middleware/tokenValidation');

const { createCategoryController,
  findAllController,
} = require('../controller/categoriesController');

const router = express.Router();

router.post('/',
  auth.tokenValidation,
  createCategoryController);

router.get('/',
  auth.tokenValidation,
  findAllController);

module.exports = router;