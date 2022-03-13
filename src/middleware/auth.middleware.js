const {
  hasAdminPermisionError,
  aniMessageError,
} = require("../error/user.errorManage");

// 判断是否有管理员权限
const hasAdminPermision = async (ctx, next) => {
  const { is_admin } = ctx.state.user;
  if (!is_admin) {
    console.error("该用户没有管理员权限", ctx.state.user);
    return ctx.app.emit("error", hasNotAdminPermission, ctx);
  }
  await next();
};

// 判断是否有以下参数
const velidator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      ani_name: { type: "string", required: true },
      ani_message: { type: "string", required: true },
      ani_picUrl: { type: "string", required: true },
      ani_level: { type: "number", required: true },
    });
  } catch (error) {
    console.error(error);
    aniMessageError.result = error;
    return ctx.app.emit("error", aniMessageError, ctx);
  }
  await next();
};

module.exports = {
  hasAdminPermision,
  velidator,
};
