const postEditVali = (req, res, next) => {
  try {
    const { title, content } = req.body;
    if (typeof title === 'undefined') {
      return res.status(400).json({ message: '"title" is required' });
    }
    if (typeof content === 'undefined') {
      return res.status(400).json({ message: '"content" is required' });
    }
    const { categoryIds } = req.body;
    if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });
    next(); 
  } catch (e) {
    return next(e);
  }
};
module.exports = {
  postEditVali,
};