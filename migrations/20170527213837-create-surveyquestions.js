module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('SurveyQuestions', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            SurveyId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Surveys',
                    key: 'id',
                },
                onDelete: 'cascade',
                onUpdate: 'cascade',
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()'),
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
            },
        });
    },
    down: queryInterface => queryInterface.dropTable('SurveyQuestions'),
};
