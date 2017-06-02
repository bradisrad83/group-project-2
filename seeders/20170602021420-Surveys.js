

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.bulkInsert('Surveys', [{
          id: 1,
          title: 'Match Survey',
          description: 'General match survey.',
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }]);
  },
  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Surveys');

     }

};
