const { Sequelize } = require("sequelize");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
} = require("../config/config.defult");
const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: "mysql",
});

seq
  .authenticate()
  .then(() => {
    console.log("连接成功~");
  })
  .catch((err) => {
    console.log("连接失败", err);
  });
module.exports = seq;
