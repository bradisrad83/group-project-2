var db = require("../../models/index");
var jwt = require("jsonwebtoken");

module.exports = function(app) {
  app.get("/questions", function(req, res) {
    db.surveyQuestions.findAll({
      where: {
        SurveyId: 1
      },
      include: [{
        model: db.surveyAnswers
      }]
    }).then(function(dbsurveyQuestions) {
      res.render("questions", {
        questions: dbsurveyQuestions
      });
    });

  });


  app.post("/questions/submit", function(req, res) {
    console.log(req.body);
    db.submittedAnswers.create({
      userAnswer: req.body,
      ProfileId: req.decoded.data.uid
    //  ProfileId: req.decoded.data.uid
    }).then(function(dbsubmittedanswers){
      res.json(dbsubmittedanswers);
    }).catch(function(err){
      res.status(500).json(err);
      console.log(err);
    });
  });
};
