module.exports = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories',
    {}, { timestamps: false });

  PostsCategories.associate = (models) => {
    models.Categories.belongsToMany(models.BlogPosts,
      { through: PostsCategories, foreignKey: 'categoryId', otherKey: 'postId' });

      models.BlogPosts.belongsToMany(models.Categories,
        { through: PostsCategories, foreignKey: 'postId', otherKey: 'categoryId' });
  };
  return PostsCategories;
};