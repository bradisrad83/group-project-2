//schema to create the answers to the questions DB

module.exports = function(sequelize, DataTypes) {
  var surveyAnswers = sequelize.define("surveyAnswers", {
    body: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        surveyAnswers.belongsTo(models.surveyQuestions, {
          foreignKey: 'SurveyQuestionId',
            allowNull: true

        });
      }
    },
    underscored: true,
  });
  return surveyAnswers;
};
