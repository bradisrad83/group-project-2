'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable("Surveys", {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });
  },

  down: queryInterface => queryInterface.dropTable('Surveys')
};
