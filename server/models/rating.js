'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Post, {
        through: Rating,
        foreignKey: 'userId',
        as: 'posts'
      })
      Post.belongsToMany(models.User, {
        through: Rating,
        foreignKey: 'postId',
        as: 'users'
      })
    }
  }
  Rating.init({
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER,
    numberOfStars: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};