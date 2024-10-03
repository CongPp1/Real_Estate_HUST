'use strict';
/** @type {import('sequelize-cli').Migration} */
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
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      district: {
        type: Sequelize.STRING
      },
      ward: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.BIGINT
      },
      area: {
        type: Sequelize.INTEGER
      },
      describe: {
        type: Sequelize.TEXT
      },
      numberOfFloors: {
        type: Sequelize.INTEGER
      },
      numberOfBedrooms: {
        type: Sequelize.INTEGER
      },
      numberOfBathrooms: {
        type: Sequelize.INTEGER
      },
      isFurniture: {
        type: Sequelize.BOOLEAN
      },
      listingTypes: {
        type: Sequelize.INTEGER
      },
      postTypes: {
        type: Sequelize.INTEGER
      },
      houseDirections: {
        type: Sequelize.INTEGER
      },
      balconyDirections: {
        type: Sequelize.INTEGER
      },
      isVeryfied: {
        type: Sequelize.BOOLEAN
      },
      expiredDate: {
        type: Sequelize.DATE
      },
      expiredBoost: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.INTEGER
      },
      avgStars: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
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