'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pricing.hasMany(models.User, {
        foreignKey: 'idPricing',
        as: 'users'
      })
    }
  }
  Pricing.init({
    name: {
      type: DataTypes.ENUM,
      values: enumData.pricings
    },
    isDisplayImmediately: DataTypes.BOOLEAN,
    isShowDiscribe: DataTypes.BOOLEAN,
    priority: DataTypes.INTEGER,
    requireScore: DataTypes.INTEGER,
    requireScoreNextLevel: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    expiredDate: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pricing',
  });
  return Pricing;
};