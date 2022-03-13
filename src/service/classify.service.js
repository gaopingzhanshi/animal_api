const Classify = require("../model/ani-class.model");
const aniDetails = require("../model/animalDetail.model");

class ClassifyService {
  async getAniMsg() {
    const res = await Classify.findAll();
    return res;
  }

  //   精确查询
  async queryExactAnimal(message) {
    console.log(message);
    const { ani_name, ani_env, ani_lv, ani_form, ani_diets, ani_mammal } = message;
    const newobj = {};
    ani_name && Object.assign(newobj, { ani_name });
    ani_env && Object.assign(newobj, { ani_env });
    ani_lv && Object.assign(newobj, { ani_lv });
    ani_form && Object.assign(newobj, { ani_form });
    ani_diets && Object.assign(newobj, { ani_diets });
    ani_mammal && Object.assign(newobj, { ani_mammal });

    const res = await Classify.findAll({
      where: newobj,
    });
    return res;
  }

  //   添加更多动物
  async addMoreAnimal(message) {
    const res = await Classify.create(message);
    return res.dataValues;
  }

  //   添加更多动物细节信息
  async addDetailAnimal(message) {
    const res = await aniDetails.create(message);
    return res.dataValues;
  }

  // 查询更多动物信息
  async getMoreAnimalDetail(id) {
    const res = await aniDetails.findAll({
      where: {
        ani_id: id,
      },
    });
    return res;
  }
}
module.exports = new ClassifyService();
