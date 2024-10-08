'use strict';
const { Model } = require('sequelize');
const { enumData } = require('../utils/constant'); // Sử dụng destructuring để lấy enumData

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: 'userId'
      });
    }
  }

  Post.init({
    idPost: DataTypes.STRING,
    title: DataTypes.STRING,
    address: DataTypes.STRING,
    province: DataTypes.STRING,
    district: DataTypes.STRING,
    ward: DataTypes.STRING,
    price: DataTypes.BIGINT,
    area: DataTypes.INTEGER,
    priceUnit: DataTypes.BIGINT,
    describe: DataTypes.TEXT,
    numberOfFloors: DataTypes.INTEGER,
    numberOfBedrooms: DataTypes.INTEGER,
    numberOfBathrooms: DataTypes.INTEGER,
    isFurniture: DataTypes.BOOLEAN,
    listingTypes: {
      type: DataTypes.ENUM(...enumData.listingTypes),
      allowNull: false
    },
    postTypes: {
      type: DataTypes.ENUM(...enumData.postTypes),
      allowNull: false
    },
    houseDirections: {
      type: DataTypes.ENUM(...enumData.houseDirections),
      allowNull: false
    },
    balconyDirections: {
      type: DataTypes.ENUM(...enumData.balconyDirections),
      allowNull: false
    },
    isVerified: DataTypes.BOOLEAN,
    expiredDate: DataTypes.DATE,
    expiredBoost: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM(...enumData.statuses),
      allowNull: false
    },
    avgStars: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });

  return Post;
};
