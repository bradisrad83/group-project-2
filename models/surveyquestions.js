//Creates a database for our questionnaire
module.exports = function(sequelize, DataTypes) {
  var surveyQuestions = sequelize.define("surveyQuestions", {
    question: {
      type: DataTypes.STRING
    }
  }, {
    classMethods: {
      associate: function(models) {
        surveyQuestions.hasMany(models.surveyAnswers, {
          foreignKey: 'SurveyQuestionId',
          onDelete: "cascade"
        });
        surveyQuestions.belongsTo(models.Surveys, {
          foreignKey: 'SurveyId',
            allowNull: false

        });
      }
    },
    underscored: true,
  });
  return surveyQuestions;
};
