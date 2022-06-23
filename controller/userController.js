const jwt = require('jsonwebtoken');
const jwtGenerator = require('../helpers/jwtGenerator');
const {
  findUserService,
  createUserService,
  getUserByIdService,
  getAllUserService,
  deletUserService,
} = require('../service/userService');

const createUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const alreadyExists = await findUserService(email);
  if (alreadyExists) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const newUser = await createUserService(displayName, email, password, image);
  const token = jwtGenerator({ id: newUser.id, email });
  return res.status(201).json({ token });
};

const findAllController = async (_req, res) => {
  const allUsers = await getAllUserService();
  return res.status(200).json(allUsers);
};

const getByIdController = async (req, res) => {
  const { id } = req.params;
  const userById = await getUserByIdService(id);
  if (!userById) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(userById);
};

const deletUserController = async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const { email } = decoded.data;
  await deletUserService(email);
  return res.status(200).json({ message: 'User deleted' });
};

module.exports = {
  createUserController,
  findAllController,
  getByIdController,
  deletUserController,
};