//Creates a database for our questionairre  
module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define("Questions", {
    question: {
      type: DataTypes.STRING
    },
    answer1: {
      type: DataTypes.STRING
    },
    answer2: {
      type: DataTypes.STRING
    },
    answer3: {
      type: DataTypes.STRING
    },
    answer4: {
      type: DataTypes.STRING
    },
    answer5: {
      type: DataTypes.STRING
    }
  });
};
