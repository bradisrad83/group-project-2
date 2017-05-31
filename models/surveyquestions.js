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
          onDelete: "cascade"
        });
        surveyQuestions.belongsTo(models.Surveys, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return surveyQuestions;
};
