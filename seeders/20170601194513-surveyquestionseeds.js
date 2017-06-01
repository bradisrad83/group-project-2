'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.bulkInsert('surveyQuestions', [{
      id: 1,
      question: "Your friend calls and says let's go grab a beer.  What do you do?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 2,
      question: "How do you feel about snow, and winter in general?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 3,
      question: "A horror movie comes on, what do you do?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 4,
      question: "What's your stance on the great pineapple pizza debate?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 5,
      question: "Are you an person whom is always on time?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 6,
      question: "Country music, and go.",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 7,
      question: "Is blue your favorite color?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 8,
      question: "How do you feel about a hike for a date?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 9,
      question: "How do you feel about Halloween?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 10,
      question: "You have a week off, road trip?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 11,
      question: "Would you drive/own a hybrid/electric car?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 12,
      question: "Could you live in a tiny house?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 13,
      question: "How close are you with your family?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 14,
      question: "How do you feel about sandals?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 15,
      question: "How do you feel about kids?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 16,
      question: "In ten years do you see yourself in the same career/location?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 17,
      question: "Do you watch a lot of television?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 18,
      question: "Are pets family?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 19,
      question: "Are you a tattoo person?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 20,
      question: "Do you like to read?",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, ]);
  },
  down: queryInterface => {
    queryInterface.bulkDelete('surveyQuestions', null, {});
  }
};
