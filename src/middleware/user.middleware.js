const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { queryUser } = require("../service/user.service");
const { JWT_SECRET } = require("../config/config.defult");
const {
  userFromatError,
  userAlreadyexited,
  registerError,
  userNotexited,
  userFailLogin,
  passwordError,
  TokenExpiredError,
  JsonWebTokenError,
} = require("../error/user.errorManage");

// 判断用户信息是否合法
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  if (!user_name || !password) {
    console.error("用户名或密码为空", ctx.request.body);
    ctx.app.emit("error", userFromatError, ctx);
    return;
  }
  await next();
};

// 判断用户是否存在
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;

  try {
    const res = await queryUser({ user_name });
    if (res) {
      console.error("用户名存在", ctx.request.body);
      ctx.app.emit("error", userAlreadyexited, ctx);
      return;
    }
  } catch (err) {
    console.error(err);
    ctx.app.emit("error", registerError, ctx);
  }

  await next();
};

// 给密码加密
const encryption = async (ctx, next) => {
  const { password } = ctx.request.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  ctx.request.body.password = hash;
  await next();
};

// 判断用户登录是否合法
const verifyLogin = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;

  try {
    // 判断用户是否存在
    const res = await queryUser({ user_name });
    if (!res) {
      console.error("用户名不存在", { user_name });
      ctx.app.emit("error", userNotexited, ctx);
      return;
    }

    // 密码是否匹配
    if (!bcrypt.compareSync(password, res.password)) {
      console.error("用户密码错误", { user_name });
      ctx.app.emit("error", passwordError, ctx);
      return;
    }
  } catch (error) {
    console.error(error);
    ctx.app.emit("error", userFailLogin, ctx);
  }

  await next();
};

// 判断用户是否有授权jwt
const auth = async (ctx, next) => {
  const { authorization } = ctx.request.header;
  const token = authorization.replace("Bearer ", "");

  try {
    const user = jwt.verify(token, JWT_SECRET);
    ctx.state.user = user;
  } catch (error) {
    switch (error.name) {
      case "TokenExpiredError":
        ctx.app.emit("error", TokenExpiredError, ctx);
        return;
      case "JsonWebTokenError":
        console.error(ctx);
        ctx.app.emit("error", JsonWebTokenError, ctx);
        return;
    }
  }

  await next();
};

module.exports = {
  userValidator,
  verifyUser,
  encryption,
  verifyLogin,
  auth,
};
