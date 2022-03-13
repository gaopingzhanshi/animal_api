// 创建动物防治信息表
const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Animal = seq.define(
  "animals",
  {
    ani_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: "动物名称",
    },
    ani_level: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
      comment: "危险等级",
    },
    ani_message: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "防治信息",
    },
    ani_picUrl: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "动物图片",
    },
    ani_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "动物id",
    },
  }
  // {
  //   timestamps: false,
  // }
);

// Animal.sync({ force: true });
module.exports = Animal;
