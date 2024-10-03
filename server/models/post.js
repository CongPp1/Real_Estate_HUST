'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    describe: DataTypes.TEXT,
    numberOfFloors: DataTypes.INTEGER,
    numberOfBedrooms: DataTypes.INTEGER,
    numberOfBathrooms: DataTypes.INTEGER,
    isFurniture: DataTypes.BOOLEAN,
    listingTypes: DataTypes.INTEGER,
    postTypes: DataTypes.INTEGER,
    houseDirections: DataTypes.INTEGER,
    balconyDirections: DataTypes.INTEGER,
    isVeryfied: DataTypes.BOOLEAN,
    expiredDate: DataTypes.DATE,
    expiredBoost: DataTypes.DATE,
    status: DataTypes.INTEGER,
    avgStars: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};