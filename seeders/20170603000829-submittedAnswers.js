

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.bulkInsert('submittedAnswers', [{
          id: 1,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "5", "1"]}',
          ProfileId: 1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 2,
          userAnswer: '{"answer[]":["2", "2", "2", "2", "2", "2", "2", "2", "2", "2", "1", "5", "5", "5", "5", "5", "1", "1", "5", "1"]}',
          ProfileId: 2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 3,
          userAnswer: '{"answer[]":["3", "1", "2", "1", "4", "1", "5", "1", "4", "1", "2", "1", "2", "2", "3", "1", "3", "1", "3", "1"]}',
          ProfileId: 3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 4,
          userAnswer: '{"answer[]":["1", "2", "2", "2", "2", "1", "3", "5", "4", "1", "4", "1", "4", "4", "5", "1", "3", "1", "2", "1"]}',
          ProfileId: 4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 5,
          userAnswer: '{"answer[]":["1", "5", "1", "5", "1", "5", "1", "3", "1", "3", "1", "1", "4", "1", "3", "1", "2", "1", "2", "1"]}',
          ProfileId: 5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 6,
          userAnswer: '{"answer[]":["2", "4", "1", "4", "2", "4", "1", "3", "4", "1", "3", "4", "1", "3", "4", "1", "4", "1", "4", "1"]}',
          ProfileId: 6,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 7,
          userAnswer: '{"answer[]":["4", "3", "1", "3", "1", "1", "3", "1", "3", "1", "3", "1", "3", "3", "1", "1", "3", "1", "3", "1"]}',
          ProfileId: 7,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 8,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "5", "1"]}',
          ProfileId: 8,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 9,
          userAnswer: '{"answer[]":["5", "5", "5", "1", "5", "1", "5", "1", "5", "1", "1", "5", "5", "5", "5", "3", "1", "3", "3", "1"]}',
          ProfileId: 9,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 10,
          userAnswer: '{"answer[]":["1", "2", "3", "3", "1", "3", "1", "4", "1", "4", "1", "4", "1", "1", "1", "4", "4", "1", "2", "1"]}',
          ProfileId: 10,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 11,
          userAnswer: '{"answer[]":["1", "2", "1", "4", "4", "4", "2", "3", "2", "3", "3", "2", "3", "2", "3", "2", "1", "1", "1", "1"]}',
          ProfileId: 11,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 12,
          userAnswer: '{"answer[]":["2", "3", "4", "4", "5", "4", "3", "2", "1", "3", "4", "4", "5", "3", "4", "2", "1", "1", "2", "3"]}',
          ProfileId: 12,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 13,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "5", "4"]}',
          ProfileId: 13,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 14,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "5", "1"]}',
          ProfileId: 14,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 15,
          userAnswer: '{"answer[]":["2", "3", "5", "4", "2", "4", "1", "3", "1", "4", "1", "1", "2", "1", "1", "1", "4", "3", "1", "5"]}',
          ProfileId: 15,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 16,
          userAnswer: '{"answer[]":["1", "1", "3", "3", "4", "1", "4", "1", "4", "4", "3", "3", "1", "3", "1", "3", "4", "3", "2", "2"]}',
          ProfileId: 16,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 17,
          userAnswer: '{"answer[]":["4", "1", "4", "4", "4", "4", "4", "1", "2", "2", "3", "2", "3", "1", "2", "1", "1", "1", "3", "1"]}',
          ProfileId: 17,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 18,
          userAnswer: '{"answer[]":["1", "1", "4", "1", "2", "4", "3", "5", "1", "4", "1", "5", "1", "4", "2", "4", "1", "1", "2", "1"]}',
          ProfileId: 18,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          id: 19,
          userAnswer: '{"answer[]":["2", "1", "5", "1", "4", "3", "5", "2", "1", "3", "1", "2", "4", "3", "1", "4", "3", "1", "4", "1"]}',
          ProfileId: 19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 20,
          userAnswer: '{"answer[]":["4", "3", "4", "5", "1", "4", "1", "2", "3", "4", "1", "2", "1", "1", "1", "3", "5", "1", "3", "1"]}',
          ProfileId: 20,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 21,
          userAnswer: '{"answer[]":["1", "4", "4", "5", "2", "5", "3", "1", "4", "1", "2", "4", "2", "4", "1", "2", "4", "1", "4", "1"]}',
          ProfileId: 21,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 22,
          userAnswer: '{"answer[]":["3", "1", "5", "1", "2", "3", "2", "3", "1", "3", "3", "1", "4", "4", "1", "4", "4", "1", "3", "1"]}',
          ProfileId: 22,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 23,
          userAnswer: '{"answer[]":["4", "5", "5", "5", "1", "5", "1", "5", "1", "4", "1", "3", "4", "1", "1", "5", "4", "1", "4", "1"]}',
          ProfileId: 23,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 24,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "4", "5", "1", "1", "1"]}',
          ProfileId: 24,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 25,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "4", "3", "1", "2", "1"]}',
          ProfileId: 25,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 26,
          userAnswer: '{"answer[]":["1", "1", "1", "4", "1", "3", "1", "4", "1", "5", "1", "3", "2", "1", "3", "2", "1", "1", "3", "1"]}',
          ProfileId: 26,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 27,
          userAnswer: '{"answer[]":["5", "1", "3", "1", "4", "4", "4", "3", "5", "4", "5", "1", "3", "1", "2", "3", "2", "1", "1", "1"]}',
          ProfileId: 27,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 28,
          userAnswer: '{"answer[]":["2", "1", "3", "1", "4", "1", "5", "1", "2", "1", "3", "1", "5", "1", "5", "3", "4", "1", "2", "1"]}',
          ProfileId: 28,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 29,
          userAnswer: '{"answer[]":["3", "4", "5", "1", "3", "2", "3", "5", "4", "2", "3", "2", "4", "3", "4", "2", "4", "1", "3", "1"]}',
          ProfileId: 29,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 30,
          userAnswer: '{"answer[]":["2", "1", "3", "4", "5", "2", "4", "2", "4", "5", "1", "2", "4", "2", "3", "2", "3", "1", "4", "1"]}',
          ProfileId: 30,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 31,
          userAnswer: '{"answer[]":["4", "2", "5", "1", "2", "4", "3", "1", "2", "5", "2", "4", "3", "1", "2", "1", "3", "3", "1", "1"]}',
          ProfileId: 31,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 32,
          userAnswer: '{"answer[]":["4", "2", "3", "5", "1", "4", "2", "5", "3", "2", "4", "5", "1", "3", "4", "2", "2", "3", "2", "1"]}',
          ProfileId: 32,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 33,
          userAnswer: '{"answer[]":["2", "2", "2", "2", "2", "3", "3", "3", "3", "3", "3", "1", "1", "1", "1", "2", "1", "1", "2", "1"]}',
          ProfileId: 33,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 34,
          userAnswer: '{"answer[]":["1", "3", "5", "3", "2", "4", "1", "3", "1", "5", "2", "4", "1", "5", "1", "3", "1", "1", "5", "1"]}',
          ProfileId: 34,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 35,
          userAnswer: '{"answer[]":["1", "1", "1", "1", "1", "1", "3", "1", "1", "5", "1", "1", "2", "1", "1", "1", "3", "5", "5", "5"]}',
          ProfileId: 35,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          id: 36,
          userAnswer: '{"answer[]":["3", "1", "2", "1", "5", "1", "4", "1", "3", "1", "2", "1", "4", "1", "4", "3", "4", "1", "5", "2"]}',
          ProfileId: 36,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }])
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('submittedAnswers');

      /*
        Add reverting commands here.
        Return a promise to correctly handle asynchronicity.

        Example:
        return queryInterface.bulkDelete('Person', null, {});
      */
  }
};
