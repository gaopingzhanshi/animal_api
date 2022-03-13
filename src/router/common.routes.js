const Router = require("koa-router");

const {
  upload,
  protection,
  queryProtection,
  addpaths,
  getpath,
  changePath,
  deletePath,
  report,
} = require("../controller/common.controller");
const { velidator, hasAdminPermision } = require("../middleware/auth.middleware");
const { auth } = require("../middleware/user.middleware");
const { route } = require("./marker.routes");

const router = new Router();

// 图片上传
router.post("/upload", upload);

// 发布防治信息
router.post("/protection", velidator, protection);

// 查询全部动物信息
router.get("/protection/allanimall", queryProtection);

// 添加地图path
router.post("/addpaths", addpaths);

// 查询path
router.get("/getpaths", getpath);

// 修改path
router.patch("/changepath", changePath);

// 硬删除path:验证登录->是否有管理员权限->删除
router.post("/deletepath", auth, hasAdminPermision, deletePath);

// 用户提交报告
router.post("/report", report);

module.exports = router;
