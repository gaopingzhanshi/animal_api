const Koa = require("koa");
const koaBody = require("koa-body");

const router = require("../router/index");
const errHander = require("../error/errorHander");

const app = new Koa();

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());
app.on("error", errHander);
module.exports = app;
