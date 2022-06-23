const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.tokenData = decoded.data;
    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};

const getUserToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded.data;
    const User = await Users.findOne({ where: { email } });
    req.user = User.dataValues;
    next();
  } catch (error) {
    if (error.name.includes('Token')) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    next(error);
  }
};
  
  module.exports = {
    tokenValidation,
    getUserToken,
  };
