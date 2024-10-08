'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WishList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.User.belongsToMany(models.Post, {
        through: WishList,
        foreignKey: 'userId',
      })
     models.Post.belongsToMany(models.User, {
        through: WishList,
        foreignKey: 'postId',
      })
    }
  }
  WishList.init({
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'WishList',
  });
  return WishList;
};