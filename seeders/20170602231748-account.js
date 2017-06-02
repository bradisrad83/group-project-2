'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.bulkInsert('Accounts', [{
            id: 1,
            username: "brad",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "brad@brad.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 2,
            username: "brian",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "brian@brian.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 3,
            username: "chris",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "chris@chris.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 4,
            username: "deon",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "deon@deon.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 5,
            username: "elsa",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "elsa@elsa.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 6,
            username: "emily",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "emily@emily.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 7,
            username: "gary",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "gary@gary.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 8,
            username: "hanna",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "hanna@hanna.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 9,
            username: "jack",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "jack@jack.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 10,
            username: "jackie",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "jackie@jackie.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 11,
            username: "jane",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "jane@jane.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 12,
            username: "jess",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "jess@jess.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 13,
            username: "jill",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "jill@jill.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 14,
            username: "kate",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "kate@kate.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 15,
            username: "kelly",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "kelly@kelly.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 16,
            username: "kerry",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "kerry@kerry.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 17,
            username: "kevin",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "kevin@kevin.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 18,
            username: "logan",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "logan@logan.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 19,
            username: "lu",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "lu@lu.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 20,
            username: "mary",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "mary@mary.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 21,
            username: "micha",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "micha@micha.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 22,
            username: "mike",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "mike@mike.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 23,
            username: "nick",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "nick@nick.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 24,
            username: "pat",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "pat@pat.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 25,
            username: "paul",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "paul@paul.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 26,
            username: "pete",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "pete@pete.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 27,
            username: "pyra",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "pyra@pyra.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 28,
            username: "rajiv",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "rajiv@rajiv.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 29,
            username: "rob",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "rob@rob.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 30,
            username: "sally",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "sally@sally.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 31,
            username: "sam",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "sam@sam.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 32,
            username: "sarah",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "sarah@sarah.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 33,
            username: "steve",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "steve@steve.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 34,
            username: "sue",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "sue@sue.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 35,
            username: "sun",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "sun@sun.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            id: 36,
            username: "wendy",
            password: "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy",
            email: "wendy@wendy.com",
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }
    ])
},

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Accounts');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
