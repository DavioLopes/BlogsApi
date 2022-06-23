const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  displayName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  image: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Users = sequelize.define('Users', Attributes,
    {
      timestamps: false,
      tableName: 'Users',
    });
    Users.associate = (models) => {
      Users.hasMany(models.BlogPosts, {
        foreignKey: 'userId',
        as: 'BlogPosts',
      });
    };
  return Users;
};
