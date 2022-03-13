const Router = require("koa-router");

const { register, login, modify, searchUser } = require("../controller/user.controller");
const {
  userValidator,
  verifyUser,
  encryption,
  verifyLogin,
  auth,
} = require("../middleware/user.middleware");

const router = new Router({ prefix: "/users" });

// 用户注册
router.post("/", userValidator, verifyUser, encryption, register);
// 用户登录
router.post("/login", userValidator, verifyLogin, login);
// 修改密码
router.patch("/", auth, encryption, modify);
// 查询用户
router.get("/search", searchUser);
module.exports = router;
