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
      Post.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      })
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
      type: DataTypes.ENUM,
      values: enumData.postTypes
    },
    postTypes: {
      type: DataTypes.ENUM,
      values: enumData.postTypes
    },
    houseDirections: {
      type: DataTypes.ENUM,
      values: enumData.houseDirections
    },
    balconyDirections: {
      type: DataTypes.ENUM,
      values: enumData.balconyDirections
    },
    isVerified: DataTypes.BOOLEAN,
    expiredDate: DataTypes.DATE,
    expiredBoost: DataTypes.DATE,
    status: {
      type: DataTypes.ENUM,
      values: enumData.postStatus
    },
    avgStars: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};