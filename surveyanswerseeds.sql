ALTER TABLE `surveyAnswers` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `surveyAnswers` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("You know your buddy is a drinker and don't answer the phone", 1, 1);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("You answer the phone but make up an excuse.", 2, 1);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("You go out but only for a drink or two beer.", 3, 1);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("You go and you're in it for the long haul.", 4, 1);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("You go out, drink all night, and pay the entire tab.", 5, 1);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Not a chance, I don't even own a jacket.", 1, 2);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I love seeing it on the internet and TV.", 2, 2);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I don't mind seeing it on vacation but prefer not to live in it.", 3, 2);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Yes please", 4, 2);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I love it and want a blizzard every other weekend", 5, 2);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Turn that crap off now!!!!", 1, 3);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I guess if there is nothing better on", 2, 3);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("As long as it's not gory and disgusting, we're good", 3, 3);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Sounds fun but I might flinch a bit", 4, 3);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("The scarier the better", 5, 3);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Absolutely not", 1, 4);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Once in a while, sure why not", 2, 4);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Yes but can we add more than just pineapple?", 3, 4);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I'm on board", 4, 4);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("There can never be enough pineapple", 5, 4);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I always run late :(", 1, 5);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("50% of the time I'm always on time", 2, 5);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("For the most part yes", 3, 5);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Always 5 minutes early", 4, 5);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I'd rather be an hour early than 5 minutes late", 5, 5);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Please no", 1, 6);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Are we talking old school Johnny Cash or moder pop country?", 2, 6);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Some music is better than old music", 3, 6);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Of course", 4, 6);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I usually wear cowboy hats and boots",5, 6);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Gross", 1, 7);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Only in eyes, other than that no", 2, 7);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Blue is cool I guess", 3, 7);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Yes, yes I do", 4, 7);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I was a smurf in another life", 5, 7);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Oh no I'm not the outdoorsy type at all", 1, 8);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("As long as it doesn't involve climbing", 2, 8);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Sounds fun, I'll give it a try", 3, 8);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("What a fun idea, I'm game", 4, 8);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("When do we leave!!!!!!!!!!!", 5, 8);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("The devils holiday", 1, 9);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I leave a bucket outside for the nieghborhood kids", 2, 9);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I'm in it for the candy", 3, 9);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Totally but nothing to crazy please", 4, 9);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Let's do matching over the top costumes, decorate the house, the whole nine yards", 5, 9);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I don't even own a car",1, 10);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Maybe for a day or so but not the whole week",2, 10);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("As long as I don't have anything better to do",3, 10);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Totally but we need to map it out and plan ahead",4, 10);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Grab and bag and let's see where we end up!!!!!!", 5, 10);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I own a diesel truck and will not be getting rid of it anytime soon",1, 11);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Not feeling it, nope",2, 11);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I think I'm ready for that MPG",3, 11);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Yes, but I'll still need a truck for the weekends",4, 11);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Already looking for my second one",5 ,11);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Way to cramped for my style",1, 12);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Maybe, but I think I have way too much stuff",2, 12);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("It's crossed my mind a time or two",3, 12);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Sounds fun, let's give it a try",4, 12);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I already am, or planning to in the near future", 5, 12);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("My family is dead to me",1, 13);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I see them once a year or so",2, 13);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I wish I could see them more", 3, 13);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I plan my vactions to see them and spend time with them",4, 13);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I see them all the time and cannot spend enough time with them", 5, 13);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Feet are gross please cover them up",1, 14);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("As long as it's not cold",2, 14);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("If I'm going to the beach sure",3, 14);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I'm a huge fan",4, 14);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I don't even own shows, sandals all the way", 5, 14);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("No thank you",1, 15);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("As long as their not mine",2, 15);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Maybe, maybe not, just kinda indifferent right now",3, 15);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("One day, yes but not today",4, 15);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I have them and or want them ASAP", 5, 15);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Please no, I don't know if I could handle it anymore",1, 16);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I can't think that far ahead",2, 16);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Love where I live but it's time for a career change",3, 16);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I love my job but wouldn't mind a new city",4, 16);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I love my job and city and wouldn't be happier", 5, 16);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I don't own a tv",1, 17);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("It's on but solely as background noise",2, 17);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I keep up with a few shows here and there",3, 17);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I watch 5 or so series religously",4, 17);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Guilty as charged, it's always on and I'm always watching", 5, 17);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I don't like animals",1, 18);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("No they are just pets",2, 18);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Pets are ok",3, 18);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Yes but only 1 at a time",4, 18);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Mine my as well by my children, and I'm always looking to expand my family",5,18);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Why defile your body?",1, 19);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I have a few but don't plan on anymore in the future",2, 19);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I have a few and plan a couple more in the future",3, 19);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Love them and want more",4, 19);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I want a full body suit eventually",5, 19);

INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Haven't read a book since high school",1, 20);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Did they make it into a movie?",2, 20);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("Yes but it has to be the right book",3, 20);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("I read one once or month or so",4, 20);
INSERT INTO surveyAnswers (body, value, surveyQuestionId) VALUES ("As much as I possibly can, all my free time is spent reading", 5, 20);
