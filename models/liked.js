module.exports = function(sequelize, DataTypes) {
  var Liked = sequelize.define("Liked",
    // Store the id of the person that user likes
    {
      classMethods: {
        associate: function(models) {
          // Telling that this id belongs to a Profile model
          Liked.belongsTo(models.Profile, {
            // Assign a Foreign key
            foreignKey: {
              allowNull: false
            }
          });
        }
      }

    });
  // Create another variable that store the id of the user that submit the like
  var whoLiked = sequelize.define("whoLiked", {
    classMethods: {
      associate: function(models) {
        whoLiked.belongsTo(models.Profile, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });
  return Liked, whoLiked;


};
