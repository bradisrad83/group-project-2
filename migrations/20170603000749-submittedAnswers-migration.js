'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.createTable('submittedAnswers', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          userAnswer: {
              type: Sequelize.JSON,
              allowNull: false
          },
          created_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('NOW()')
          },
          updated_at: {
              type: Sequelize.DATE,
              defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
          },
          ProfileId: {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'Profiles',
                  key: 'id'
              },
              onDelete: 'cascade',
              onUpdate: 'cascade'
          }
      })
  },


  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('submittedAnswers');


    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
