module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    { timestamps: false });
  User.associate = (models) => {
    User.hasMany(models.BlogPosts, { as: 'blogPost', foreignKey: 'userId' });
  };
  return User;
};