const Animal = require("../model/proctection.model");
const Paths = require("../model/path.model");
const Report = require("../model/report.model");

class CommonService {
  // 创建动物信息
  async createProtection(message) {
    const res = await Animal.create(message);
    return res.dataValues;
  }

  // 查询动物信息
  async queryAnimal() {
    const res = await Animal.findAll();
    return res;
  }

  // 创建path
  async createPaths(message) {
    const res = await Paths.create(message);
    return res.dataValues;
  }

  // 查询path
  async queryPaths() {
    const res = await Paths.findAll();
    return res ? res : null;
  }

  // 修改path
  async updatePath({ id, ani_path, ani_id, ani_name }) {
    const whereOpt = { id };
    const newobj = {};
    ani_path && Object.assign(newobj, { ani_path });
    ani_id && Object.assign(newobj, { ani_id });
    ani_name && Object.assign(newobj, { ani_name });
    const res = await Paths.update(newobj, {
      where: whereOpt,
    });
    return res[0];
  }

  // 删除path
  async delPath({ id }) {
    const whereOpt = { id };
    const res = await Paths.destroy({
      where: whereOpt,
    });
    console.log(res);
    return res[0] > 0 ? res[0] : null;
  }

  // 用户提交报告
  async sendReport(message) {
    const res = await Report.create(message);
    return res.dataValues;
  }
}
module.exports = new CommonService();
