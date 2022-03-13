const User = require("../model/user.model");

// 写入数据库
class UserService {
  //   创建用户
  async createUserInfo(user_name, password) {
    const res = await User.create({ user_name, password });
    return res.dataValues;
  }

  //   查询用户是否存在
  async queryUser({ id, user_name, password, is_admin }) {
    const whereOpt = {};
    // 根据可能传入的参数进行查询
    id && Object.assign(whereOpt, { id });
    user_name && Object.assign(whereOpt, { user_name });
    password && Object.assign(whereOpt, { password });
    is_admin && Object.assign(whereOpt, { is_admin });
    const res = await User.findOne({
      attributes: ["id", "user_name", "password", "is_admin"],
      where: whereOpt,
    });
    return res ? res.dataValues : null;
  }

  // 更新用户密码
  async updateUserpwd({ id, user_name, password, is_admin }) {
    const whereOpt = { id };
    const newUser = {};
    user_name && Object.assign(newUser, { user_name });
    password && Object.assign(newUser, { password });
    is_admin && Object.assign(newUser, { is_admin });
    const res = await User.update(newUser, {
      where: whereOpt,
    });
    return res[0] > 0 ? true : false;
  }
}
module.exports = new UserService();
