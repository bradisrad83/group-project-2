

module.exports = {
  up: function (queryInterface, Sequelize) {
      queryInterface.bulkInsert('surveyAnswers', [{
          body: "You know your buddy is a drinker and don't answer the phone",
          value:1,
          SurveyQuestionId:1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }, {
          body:"You answer the phone but make up an excuse.",
          value:2,
          SurveyQuestionId:1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }, {
          body:"You go out but only for a drink or two beer.",
          value:3,
          SurveyQuestionId:1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"You go and you're in it for the long haul.",
          value: 4,
          SurveyQuestionId:1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"You go out, drink all night, and pay the entire tab.",
          value:5,
          SurveyQuestionId:1,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"Not a chance, I don't even own a jacket.",
          value:1,
          SurveyQuestionId:2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body: "I love seeing it on the internet and TV.",
          value:2,
          SurveyQuestionId:2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }, {
          body:"I don't mind seeing it on vacation but prefer not to live in it.",
          value:3,
          SurveyQuestionId:2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }, {
          body:"Yes please",
          value:4,
          SurveyQuestionId:2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"I love it and want a blizzard every other weekend",
          value:5,
          SurveyQuestionId:2,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"Turn that crap off now!!!!",
          value:1,
          SurveyQuestionId:3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"I guess if there is nothing better on",
          value:2,
          SurveyQuestionId:3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"As long as it's not gory and disgusting, we're good",
          value:3,
          SurveyQuestionId:3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"Sounds fun but I might flinch a bit",
          value:4,
          SurveyQuestionId:3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"The scarier the better",
          value:5,
          SurveyQuestionId:3,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"Absolutely not",
          value:1,
          SurveyQuestionId:4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"Once in a while, sure why not",
          value:2,
          SurveyQuestionId: 4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"Yes but can we add more than just pineapple?",
          value:3,
          SurveyQuestionId:4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }, {
          body:"Yes but can we add more than just pineapple?",
          value:3,
          SurveyQuestionId:4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }, {
          body:"I'm on board",
          value:4,
          SurveyQuestionId:4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"There can never be enough pineapple",
          value:5,
          SurveyQuestionId:4,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I always run late :(",
          value:1,
          SurveyQuestionId:5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"50% of the time I'm always on time",
          value:2,
          SurveyQuestionId:5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"For the most part yes",
          value:3,
          SurveyQuestionId:5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Always 5 minutes early",
          value:4,
          SurveyQuestionId:5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I'd rather be an hour early than 5 minutes late",
          value:5,
          SurveyQuestionId:5,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Please no",
          value:1,
          SurveyQuestionId:6,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Are we talking old school Johnny Cash or moder pop country?",
          value:2,
          SurveyQuestionId:6,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Some music is better than old music",
          value:3,
          SurveyQuestionId:6,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Of course",
          value:4,
          SurveyQuestionId:6,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I usually wear cowboy hats and boots",
          value:5,
          SurveyQuestionId:6,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Gross",
          value:1,
          SurveyQuestionId:7,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Only in eyes, other than that no",
          value:2,
          SurveyQuestionId:7,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Blue is cool I guess",
          value:3,
          SurveyQuestionId:7,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Yes, yes I do",
          value:4,
          SurveyQuestionId:7,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I was a smurf in another life",
          value:5,
          SurveyQuestionId:7,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Oh no I'm not the outdoorsy type at all",
          value:1,
          SurveyQuestionId:8,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"As long as it doesn't involve climbing",
          value:2,
          SurveyQuestionId:8,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Sounds fun, I'll give it a try",
          value:3,
          SurveyQuestionId:8,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"What a fun idea, I'm game",
          value:4,
          SurveyQuestionId:8,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"When do we leave!!!!!!!!!!!",
          value:5,
          SurveyQuestionId:8,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"The devils holiday",
          value:1,
          SurveyQuestionId:9,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I leave a bucket outside for the nieghborhood kids",
          value:2,
          SurveyQuestionId:9,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I'm in it for the candy",
          value:3,
          SurveyQuestionId:9,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Totally but nothing to crazy please",
          value:4,
          SurveyQuestionId:9,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Let's do matching over the top costumes, decorate the house, the whole nine yards",
          value:5,
          SurveyQuestionId:9,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I don't even own a car",
          value:1,
          SurveyQuestionId:10,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Maybe for a day or so but not the whole week",
          value:2,
          SurveyQuestionId:10,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"As long as I don't have anything better to do",
          value:3,
          SurveyQuestionId:10,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Totally but we need to map it out and plan ahead",
          value:4,
          SurveyQuestionId:10,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Grab and bag and let's see where we end up!!!!!!",
          value:5,
          SurveyQuestionId:10,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I own a diesel truck and will not be getting rid of it anytime soon",
          value:1,
          SurveyQuestionId:11,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Not feeling it, nope",
          value:2,
          SurveyQuestionId:11,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I think I'm ready for that MPG",
          value:3,
          SurveyQuestionId:11,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Yes, but I'll still need a truck for the weekends",
          value:4,
          SurveyQuestionId:11,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Already looking for my second one",
          value:5,
          SurveyQuestionId:11,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Way to cramped for my style",
          value:1,
          SurveyQuestionId:12,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Maybe, but I think I have way too much stuff",
          value:2,
          SurveyQuestionId:12,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"It's crossed my mind a time or two",
          value:3,
          SurveyQuestionId:12,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Sounds fun, let's give it a try",
          value:4,
          SurveyQuestionId:12,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I already am, or planning to in the near future",
          value:5,
          SurveyQuestionId:12,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"My family is dead to me",
          value:1,
          SurveyQuestionId:13,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I see them once a year or so",
          value:2,
          SurveyQuestionId:13,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I wish I could see them more",
          value:3,
          SurveyQuestionId:13,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I plan my vactions to see them and spend time with them",
          value:4,
          SurveyQuestionId:13,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I see them all the time and cannot spend enough time with them",
          value:5,
          SurveyQuestionId:13,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Feet are gross please cover them up",
          value:1,
          SurveyQuestionId:14,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"As long as it's not cold",
          value:2,
          SurveyQuestionId:14,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"If I'm going to the beach sure",
          value:3,
          SurveyQuestionId:14,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I'm a huge fan",
          value:4,
          SurveyQuestionId:14,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I don't even own shows, sandals all the way",
          value:5,
          SurveyQuestionId:14,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"No thank you",
          value:1,
          SurveyQuestionId:15,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"As long as their not mine",
          value:2,
          SurveyQuestionId:15,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Maybe, maybe not, just kinda indifferent right now",
          value:3,
          SurveyQuestionId:15,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"One day, yes but not today",
          value:4,
          SurveyQuestionId:15,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I have them and or want them ASAP",
          value:5,
          SurveyQuestionId:15,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Please no, I don't know if I could handle it anymore",
          value:1,
          SurveyQuestionId:16,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I can't think that far ahead",
          value:2,
          SurveyQuestionId:16,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Love where I live but it's time for a career change",
          value:3,
          SurveyQuestionId:16,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I love my job but wouldn't mind a new city",
          value:4,
          SurveyQuestionId:16,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I love my job and city and wouldn't be happier",
          value:5,
          SurveyQuestionId:16,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I don't own a tv",
          value:1,
          SurveyQuestionId:17,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"It's on but solely as background noise",
          value:2,
          SurveyQuestionId:17,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I keep up with a few shows here and there",
          value:3,
          SurveyQuestionId:17,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I watch 5 or so series religously",
          value:4,
          SurveyQuestionId:17,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Guilty as charged, it's always on and I'm always watching",
          value:5,
          SurveyQuestionId:17,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I don't like animals",
          value:1,
          SurveyQuestionId:18,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"No they are just pets",
          value:2,
          SurveyQuestionId:18,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Pets are ok",
          value:3,
          SurveyQuestionId:18,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Yes but only 1 at a time",
          value:4,
          SurveyQuestionId:18,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Mine my as well by my children, and I'm always looking to expand my family",
          value:5,
          SurveyQuestionId:19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Why defile your body?",
          value:1,
          SurveyQuestionId:19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I have a few but don't plan on anymore in the future",
          value:2,
          SurveyQuestionId:19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I have a few and plan a couple more in the future",
          value:3,
          SurveyQuestionId:19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Love them and want more",
          value:4,
          SurveyQuestionId:19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I want a full body suit eventually",
          value:5,
          SurveyQuestionId: 19,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Haven't read a book since high school",
          value:1,
          SurveyQuestionId:20,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Did they make it into a movie?",
          value:2,
          SurveyQuestionId:20,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"Yes but it has to be the right book",
          value:3,
          SurveyQuestionId:20,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"I read one once or month or so",
          value:4,
          SurveyQuestionId:20,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },{
          body:"As much as I possibly can, all my free time is spent reading",
          value:5,
          SurveyQuestionId:20,
          created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
          updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

      }]);
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('surveyAnswers');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
