


module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('surveyQuestions', {
      id: {
          type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      question: {
          type: Sequelize.STRING,
          allowNull: false

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
    return queryInterface.dropTable('surveyQuestions');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
