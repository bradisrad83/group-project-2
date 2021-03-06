


      module.exports = {
          up: function (queryInterface, Sequelize) {
              queryInterface.createTable('Accounts', {
                  id: {
                      type: Sequelize.INTEGER,
                      primaryKey: true,
                      autoIncrement: true
                  },
                  username: {
                      type: Sequelize.STRING,
                      allowNull: false,
                      unique: {
                          args: true,
                          msg: "username has been used"
                      },
                      validate: {
                          len: [1, 20],
                          isLowercase: true,
                          notEmpty: true
                      }
                  },

                  password: {
                      type: Sequelize.STRING,
                      allowNull: false

                  },
                  email: {
                      type: Sequelize.STRING,
                      allowNull: false,
                      unique: true,
                      validate: {
                          isEmail: {
                              args: true,
                              msg: "email is not valid"
                          }
                      }
                  },
                  created_at: {
                      type: Sequelize.DATE,
                      defaultValue: Sequelize.literal('NOW()')
                  },
                  updated_at: {
                      type: Sequelize.DATE,
                      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
                  }
              })
          },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('Accounts');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
