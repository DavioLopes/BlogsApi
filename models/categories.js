const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
  },
};

module.exports = (sequelize) => {
  const Categories = sequelize.define('Categories', Attributes,
    {
      timestamps: false,
      tableName: 'Categories',
    });
  return Categories;
};
