const Router = require("koa-router");

const {
  queryAniMsg,
  addAnimalMsg,
  queryExact,
  addMoreAnimalDetail,
  queryMoreAnimalDetail,
} = require("../controller/classify.controller");

const router = new Router({ prefix: "/classify" });

// 查询动物
router.get("/", queryAniMsg);

// 精确查询分类
router.post("/exact", queryExact);

// 添加动物信息
router.post("/add", addAnimalMsg);

// 添加更多动物的信息
router.post("/addDetail", addMoreAnimalDetail);

// 了解更多动物信息
router.get("/:id", queryMoreAnimalDetail);

module.exports = router;
