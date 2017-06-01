'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.bulkInsert('Profiles', [{
      id: 1,
      firstName: "Brad",
      lastName: "Sever",
      sex: "Male",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/brad.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 1
    }, {
      id: 2,
      firstName: "Brian",
      lastName: "Pine",
      sex: "Male",
      location: "Florida",
      zipCode: 32807,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/brian.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 2
    }, {
      id: 3,
      firstName: "Chris",
      lastName: "Cruise",
      sex: "Male",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/chris.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 3
    }, {
      id: 4,
      firstName: "Deon",
      lastName: "Neilson",
      sex: "Male",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/deon.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 4
    }, {
      id: 5,
      firstName: "Elsa",
      lastName: "Wright",
      sex: "Female",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/elsa.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 5
    }, {
      id: 6,
      firstName: "Emily",
      lastName: "Huston",
      sex: "Female",
      location: "Florida",
      zipCode: 34711,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/emily.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 6
    }, {
      id: 7,
      firstName: "Gary",
      lastName: "Bremmer",
      sex: "Male",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/gary.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 7
    }, {
      id: 8,
      firstName: "Hanna",
      lastName: "Wolf",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/hanna.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 8
    }, {
      id: 9,
      firstName: "Jack",
      lastName: "Bishop",
      sex: "Male",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/jack.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 9
    }, {
      id: 10,
      firstName: "Jackie",
      lastName: "Hughes",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/jackie.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 10
    }, {
      id: 11,
      firstName: "Jane",
      lastName: "Cosmo",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/jane.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 11
    }, {
      id: 12,
      firstName: "Jess",
      lastName: "Walker",
      sex: "Female",
      location: "Florida",
      zipCode: 33896,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/jess.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 12
    }, {
      id: 13,
      firstName: "Jill",
      lastName: "Mack",
      sex: "Female",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/jill.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 13
    }, {
      id: 14,
      firstName: "Kate",
      lastName: "James",
      sex: "Female",
      location: "Florida",
      zipCode: 32807,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/kate.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 14
    }, {
      id: 15,
      firstName: "Kelly",
      lastName: "Davidson",
      sex: "Female",
      location: "Florida",
      zipCode: 33897,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/kelly.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 15
    }, {
      id: 16,
      firstName: "Kerry",
      lastName: "Anderson",
      sex: "Female",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/kerry.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 16
    }, {
      id: 17,
      firstName: "Kevin",
      lastName: "Sanders",
      sex: "Male",
      location: "Florida",
      zipCode: 34747,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/kevin.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 17
    }, {
      id: 18,
      firstName: "Logan",
      lastName: "Hart",
      sex: "Male",
      location: "Florida",
      zipCode: 32807,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/logan.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 18
    }, {
      id: 19,
      firstName: "Lu",
      lastName: "Chow",
      sex: "Male",
      location: "Florida",
      zipCode: 32807,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/lu.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 19
    }, {
      id: 20,
      firstName: "Mary",
      lastName: "White",
      sex: "Female",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/mary.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 20
    }, {
      id: 21,
      firstName: "Micah",
      lastName: "Jones",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/micha.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 21
    }, {
      id: 22,
      firstName: "Mike",
      lastName: "Lundin",
      sex: "Male",
      location: "Florida",
      zipCode: 33896,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/mike.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 22
    }, {
      id: 23,
      firstName: "Nick",
      lastName: "Kiputh",
      sex: "Male",
      location: "Florida",
      zipCode: 34711,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/nick.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 23
    }, {
      id: 24,
      firstName: "Pat",
      lastName: "Faulkner",
      sex: "Male",
      location: "Florida",
      zipCode: 34711,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/pat.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 24
    }, {
      id: 25,
      firstName: "Paul",
      lastName: "Marson",
      sex: "Male",
      location: "Florida",
      zipCode: 33897,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/paul.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 25
    }, {
      id: 26,
      firstName: "Pete",
      lastName: "Rico",
      sex: "Male",
      location: "Florida",
      zipCode: 32807,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/pete.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 26
    }, {
      id: 27,
      firstName: "Pyra",
      lastName: "Patel",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/pyra.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 27
    }, {
      id: 28,
      firstName: "Rajiv",
      lastName: "Khan",
      sex: "Male",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/rajiv.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 28
    }, {
      id: 29,
      firstName: "Rob",
      lastName: "Adams",
      sex: "Male",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/rob.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 29
    }, {
      id: 30,
      firstName: "Sally",
      lastName: "Hunter",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/sally.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 30
    }, {
      id: 31,
      firstName: "Sam",
      lastName: "Cohen",
      sex: "Male",
      location: "Florida",
      zipCode: 33896,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/sam.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 31
    }, {
      id: 32,
      firstName: "Sarah",
      lastName: "Palance",
      sex: "Female",
      location: "Florida",
      zipCode: 33897,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/sarah.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 32
    }, {
      id: 33,
      firstName: "Steve",
      lastName: "Zane",
      sex: "Male",
      location: "Florida",
      zipCode: 32801,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/steve.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 33
    }, {
      id: 34,
      firstName: "Sue",
      lastName: "Chase",
      sex: "Female",
      location: "Florida",
      zipCode: 32807,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/sue.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 34
    }, {
      id: 35,
      firstName: "Sun",
      lastName: "Lee",
      sex: "Male",
      location: "Florida",
      zipCode: 34747,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/sun.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 35
    }, {
      id: 36,
      firstName: "Wendy",
      lastName: "Baker",
      sex: "Female",
      location: "Florida",
      zipCode: 32765,
      bio: "add dummy bio",
      imgLink: "https://s3.amazonaws.com/job-ucf-code-bootcamp/matchstick/profile_img/wendy.jpg",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      AccountId: 36
    }, ]);
  },
  down: queryInterface => {
    queryInterface.bulkDelete('Profiles', null, {});
  }
};
