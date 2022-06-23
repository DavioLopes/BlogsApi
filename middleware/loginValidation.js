const emailValidation = (req, res, next) => {
  try {
    const { email } = req.body;
    const emailShape = /\S+@\S+\.\S+/;
    const validate = emailShape.test(email);
    if (typeof email === 'undefined') {
      return res.status(400).json({ message: '"email" is required' });
    }

    if (!validate) {
      return res.status(400).json({
        message: '"email" is not allowed to be empty',
      });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

const passValidation = (req, res, next) => {
  try {
    const { password } = req.body;
    if (typeof password === 'undefined') {
      return res.status(400).json({ message: '"password" is required' });
    }
    if (password.length === 0) {
      return res.status(400).json({ message: '"password" is not allowed to be empty' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  emailValidation,
  passValidation,
};