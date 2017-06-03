module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.createTable('SurveyAnswers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            body: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            value: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            SurveyQuestionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'SurveyQuestions',
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
    down: queryInterface => queryInterface.dropTable('SurveyAnswers'),
};
