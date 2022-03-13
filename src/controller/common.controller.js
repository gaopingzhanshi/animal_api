// 编写公共模块的api
const { fileTypesError } = require("../error/user.errorManage");
const {
  createProtection,
  createPaths,
  queryPaths,
  updatePath,
  delPath,
  queryAnimal,
  sendReport,
} = require("../service/common.service");
const {
  addPathsError,
  getPathsError,
  updatePathsError,
  deldetePathError,
  getAnimalError,
} = require("../error/common.errManage");

class CommonController {
  // 上传图片
  async upload(ctx, next) {
    const { file } = ctx.request.files;
    const fileTypes = ["image/jpeg", "image/png"];
    console.log(file);
    if (file) {
      if (!fileTypes.includes(file.type)) {
        console.error("上传文件错误");
        ctx.app.emit("error", fileTypesError, ctx);
        return;
      }
      ctx.body = {
        message: "商品上传成功~",
        result: {
          pic: path.basename(file.path),
        },
      };
    }
  }

  // 发布动物防治信息
  async protection(ctx) {
    const res = await createProtection(ctx.request.body);
    ctx.body = {
      code: "0",
      message: "发布成功~",
      result: res,
    };
  }

  // 查询动物防治信息
  async queryProtection(ctx) {
    const res = await queryAnimal();
    try {
      ctx.body = {
        code: "0",
        message: "获取防治信息成功~",
        result: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", getAnimalError, ctx);
    }
  }

  // 上传地图经纬范围信息
  async addpaths(ctx) {
    const res = await createPaths(ctx.request.body);
    try {
      ctx.body = {
        code: "0",
        message: "添加path成功~",
        result: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", addPathsError, ctx);
    }
  }

  // 获取paths信息
  async getpath(ctx) {
    const res = await queryPaths();
    console.log(res);
    try {
      ctx.body = {
        code: "0",
        message: "获取path成功~",
        result: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", getPathsError, ctx);
    }
  }

  // 修改path
  async changePath(ctx) {
    const { id, ani_path, ani_id, ani_name } = ctx.request.body;
    console.log(id, ani_path);
    const res = await updatePath({ id, ani_path, ani_id, ani_name });
    console.log(res);
    try {
      ctx.body = {
        code: "0",
        message: "path修改成功~",
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", updatePathsError, ctx);
    }
  }

  // 删除path
  async deletePath(ctx) {
    const { id } = ctx.request.body;
    await delPath({ id });
    try {
      ctx.body = {
        code: "0",
        message: "删除成功~",
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", deldetePathError, ctx);
    }
  }

  // 提交报告
  async report(ctx) {
    const res = await sendReport(ctx.request.body);
    try {
      ctx.body = {
        code: "0",
        message: "提交成功~",
        res: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", deldetePathError, ctx);
    }
  }
}

module.exports = new CommonController();
