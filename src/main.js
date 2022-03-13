const app = require("./app/index");

const { APP_PORT } = require("./config/config.defult");

app.listen(APP_PORT, () => {
  console.log(`项目运行成功~ http://localhost:${APP_PORT}`);
});
