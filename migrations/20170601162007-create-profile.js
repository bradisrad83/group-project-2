'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.createTable('Profiles', {
      id: {
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      zipCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          not: ["[a-z]", 'i'], //will only allow numbers
          len: [1, 10]
        }
      },
      bio: {
        type: Sequelize.STRING(1000),
        allowNull: false,
        validate: {
          notEmpty: true,
        }
      },
      imgLink: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isUrl: true //will make sure it is a link
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('NOW()')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      },
      AccountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Accounts',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }
    });
  },
  down: queryInterface => queryInterface.dropTable('Profiles')
};
