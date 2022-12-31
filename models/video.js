"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Video.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title is Required",
          },
          notEmpty: {
            msg: "Title is Required",
          },
        },
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Description is Required",
          },
          notEmpty: {
            msg: "Description is Required",
          },
        },
      },
      linkYoutube: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Link Youtube is Required",
          },
          notEmpty: {
            msg: "Link Youtube is Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Video",
    }
  );
  return Video;
};
