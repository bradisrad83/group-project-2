// username, firstname, lastname, location, zipcode, bio, img-links,

module.exports = function(sequelize, DataTypes) {
    var Profile = sequelize.define("Profile", {
            Username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 20],
                    isUppercase: true,
                    isLowercase: true,
                    notEmpty: true
                }
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            lastName:{
                type: DataTypes.STRING,
                allowNull:false,
                validate: {
                    len: [1]
                }
            },
            location:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            zipCode:{
                type: DataTypes.INTEGER,
                allowNull:false,
                validate:{
                    not: ["[a-z]",'i'], //will only allow numbers
                    len:[1,6]
                }
            },
            bio:{
                type: DataTypes.STRING,
                allowNull:false,
                validate:{
                    is: ["^[a-z]+$",'i'],  //will only allow letters
                    notEmpty: true,
                }
            },
            imgLink:{
                type: DataTypes.STRING,
                allowNull:false,
                validate:{
                    isUrl: true //will make sure it is a link
                }
            },



            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // An Author (foreignKey) is required or a Post can't be made
                    Profile.belongsTo(models.Account, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Profile;
};
