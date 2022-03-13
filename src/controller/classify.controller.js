const {
  getAniMsg,
  addMoreAnimal,
  queryExactAnimal,
  addDetailAnimal,
  getMoreAnimalDetail,
} = require("../service/classify.service");
const { getAniMsgError } = require("../error/common.errManage");

class Classify {
  // 查询动物
  async queryAniMsg(ctx) {
    try {
      const res = await getAniMsg();
      ctx.body = {
        code: "0",
        message: "获取更多动物信息分类成功~",
        result: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", getAniMsgError, ctx);
    }
  }

  //   精确查询分类
  async queryExact(ctx) {
    console.log(ctx.request.body);
    try {
      //   const { ani_name, ani_env, ani_lv, ani_form, ani_diets, ani_mammal } = ctx.request.body;

      const res = await queryExactAnimal(ctx.request.body);
      ctx.body = {
        code: "0",
        message: "获取更多动物信息成功~",
        res: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", getAniMsgError, ctx);
    }
  }

  //   添加更多动物信息
  async addAnimalMsg(ctx) {
    try {
      const { ani_name, ani_env, ani_lv, ani_form, ani_diets, ani_mammal } = ctx.request.body;
      const res = await addMoreAnimal({
        ani_name,
        ani_env,
        ani_lv,
        ani_form,
        ani_diets,
        ani_mammal,
      });
      ctx.body = {
        code: 0,
        message: "添加成功~",
        res: res,
      };
    } catch (error) {}
  }

  //   添加更多动物细节信息
  async addMoreAnimalDetail(ctx) {
    const res = await addDetailAnimal(ctx.request.body);
    ctx.body = {
      code: 0,
      message: "添加成功~",
      res: res,
    };
  }

  // 了解更多动物信息
  async queryMoreAnimalDetail(ctx) {
    const id = ctx.params.id;
    try {
      const res = await getMoreAnimalDetail(id);
      ctx.body = {
        code: "0",
        message: "了解更多动物信息成功~",
        res: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", getAniMsgError, ctx);
    }
  }
}

module.exports = new Classify();
