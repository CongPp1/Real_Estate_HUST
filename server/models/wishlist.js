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
      User.belongsToMany(models.Post, {
        through: WishList,
        foreignKey: 'userId',
        as: 'posts'
      })
      Post.belongsToMany(models.User, {
        through: WishList,
        foreignKey: 'postId',
        as: 'users'
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