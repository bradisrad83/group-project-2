'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Surveys', [{
      id: 1,
      title: "Basic Survey",
      description: "General matching",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    }, ]);
  },
  down: queryInterface => {
    queryInterface.bulkDelete('Surveys', null, {});
  }
};
