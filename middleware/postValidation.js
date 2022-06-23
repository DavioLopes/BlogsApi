const jwt = require('jsonwebtoken');
const { Users, BlogPosts } = require('../models');

const titleValidation = (req, res, next) => {
  try {
    const { title } = req.body;
    if (typeof title === 'undefined') {
      return res.status(400).json({ message: '"title" is required' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

const contentValidation = (req, res, next) => {
  try {
    const { content } = req.body;
    if (typeof content === 'undefined') {
      return res.status(400).json({ message: '"content" is required' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

const categoryIdsValidation = (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    if (typeof categoryIds === 'undefined') {
      return res.status(400).json({ message: '"categoryIds" is required' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

const deleteValidationPost = async (req, res, next) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded.data;
    const User = await Users.findOne({ where: { email } });
    req.user = User.dataValues;
    const ifExistPost = await BlogPosts.findOne({ where: { id } });
    if (!ifExistPost) {
      return res.status(404).json({ message: 'Post does not exist' });
    }
    if (ifExistPost.dataValues.userId !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized user' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  titleValidation,
  contentValidation,
  categoryIdsValidation,
  deleteValidationPost,
};