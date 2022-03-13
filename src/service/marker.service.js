const Marker = require("../model/marker.model");

class MarkerService {
  // 查询marker
  async queryMarker() {
    const res = await Marker.findAll();
    return res ? res : null;
  }

  //   上传marker
  async sendMarker(marker) {
    const res = await Marker.create(marker);
    return res.dataValues;
  }

  //   修改marker_path
  async changeMarker({ id, marker_path, marker_content, ani_id }) {
    const whereOpt = { id };
    const newobj = {};
    marker_path && Object.assign(newobj, { marker_path });
    ani_id && Object.assign(newobj, { ani_id });
    marker_content && Object.assign(newobj, { marker_content });
    const res = await Marker.update(newobj, {
      where: whereOpt,
    });
    return res[0] > 0 ? res[0] : null;
  }

  // 硬删除marker_path
  async delMarkPath({ id }) {
    const whereOpt = { id };
    const res = await Marker.destroy({
      where: whereOpt,
    });
    console.log(res);
    return res[0] > 0 ? res[0] : null;
  }
}

module.exports = new MarkerService();
