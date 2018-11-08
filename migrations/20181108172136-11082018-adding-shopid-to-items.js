'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'items',
      'shopid',{
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {
          model: 'shoppinglists',
          key: 'id'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.removeColumn(
      'items',
      'shopid'
    )
  }
};
