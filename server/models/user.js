'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Pricing, {
        foreignKey: 'idPricing',
        targetKey: 'id'
      })
      User.hasMany(models.Post, {
        foreignKey: 'userId'
      })
    }
  }
  User.init({
    email: DataTypes.STRING,
    fullName: DataTypes.STRING,
    phone: DataTypes.STRING,
    isVerifiedEmail: DataTypes.BOOLEAN,
    isVerifiedPhone: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    balance: DataTypes.BIGINT,
    score: DataTypes.INTEGER,
    resetPasswordToken: DataTypes.STRING,
    resetPasswordExpired: DataTypes.STRING,
    idPricing: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};