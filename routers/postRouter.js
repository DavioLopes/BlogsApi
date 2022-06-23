const express = require('express');

const {
  createPostController,
  getAllPostController,
  getPostByIdController,
  editPostController,
  deletPostController,
  getPostByName } = require('../controller/postController');

const {
  titleValidation,
  contentValidation,
  categoryIdsValidation,
  deleteValidationPost,
} = require('../middleware/postValidation');

const auth = require('../middleware/tokenValidation');

const { postEditVali } = require('../middleware/postEditVali');

const router = express.Router();

router.post('/',
  auth.getUserToken,
  titleValidation,
  contentValidation,
  categoryIdsValidation,
  createPostController);

router.get('/',
  auth.tokenValidation,
  getAllPostController);

router.get('/search',
    auth.tokenValidation,
    getPostByName);

router.get('/:id',
  auth.tokenValidation, 
  getPostByIdController);

router.put('/:id',
  auth.getUserToken,
  postEditVali,
  editPostController);

router.delete('/:id',
  auth.getUserToken,
  deleteValidationPost,
  deletPostController);

module.exports = router;
