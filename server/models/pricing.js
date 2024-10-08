'use strict';
const { Model } = require('sequelize');
const { enumData } = require('../utils/constant'); // Import enumData

module.exports = (sequelize, DataTypes) => {
  class Pricing extends Model {
    static associate(models) {
      // Define association here
      Pricing.hasMany(models.User, {
        foreignKey: 'idPricing'
      });
    }
  }

  Pricing.init({
    name: {
      type: DataTypes.ENUM(...enumData.pricings),
      allowNull: false
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
