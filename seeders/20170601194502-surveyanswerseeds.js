'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.bulkInsert('surveyAnswers', [{
      id: 1,
      body: "You know your buddy is a drinker and don't answer the phone",
      value: 1,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 2,
      body: "You answer the phone but make up an excuse.",
      value: 2,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 3,
      body: "You go out but only for a drink or two beer.",
      value: 3,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 4,
      body: "You go and you're in it for the long haul.",
      value: 4,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 5,
      body: "You go out, drink all night, and pay the entire tab.",
      value: 5,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 1
    }, {
      id: 6,
      body: "Not a chance, I don't even own a jacket.",
      value: 1,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 2
    }, {
      id: 7,
      body: "I love seeing it on the internet and TV.",
      value: 2,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 2
    }, {
      id: 8,
      body: "I don't mind seeing it on vacation but prefer not to live in it.",
      value: 3,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 2
    }, {
      id: 9,
      body: "Yes please",
      value: 4,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 2
    }, {
      id: 10,
      body: "I love it and want a blizzard every other weekend",
      value: 5,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 2
    }, {
      id: 11,
      body: "Turn that crap off now!!!!",
      value: 1,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 3
    }, {
      id: 12,
      body: "I guess if there is nothing better on",
      value: 2,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 3
    }, {
      id: 13,
      body: "As long as it's not gory and disgusting, we're good",
      value: 3,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 3
    }, {
      id: 14,
      body: "Sounds fun but I might flinch a bit",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 3
    }, {
      id: 15,
      body: "The scarier the better",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 3
    }, {
      id: 16,
      body: "Absolutely not",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 4
    }, {
      id: 17,
      body: "Once in a while, sure why not",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 4
    }, {
      id: 18,
      body: "Yes but can we add more than just pineapple",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 4
    }, {
      id: 19,
      body: "I'm on board",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 4
    }, {
      id: 20,
      body: "There can never be enough pineapple",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 4
    }, {
      id: 21,
      body: "I always run late :(",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 5
    }, {
      id: 22,
      body: "50% of the time I'm always on time",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 5
    }, {
      id: 23,
      body: "For the most part yes",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 5
    }, {
      id: 24,
      body: "Always 5 minutes early",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 5
    }, {
      id: 25,
      body: "I'd rather be an hour early than 5 minutes late",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 5
    }, {
      id: 26,
      body: "Please no",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 6
    }, {
      id: 27,
      body: "Are we talking old school Johnny Cash or moder pop country?",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 6
    }, {
      id: 28,
      body: "Some music is better than old music",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId:
    }, {
      id: 29,
      body: "Of course",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 6
    }, {
      id: 30,
      body: "I usually wear cowboy hats and boots",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 6
    }, {
      id: 31,
      body: "Gross",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 7
    }, {
      id: 32,
      body: "Only in eyes, other than that no",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 7
    }, {
      id: 33,
      body: "Blue is cool I guess",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 7
    }, {
      id: 34,
      body: "Yes, yes I do",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 7
    }, {
      id: 35,
      body: "I was a smurf in another life",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 7
    }, {
      id: 36,
      body: "Oh no I'm not the outdoorsy type at all",
      value: 1,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 8
    }, {
      id: 37,
      body: "As long as it doesn't involve climbing",
      value: 2,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 8
    }, {
      id: 38,
      body: "Sounds fun, I'll give it a try",
      value: 3,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 8
    }, {
      id: 39 "What a fun idea, I'm game",
      value: 4,
      ,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 8
    }, {
      id: 40,
      body: "When do we leave!!!!!!!!!!!",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 8
    }, {
      id: 41,
      body: "The devils holiday",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 9
    }, {
      id: 42,
      body: "I leave a bucket outside for the nieghborhood kids",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 9
    }, {
      id: 43,
      body: "I'm in it for the candy",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 9
    }, {
      id: 44,
      body: "Totally but nothing to crazy please",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 9
    }, {
      id: 45,
      body: "Let's do matching over the top costumes, decorate the house, the whole nine yards",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 9
    }, {
      id: 46,
      body: "I don't even own a car",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 10
    }, {
      id: 47,
      body: "Maybe for a day or so but not the whole week",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 10
    }, {
      id: 48,
      body: "As long as I don't have anything better to do",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 10
    }, {
      id: 49,
      body: "Totally but we need to map it out and plan ahead",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 10
    }, {
      id: 50,
      body: "Grab and bag and let's see where we end up!!!!!!",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 10
    }, {
      id: 51,
      body: "I own a diesel truck and will not be getting rid of it anytime soon",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 11
    }, {
      id: 52,
      body: "Not feeling it, nope",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 11
    }, {
      id: 53,
      body: "I think I'm ready for that MPG",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 11
    }, {
      id: 54,
      body: "Yes, but I'll still need a truck for the weekends",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 11
    }, {
      id: 55,
      body: "Already looking for my second one",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 11
    }, {
      id: 56,
      body: "Way to cramped for my style",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 12
    }, {
      id: 57,
      body: "Maybe, but I think I have way too much stuff",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 12
    }, {
      id: 58,
      body: "It's crossed my mind a time or two",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 12
    }, {
      id: 59,
      body: "Sounds fun, let's give it a try",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 12
    }, {
      id: 60,
      body: "I already am, or planning to in the near future",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 12
    }, {
      id: 61,
      body: "My family is dead to me",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 13
    }, {
      id: 62,
      body: "I see them once a year or so",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 13
    }, {
      id: 63,
      body: "I wish I could see them more",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 13
    }, {
      id: 64,
      body: "I plan my vactions to see them and spend time with them",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 13
    }, {
      id: 65,
      body: "I see them all the time and cannot spend enough time with them",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 13
    }, {
      id: 66,
      body: "Feet are gross please cover them up",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 14
    }, {
      id: 67,
      body: "As long as it's not cold",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 14
    }, {
      id: 68,
      body: "If I'm going to the beach sure",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 14
    }, {
      id: 69,
      body: "I'm a huge fan",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 14
      id: 70,
      body: "I don't even own shows, sandals all the way",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 14
    }, {
      id: 71,
      body: "No thank you",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 15
    }, {
      id: 72,
      body: "As long as their not mine",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 15
    }, {
      id: 73,
      body: "Maybe, maybe not, just kinda indifferent right now",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 15
    }, {
      id: 74,
      body: "One day, yes but not today",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 15
    }, {
      id: 75,
      body: "I have them and or want them ASAP",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 15
    }, {
      id: 76,
      body: "Please no, I don't know if I could handle it anymore",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 16
    }, {
      id: 77,
      body: "I can't think that far ahead",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 16
    }, {
      id: 78,
      body: "Love where I live but it's time for a career change",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 16
    }, {
      id: 79,
      body: "I love my job but wouldn't mind a new city",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 16
    }, {
      id: 80,
      body: "I love my job and city and wouldn't be happier",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 16
    }, {
      id: 81,
      body: "I don't own a tv",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 17
    }, {
      id: 82,
      body: "It's on but solely as background noise",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 17
    }, {
      id: 83,
      body: "I keep up with a few shows here and there",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 17
    }, {
      id: 84,
      body: "I watch 5 or so series religously",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 17
    }, {
      id: 85,
      body: "Guilty as charged, it's always on and I'm always watching",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 17
    }, {
      id: 86,
      body: "I don't like animals",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 18
    }, {
      id: 87,
      body: "No they are just pets",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 18
    }, {
      id: 88,
      body: "Pets are ok",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 18
    }, {
      id: 89,
      body: "Yes but only 1 at a time",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 18
    }, {
      id: 90,
      body: "Mine my as well by my children, and I'm always looking to expand my family",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 18
    }, {
      id: 91,
      body: "Why defile your body?",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 19
    }, {
      id: 92,
      body: "I have a few but don't plan on anymore in the future",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 19
    }, {
      id: 93,
      body: "I have a few and plan a couple more in the future",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 19
    }, {
      id: 94,
      body: "Love them and want more",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 19
    }, {
      id: 95,
      body: "I want a full body suit eventually",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 19
    }, {
      id: 96,
      body: "Haven't read a book since high school",
      value: 1,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 20
    }, {
      id: 97,
      body: "Did they make it into a movie?",
      value: 2,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 20
    }, {
      id: 98,
      body: "Yes but it has to be the right book",
      value: 3,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 20
    }, {
      id: 99,
      body: "I read one once or month or so",
      value: 4,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 20
    }, {
      id: 100,
      body: "As much as I possibly can, all my free time is spent reading",
      value: 5,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      SurveyId: 20
    }, ]);
  },
  down: queryInterface => {
    queryInterface.bulkDelete('surveyAnswers', null, {});
  }
};
