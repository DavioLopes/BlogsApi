const jwtGenerator = require('../helpers/jwtGenerator');
const loginService = require('../service/loginService');

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const user = await loginService(email, password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = jwtGenerator({ email, password });
  return res.status(200).json({ token });
};

module.exports = {
  loginController,
};