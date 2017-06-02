/**
 * Created by admin on 6/1/17.
 */


'use strict';

var Questions = require('../models')['Questions'];

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('surveyAnswers', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            body: {
                allowNull: false,
                type: Sequelize.STRING
            },
            value: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            SurveyQuestionId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'SurveyQuestions',
                    key: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
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
        /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('surveyAnswers');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.

         Example:
         return queryInterface.dropTable('users');
         */
    }
};
