const {
  getAllPostService,
  createPostService,
  getPostByIdService,
  editPostService,
  deletePostService,
} = require('../service/postService');

const { allCategorieService } = require('../service/categoryService');

const createPostController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const allCategories = await allCategorieService();
  const idCategory = allCategories.map(({ id }) => id);
  const userId = req.user.id;
  console.log(req.user.id);
  const checkIdCategory = categoryIds.every((id) => idCategory.includes(id));
  if (!checkIdCategory) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  const newPost = createPostService(title, content, userId, idCategory);
  return res.status(201).json(newPost);
};

const getAllPostController = async (_req, res) => {
  const allPosts = await getAllPostService();
  return res.status(200).json(allPosts);
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  const ifExistPost = await getPostByIdService(id);
  if (!ifExistPost) { return res.status(404).json({ message: 'Post does not exist' }); }
  const postById = await getPostByIdService(id);
  return res.status(200).json(postById);
};

const editPostController = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const ifExistPost = await getPostByIdService(id);
  if (!ifExistPost) {
    return res.status(401).json({ message: 'Post does not exist' });
  }
  if (ifExistPost.dataValues.userId !== req.user.id) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  const updetedPost = await editPostService(title, content, id);
  return res.status(200).json(updetedPost);
};

const deletPostController = async (req, res) => {
  const { id } = req.params;
  await deletePostService(id);
  return res.status(200).end();
};

const getPostByName = async (req, res) => {
  const { q } = req.query;
  const getAllPosts = await getAllPostService();
  if (!q) return res.status(200).json(getAllPosts);

  const post = getAllPosts.filter((elem) => (elem.title.includes(q) || elem.content.includes(q)));
  return res.status(200).json(post);
};

module.exports = {
  createPostController,
  getAllPostController,
  getPostByIdController,
  editPostController,
  deletPostController,
  getPostByName,
};