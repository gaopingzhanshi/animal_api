const { queryMarker, sendMarker, changeMarker, delMarkPath } = require("../service/marker.service");

const { queryMarkerError } = require("../error/marker.errorManage");

class MarkerController {
  // 查询marker
  async getMarker(ctx) {
    try {
      const res = await queryMarker();
      ctx.body = {
        code: "0",
        message: "获取marker成功~",
        res: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", queryMarkerError, ctx);
    }
  }

  //   上传marker
  async uploadMarker(ctx) {
    try {
      const res = await sendMarker(ctx.request.body);
      ctx.body = {
        code: "0",
        message: "上传marker成功~",
        res: res,
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", queryMarkerError, ctx);
    }
  }

  // 修改marker_path;
  async updateMarker(ctx) {
    try {
      const { id, marker_path, marker_content, ani_id } = ctx.request.body;
      const res = await changeMarker({ id, marker_path, marker_content, ani_id });
      if (res) {
        ctx.body = {
          code: "0",
          message: "修改marker成功~",
        };
      }
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", queryMarkerError, ctx);
    }
  }
  // 删除marker_path
  async delMarker(ctx) {
    try {
      const { id } = ctx.request.body;
      await delMarkPath({ id });
      ctx.body = {
        code: "0",
        message: "删除marker成功~",
      };
    } catch (error) {
      console.log(error);
      ctx.app.emit("error", queryMarkerError, ctx);
    }
  }
}
module.exports = new MarkerController();
