'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      fullName: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      isVerifiedEmail: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      isVerifiedPhone: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      password: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      balance: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      score: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      resetPasswordToken: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resetPasswordExpired: {
        type: Sequelize.STRING
      },
      idPricing: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Pricings',
          key: 'id',
          as: 'idPricing'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};