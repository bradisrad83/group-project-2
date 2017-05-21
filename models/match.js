module.exports = function(sequelize, DataTypes){
  var Match = sequelize.define("Match", {
    liked_profile:{
      type: DataTypes.STRING
    }
  });
  return Match;
};
