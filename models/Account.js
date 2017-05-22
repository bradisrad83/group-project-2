// user name, password, email,

var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var Account = sequelize.define("Account", {
        // Giving the Account model a name of type STRING
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [1, 20],
                isLowercase: true,
                notEmpty: true
            }
        },

            password: {
                type: DataTypes.STRING,
                allowNull: false

            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail:{
                        args: true,
                        msg:"Please type a validate Email address"
                    }
                }
            }
        },
        // {
        //     instanceMethods: {
        //         generateHash: function (password) {
        //             return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        //         },
        //         validPassword: function (password) {
        //             return bcrypt.compareSync(password, this.password);
        //         }
        //
        //     }
        // },

        {

            // Here we'll pass a second "classMethods" object into the define method
            // This is for any additional configuration we want to give our models

            // We're saying that we want our Account to have Posts
            classMethods: {
                associate: function (models) {
                    // Associating Account  with profile
                    // When an Account is deleted, also delete any associated profile
                    Account.hasOne(models.Profile, {
                        onDelete: "cascade"
                    });

                },
                generateHash: function (password) {
                    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                },
                validPassword: function (password) {
                    return bcrypt.compareSync(password, this.password);
                }
            }
        });


    return Account;
};

// this is to verify the email. i believe it will go on our Account.js
// exports.create = function (req, res) {
//  var allowedKeys = ['email', 'other_field'];
// var attributes = _.pick(req.body, allowedKeys);
// User.create(attributes)
//   .then(function (user) {
//     res.json(user);
// })
// .catch(Sequelize.ValidationError, function (err) {
// respond with validation errors
//  return res.status(422).send(err.errors);
// })
// .catch(function (err) {
// every other error
//   return res.status(400).send({
//     message: err.message
// });
// });
