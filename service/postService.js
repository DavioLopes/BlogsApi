const { BlogPosts, Categories, Users } = require('../models');

const getAllPostService = async () => {
  const allPosts = await BlogPosts.findAll({
    include: [{
      model: Users,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Categories,
      as: 'categories',
      through: { attributes: [] },
    }],
  });
  return allPosts;
};

const createPostService = async (title, content, userId, idCategory) => {
  const newPost = await BlogPosts.create({ title, content, userId });
  await newPost.addCategory(idCategory);
  return newPost;
};

const getPostByIdService = async (id) => {
  const postById = await BlogPosts.findOne({
    where: { id },
    include: [{
      model: Users,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    {
      model: Categories,
      as: 'categories',
      through: { attributes: [] },
    },
    ],
  });
  return postById;
};

const editPostService = async (title, content, id) => {
  await BlogPosts.update({ title, content }, { where: { id } });
  const updetedPost = await BlogPosts.findOne({
    where: { id },
    attributes: { exclude: ['id', 'published', 'updated'] },
    include: [{
      model: Categories,
      as: 'categories',
      through: { attributes: [] },
    },
    ],
  });
  return updetedPost;
};

const deletePostService = async (id) => {
  await BlogPosts.destroy({ where: { id } });
};

module.exports = {
  getAllPostService,
  createPostService,
  getPostByIdService,
  editPostService,
  deletePostService,
};