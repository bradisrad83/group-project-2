module.exports = function(sequelize, DataTypes) {
  var Surveys = sequelize.define("Surveys", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      classMethods: {
        associate: function(models) {
          Surveys.hasMany(models.surveyQuestions, {
            onDelete: "cascade"
          });
        }
      }
    });
    return Surveys;
};
