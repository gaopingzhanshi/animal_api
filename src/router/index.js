const fs = require("fs");
const Router = require("koa-router");
const router = new Router();

fs.readdirSync(__dirname).forEach((file) => {
  //   console.log(file);
  if (file !== "index.js") {
    const res = require("./" + file);
    router.use(res.routes());
  }
});
module.exports = router;
