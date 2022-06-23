const nameValidation = (req, res, next) => {
  try {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      return res.status(400).json({
        message: '"displayName" length must be at least 8 characters long',
      });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

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
        message: '"email" must be a valid email',
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
    if (password.length !== 6) {
      return res.status(400).json({ message: '"password" length must be 6 characters long' });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  emailValidation,
  nameValidation,
  passValidation,
};