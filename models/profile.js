// username, firstname, lastname, location, zipcode, bio, img-links,

module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    sex: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        not: ["[a-z]", 'i'], //will only allow numbers
        len: [1, 10]
      }
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    imgLink: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true //will make sure it is a link
      }
    },
    surveyResults: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Profile.hasMany(models.Match, {
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
  });
  return Profile;
};
