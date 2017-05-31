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
  });
};
