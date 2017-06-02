'use strict';


module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.createTable('Surveys', {
          id: {
              type: Sequelize.INTEGER,
              autoIncrement: true,
              primaryKey: true
          },
          title: {
              type: Sequelize.STRING,
              allowNull: false
          },
          description:{
              type: Sequelize.STRING,
              allowNull: false
          },
          created_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('NOW()')
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')

          }
      })

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Surveys');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
