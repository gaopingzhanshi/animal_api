// 该文件作用创建用户表结构

const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

//创建模型
const User = seq.define(
  "User",
  {
    //
    user_name: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      comment: "用户名",
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: "密码",
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
      comment: "是否管理员",
    },
  },
  {
    timestamps: false,
  }
);
// 强制同步数据库
// User.sync({ force: true });
module.exports = User;
