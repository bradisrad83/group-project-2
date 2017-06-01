'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('surveyAnswers', {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
      },
      body: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      value: {
        type: Sequelize.INTEGER,
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
      surveyQuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'surveyQuestions',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  down: queryInterface => queryInterface.dropTable('surveyAnswers')
};
