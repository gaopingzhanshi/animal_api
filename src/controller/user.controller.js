// 编写用户业务逻辑
const jwt = require("jsonwebtoken");

const {
  createUserInfo,
  queryUser,
  updateUserpwd,
  searchUserRequst,
} = require("../service/user.service");
const { registerError } = require("../error/user.errorManage");
const { JWT_SECRET } = require("../config/config.defult");

class userController {
  // 用户注册
  async register(ctx, next) {
    // 获取数据
    const { user_name, password } = ctx.request.body;

    try {
      // 操作数据库
      const res = await createUserInfo(user_name, password);

      // 操作成功后返回结果
      ctx.body = {
        code: 200,
        message: "注册成功~",
        userInfo: {
          name: res.user_name,
          password: res.password,
        },
      };
    } catch (err) {
      console.log(err);
      ctx.app.emit("error", registerError, ctx);
    }
  }

  // 用户登录
  async login(ctx) {
    const { user_name } = ctx.request.body;
    try {
      const { password, ...res } = await queryUser({ user_name });
      ctx.body = {
        code: "0",
        message: "登录成功~",
        result: {
          token: jwt.sign(res, JWT_SECRET, { expiresIn: "1d" }),
        },
      };
    } catch (error) {
      console.error("用户登录失败");
    }
  }

  //修改密码
  async modify(ctx) {
    try {
      const id = ctx.state.user.id;
      const password = ctx.request.body.password;
      const res = await updateUserpwd({ id, password });
      if (res) {
        ctx.body = {
          code: "0",
          message: "修改成功~",
          result: {},
        };
      }
    } catch (error) {
      console.error(error);
    }
  }

  // 查询用户
  async searchUser(ctx) {
    try {
      // const {}=ctx.request.body
      const res = await searchUserRequst();
      if (res) {
        ctx.body = {
          code: "0",
          message: "查询成功~",
          result: res,
        };
      }
    } catch (error) {
      console.error(error);
    }
  }
}
module.exports = new userController();
