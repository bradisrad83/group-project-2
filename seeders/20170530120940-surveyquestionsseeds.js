module.exports = {
    up: (queryInterface, Sequelize) => {
        queryInterface.bulkInsert('SurveyQuestions', [{
            id: 1,
            question: "Your friend calls and says let's go grab a beer.  What do you do?",
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 2,
            question: 'How do you feel about snow, and winter in general?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 3,
            question: 'A horror movie comes on, what do you do?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 4,
            question: "What's your stance on the great pineapple pizza debate?",
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 5,
            question: 'Are you an person whom is always on time?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 6,
            question: 'Country music, and go.',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 7,
            question: 'Is blue your favorite color?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 8,
            question: 'How do you feel about a hike for a date?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 9,
            question: 'How do you feel about Halloween?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 10,
            question: 'You have a week off, road trip?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 11,
            question: 'Would you drive/own a hybrid/electric car?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 12,
            question: 'Could you live in a tiny house?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 13,
            question: 'How close are you with your family?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 14,
            question: 'How do you feel about sandals?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 15,
            question: 'How do you feel about kids?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 16,
            question: 'In ten years do you see yourself in the same career/location?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 17,
            question: 'Do you watch a lot of television?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 18,
            question: 'Are pets family?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 19,
            question: 'Are you a tattoo person?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }, {
            id: 20,
            question: 'Do you like to read?',
            SurveyId: 1,
            createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
            updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        }]);
    },
    down: queryInterface => {
        queryInterface.bulkDelete('SurveyQuestions', null, {});
    },
};
