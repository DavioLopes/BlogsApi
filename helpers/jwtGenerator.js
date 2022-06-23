const jwt = require('jsonwebtoken');

const jwtConfig = {
  expiresIn: '1d',
};

const SECRET_KEY = process.env.JWT_SECRET;

module.exports = (payload = {}) => jwt.sign({ data: payload }, SECRET_KEY, jwtConfig);