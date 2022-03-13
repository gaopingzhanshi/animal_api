const Koa = require("koa");
const path = require("path");
const koaBody = require("koa-body");
const koaStatic = require("koa-static");
const parameter = require("koa-parameter");

const router = require("../router/index");
const errHander = require("../error/errorHander");

const app = new Koa();

app.use(
  koaBody({
    multipart: true,
    formidable: {
      uploadDir: path.join(__dirname, "../upload"),
      keepExtensions: true,
    },
  })
);
app.use(koaStatic(path.join(__dirname, "../upload")));
app.use(parameter(app));
app.use(router.routes());
app.use(router.allowedMethods());
app.on("error", errHander);
module.exports = app;
