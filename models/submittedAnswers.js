//creates a table for the users submitted answers
//to grab values and do logic to find best matches
module.exports = function(sequelize, DataTypes) {
  var submittedAnswers = sequelize.define("submittedAnswers", {
      userAnswer: {
        type: DataTypes.JSON,
        allowNull: false
      }
    }, {
      classMethods: {
        associate: function(models) {
          submittedAnswers.belongsTo(models.Profile, {
            foreignKey: 'ProfileId',
              allowNull: true
          });
        }
      },
      underscored: true,
    });
  return submittedAnswers;
};
