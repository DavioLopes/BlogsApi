const { Categories } = require('../models');

const newCategoryService = async (name) => {
  const newCat = await Categories.create({ name });
  return { id: newCat.id, name: newCat.name };
};  

const allCategorieService = async () => {
  const allCate = await Categories.findAll();
  return allCate;
};

module.exports = {
  newCategoryService,
  allCategorieService,
};