'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('surveyQuestions', {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
      },
      question: {
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
      },
      SurveyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Surveys',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  down: queryInterface => queryInterface.dropTable('surveyQuestions')
};
