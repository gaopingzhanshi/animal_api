const Router = require("koa-router");

const {
  getMarker,
  uploadMarker,
  updateMarker,
  delMarker,
  displayMarker,
} = require("../controller/marker.controller");

const router = new Router();

// 获取点标记信息
router.get("/getmarker", getMarker);

// 上传点标记信息
router.post("/uploadmarker", uploadMarker);

// // 修改点标记信息
router.patch("/updatemarker", updateMarker);

// // 删除点标记信息
router.post("/delmarker", delMarker);

// // 隐藏点标记信息
// router.post('/displayMarker',displayMarker)

module.exports = router;
