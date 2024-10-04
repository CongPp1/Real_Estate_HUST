'use strict';
/** @type {import('sequelize-cli').Migration} */

const { enumData } = require('../utils/constant');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idPost: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      province: {
        type: Sequelize.STRING,
        allowNull: false
      },
      district: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ward: {
        type: Sequelize.STRING,
        allowNull: false
      },
      price: {
        type: Sequelize.BIGINT,
        allowNull: false,
        defaultValue: 0
      },
      priceUnit: {
        type: Sequelize.BIGINT,
        defaultValue: 0
      },
      area: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      describe: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      numberOfFloors: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      numberOfBedrooms: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      numberOfBathrooms: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      isFurniture: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      listingTypes: {
        type: Sequelize.ENUM,
        values: enumData.listingTypes,
        allowNull: false
      },
      postTypes: {
        type: Sequelize.ENUM,
        values: enumData.postTypes,
        allowNull: false
      },
      houseDirections: {
        type: Sequelize.ENUM,
        values: enumData.houseDirections,
        allowNull: false
      },
      balconyDirections: {
        type: Sequelize.ENUM,
        values: enumData.balconyDirections,
        allowNull: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      expiredDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      expiredBoost: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      avgStars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',  
          as: 'userId'
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
    await queryInterface.dropTable('Posts');
  }
};