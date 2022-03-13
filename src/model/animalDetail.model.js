const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const aniDetails = seq.define("aniDetails", {
  ani_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    comment: "动物id",
  },
  ani_imgUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物图片地址",
  },
  ani_event: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物危险事件",
  },
  ani_introl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "动物简介",
  },
});

// aniDetails.sync({ force: true });
module.exports = aniDetails;
