'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hashtag_Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Hashtag.belongsToMany(models.Post, {
        through: Hashtag_Post,
        foreignKey: 'tagId'
      })
      models.Post.belongsToMany(models.Hashtag, {
        through: Hashtag_Post,
        foreignKey: 'postId'
      })
    }
  }
  Hashtag_Post.init({
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Hashtag_Post',
  });
  return Hashtag_Post;
};