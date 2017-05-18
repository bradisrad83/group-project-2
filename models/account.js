// user name, password, email,


module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        // Giving the Account model a name of type STRING
        Username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20],
                isUppercase: true,
                isLowercase: true,
                notEmpty: true,
                isUnique: function (value, next) {

                    UserModel.find({
                        where: {username: value},
                        attributes: ['id']
                    })
                        .done(function (error, user) {

                            if (error)
                                return next(error);

                            if (user)
                            // We found a user with this username.
                            // Pass the error to the next method.
                                return next(' username already in use!');

                            // If we got this far, the username hasn't been used yet.

                        });
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6, 10]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                isUnique: function (value, next) {
                    var self = this;
                    User.find({where: {email: value}})
                        .then(function (user) {
                            // reject if a different user wants to use the same email
                            if (user && self.id !== user.id) {
                                return next('Email already in use!');
                            }
                            return next();
                        })
                        .catch(function (err) {
                            return next(err);
                        });
                }
            }
        },

        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models

        // We're saying that we want our Account to have Posts
      /*  classMethods: {
            associate: function (models) {
                // Associating Account  with profile
                // When an Account is deleted, also delete any associated profile
                Account.hasMany(models.Profile, {
                    onDelete: "cascade"
                });

            }
        }*/
    });
    return Account;
};

// this is to verify the email. i believe it will go on our account.js
//exports.create = function (req, res) {
//  var allowedKeys = ['email', 'other_field'];
// var attributes = _.pick(req.body, allowedKeys);
// User.create(attributes)
//   .then(function (user) {
//     res.json(user);
//})
//.catch(Sequelize.ValidationError, function (err) {
// respond with validation errors
//  return res.status(422).send(err.errors);
// })
// .catch(function (err) {
// every other error
//   return res.status(400).send({
//     message: err.message
// });
//});
