const { newCategoryService, allCategorieService } = require('../service/categoryService');

const createCategoryController = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const newCategory = await newCategoryService(name);
  return res.status(201).json(newCategory);
};

const findAllController = async (_req, res) => {
  const allCate = await allCategorieService();
  return res.status(200).json(allCate);
};

module.exports = {
  createCategoryController,
  findAllController,
};