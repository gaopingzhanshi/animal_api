const { DataTypes } = require("sequelize");

const seq = require("../db/seq");

const Report = seq.define("reports", {
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
    comment: "动物名",
  },
  ani_time: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: false,
    comment: "发现时间",
  },
  ani_path: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "区域坐标",
  },
  marker_path: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    comment: "标记坐标",
  },
});

// Report.sync({ force: true });
module.exports = Report;
