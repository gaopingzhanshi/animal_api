// 创建path表
const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Paths = seq.define(
  "paths",
  {
    ani_path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: "出没范围",
    },
    ani_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "动物id",
    },
    ani_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "动物名字",
    },
  },
  {
    timestamps: false,
  }
);

// Paths.sync({ force: true });
module.exports = Paths;
