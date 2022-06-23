module.exports = (sequelize) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {}, {
      timestamps: false, tableName: 'PostsCategories',
  });
  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categories,
      { foreignKey: 'postId', otherKey: 'categoryId', as: 'categories', through: 'PostsCategories',
      });
    models.Categories.belongsToMany(models.BlogPosts, {
        foreignKey: 'categoryId', otherKey: 'postId', as: 'BlogPosts', through: 'PostsCategories',
      });
  };
  return PostsCategories;
};