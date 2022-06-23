const { Users } = require('../models');

const loginService = async (email, password) => {
  const user = await Users.findOne({ where: { email, password } });
  return user;
};

module.exports = loginService;