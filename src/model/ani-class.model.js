const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const aniClass = seq.define("classify", {
  ani_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "动物id",
  },
  ani_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "动物名",
  },
  ani_picUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物图片",
  },
  ani_env: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "生活环境",
  },
  ani_lv: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物等级",
  },
  ani_form: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物形态",
  },
  ani_diets: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物食性",
  },
  ani_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物食性",
  },
  ani_mammal: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "哺乳方式",
  },
});

// aniClass.sync({ force: true });
module.exports = aniClass;
