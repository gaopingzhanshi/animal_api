const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Marker = seq.define(
  "marker",
  {
    marker_path: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
      comment: "marker点",
    },
    marker_content: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "标记点的内容",
    },
    ani_id: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
      comment: "marker点",
    },
    ani_time: {
      type: DataTypes.DATE,
      allowNull: true,
      unique: false,
      comment: "发现时间",
    },
  },
  {
    timestamps: false,
  }
);
// Marker.sync({ force: true });
module.exports = Marker;
