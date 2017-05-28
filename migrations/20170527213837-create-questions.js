'use strict';

var Questions = require('../models')['Questions'];

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        type: Sequelize.INTEGER
      },
      question: {
        allowNull: false,
        type: Sequelize.STRING
      },
      qId: {
        allowNull: true,
        type: Sequelize.STRING
      },
      answer1: {
        allowNull: false,
        type: Sequelize.STRING
      },
      answer2: {
        allowNull: false,
        type: Sequelize.STRING
      },
      answer3: {
        allowNull: false,
        type: Sequelize.STRING
      },
      answer4: {
        allowNull: false,
        type: Sequelize.STRING
      },
      answer5: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }).then(function() {
      Questions.bulkCreate([{
        question: "Your friend calls and says let's go grab a beer.  What do you do?",
        qId: "q1",
        answer1: "You know your buddy is a drinker and don't answer the phone.",
        answer2: "You answer the phone but make up an excuse.",
        answer3: "You go out but only for a drink or two beer.",
        answer4: "You go and you're in it for the long haul.",
        answer5: "You go out, drink all night, and pay the entire tab."
      }, {
        question: "How do you feel about snow, and winter in general?",
        qId: "q2",
        answer1: "Not a chance, I don't even own a jacket.",
        answer2: "I love seeing it on the internet and TV.",
        answer3: "I don't mind seeing it on vacation but prefer not to live in it.",
        answer4: "Yes please.",
        answer5: "I love it and want a blizzard every other weekend."
      }, {
        question: "A horror movie comes on, what do you do?",
        qId: "q3",
        answer1: "Turn that crap off now!!!!",
        answer2: "I guess if there is nothing better on",
        answer3: "As long as it's not gory and disgusting, we're good",
        answer4: "Sounds fun but I might flinch a bit",
        answer5: "The scarier the better."
      }, {
        question: "What's your stance on the great pineapple pizza debate?",
        qId: "q4",
        answer1: "Absolutely not",
        answer2: "Once in a while, sure why not",
        answer3: "Yes but can we add more than just pineapple?",
        answer4: "I'm on board",
        answer5: "There can never be enough pineapple."
      }, {
        question: "Are you an person whom is always on time?",
        qId: "q5",
        answer1: "I always run late :(",
        answer2: "50% of the time I'm always on time",
        answer3: "For the most part yes",
        answer4: "Always 5 minutes early",
        answer5: "I'd rather be an hour early than 5 minutes late."
      }, {
        question: "Country music, and go.",
        qId: "q6",
        answer1: "Please no",
        answer2: "Are we talking old school Johnny Cash or moder pop country?",
        answer3: "Some music is better than no music",
        answer4: "Of course",
        answer5: "I usually wear cowboy hats and boots"
      }, {
        question: "Is blue your favorite color?",
        qId: "q7",
        answer1: "Gross",
        answer2: "Only in eyes, other than that no",
        answer3: "Blue is cool I guess",
        answer4: "Yes, yes I do",
        answer5: "I was a smurf in another life"
      }, {
        question: "How do you feel about a hike for a date?",
        qId: "q8",
        answer1: "Oh no I'm not the outdoorsy type at all",
        answer2: "As long as it doesn't involve climbing",
        answer3: "Sounds fun, I'll give it a try",
        answer4: "What a fun idea, I'm game",
        answer5: "When do we leave!!!!!!!!!!!"
      }, {
        question: "How do you feel about Halloween?",
        qId: "q9",
        answer1: "The devils holiday",
        answer2: "I leave a bucket outside for the nieghborhood kids",
        answer3: "I'm in it for the candy",
        answer4: "Totally but nothing to crazy please",
        answer5: "Let's do matching over the top costumes, decorate the house, the whole nine yards"
      }, {
        question: "You have a week off, road trip?",
        qId: "q10",
        answer1: "I don't even own a car",
        answer2: "Maybe for a day or so but not the whole week",
        answer3: "As long as I don't have anything better to do",
        answer4: "Totally but we need to map it out and plan ahead",
        answer5: "Grab and bag and let's see where we end up!!!!!!"
      }, {
        question: "Would you drive/own a hybrid/electric car?",
        qId: "q11",
        answer1: "I own a diesel truck and will not be getting rid of it anytime soon",
        answer2: "Not feeling it, nope",
        answer3: "I think I'm ready for that MPG",
        answer4: "Yes, but I'll still need a truck for the weekends",
        answer5: "Already looking for my second one"
      }, {
        question: "Could you live in a tiny house?",
        qId: "q12",
        answer1: "Way to cramped for my style",
        answer2: "Maybe, but I think I have way too much stuff",
        answer3: "It's crossed my mind a time or two",
        answer4: "Sounds fun, let's give it a try",
        answer5: "I already am, or planning to in the near future"
      }, {
        question: "How close are you with your family?",
        qId: "q13",
        answer1: "My family is dead to me",
        answer2: "I see them once a year or so",
        answer3: "I wish I could see them more",
        answer4: "I plan my vactions to see them and spend time with them",
        answer5: "I see them all the time and cannot spend enough time with them"
      }, {
        question: "How do you feel about sandals?",
        qId: "q14",
        answer1: "Feet are gross please cover them up",
        answer2: "As long as it's not cold",
        answer3: "If I'm going to the beach sure",
        answer4: "I'm a huge fan",
        answer5: "I don't even own shows, sandals all the way"
      }, {
        question: "How do you feel about kids?",
        qId: "q15",
        answer1: "No thank you",
        answer2: "As long as their not mine",
        answer3: "Maybe, maybe not, just kinda indifferent right now",
        answer4: "One day, yes but not today",
        answer5: "I have them and or want them ASAP"
      }, {
        question: "In ten years do you see yourself in the same career/location?",
        qId: "q16",
        answer1: "Please no, I don't know if I could handle it anymore",
        answer2: "I can't think that far ahead",
        answer3: "Love where I live but it's time for a career change",
        answer4: "I love my job but wouldn't mind a new city",
        answer5: "I love my job and city and wouldn't be happier"
      }, {
        question: "Do you watch a lot of television?",
        qId: "q17",
        answer1: "I don't own a tv",
        answer2: "It's on but solely as background noise",
        answer3: "I keep up with a few shows here and there",
        answer4: "I watch 5 or so series religously",
        answer5: "Guilty as charged, it's always on and I'm always watching"
      }, {
        question: "Are pets family?",
        qId: "q18",
        answer1: "I don't like animals",
        answer2: "No they are just pets",
        answer3: "Pets are ok",
        answer4: "Yes but only 1 at a time",
        answer5: "Mine my as well by my children, and I'm always looking to expand my family"
      }, {
        question: "Are you a tattoo person?",
        qId: "q19",
        answer1: "Why defile your body?",
        answer2: "I have a few but don't plan on anymore in the future",
        answer3: "I have a few and plan a couple more in the future",
        answer4: "Love them and want more",
        answer5: "I want a full body suit eventually"
      }, {
        question: "Do you like to read?",
        qId: "q20",
        answer1: "Haven't read a book since high school",
        answer2: "Did they make it into a movie?",
        answer3: "Yes but it has to be the right book",
        answer4: "I read one once or month or so",
        answer5: "As much as I possibly can, all my free time is spent reading"
      }]);
    });
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Questions');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
