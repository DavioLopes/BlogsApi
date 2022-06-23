const { Users } = require('../models');

const findUserService = async (email) => {
  const user = await Users.findOne({ where: { email } });
  return user;
};

const createUserService = async (displayName, email, password, image) => {
  const newUser = await Users.create({ displayName, email, password, image });
  return newUser;
};

const getAllUserService = async () => {
  const allUsers = await Users.findAll();
  return allUsers;
};

const getUserByIdService = async (id) => {
  const userById = await Users.findOne({ where: { id } });
  return userById;
};

const deletUserService = async (email) => {
  await Users.destroy({ where: { email } });
};

module.exports = {
  findUserService,
  createUserService,
  getUserByIdService,
  getAllUserService,
  deletUserService,
};