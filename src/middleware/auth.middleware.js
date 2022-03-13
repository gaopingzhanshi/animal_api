// 判断是否有管理员权限
const hasAdminPermision = async (ctx, next) => {
  const { is_admin } = ctx.state.user;
  if (!is_admin) {
    console.error("该用户没有管理员权限", ctx.state.user);
    return ctx.app.emit("error", hasNotAdminPermission, ctx);
  }
  await next();
};
module.exports = {
  hasAdminPermision,
};
