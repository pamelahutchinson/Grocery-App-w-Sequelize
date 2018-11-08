'use strict';
module.exports = (sequelize, DataTypes) => {
  const items = sequelize.define('items', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {});
  items.associate = function(models) {
    // associations can be defined here
  };
  return items;
};