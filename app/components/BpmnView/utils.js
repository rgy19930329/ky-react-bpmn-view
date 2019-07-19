/**
 * @desc 创建keyframes
 * @param {String} name
 * @param {Object} opts
 */
const createKeyframes = (keyframesname, opts) => {
  let styleDom = document.createElement("style");
  let process = "";
  for (let i in opts) {
    process += (i + opts[i]);
  }
  let prefix = ["", "-webkit-", "-moz-", "-o-", "-ms-"];
  let str = "";
  for (let i = 0; i < prefix.length; i++) {
    str += ("@" + prefix[i] + "keyframes " + keyframesname + "{" + process + "}");
  }
  styleDom.innerHTML = str;
  document.getElementsByTagName("head")[0].appendChild(styleDom);
};

/**
 * @desc 数组转对象
 * @param {Array} list 
 * @param {Object}
 */
const list2obj = (list) => {
  let json = {};
  list.forEach(obj => {
    Object.assign(json, obj);
  });
  return json;
};

/**
 * @desc 路径转动画配置
 * @param {Array} ways
 * @return {Object}
 */
const ways2config = (ways) => {
  let len = ways.length;
  if (len < 2) {
    return;
  }
  let process = ways.map((item, index) => {
    return {
      [`${(index / (len - 1)) * 100}%`]: `{transform: translate(${item.x}px,${item.y}px);}`,
    }
  });
  return list2obj(process);
};

/**
 * @desc 通过过程节点获取路径列表
 * @param {String} xml 数据源
 * @param {Array} nodes 
 * @param {Array}
 */
const nodes2ways = (json, nodes) => {
  let shapes = json["definitions"]["bpmndi:BPMNDiagram"]["bpmndi:BPMNPlane"]["bpmndi:BPMNShape"];
  // shapes = shapes.filter(item => {
  //   return nodes.indexOf(item["$"]["id"]) !== -1;
  // });
  console.log(shapes, nodes);
  let shapesSort = nodes.map(id => {
    let shape = shapes.filter(item => item["$"]["id"] === id);
    return shape.length > 0 ? shape[0] : null;
  });
  shapesSort = shapesSort.filter(item => !!item);
  console.log(shapesSort);
  let ways = shapesSort.map(item => {
    const { x, y, width, height } = item["omgdc:Bounds"]["$"];
    return {
      x: Number(x) - 5 + Number(width) / 2,
      y: Number(y) + 5 + Number(height) / 2,
    }
  });
  return ways;
};

/**
 * @desc 自动计算宽度
 * @param {*} xml 
 * @param {*} width 
 */
const autoWidth = (xml, width = "100%") => {
  if (!xml) {
    return width;
  }
  let list = xml.match(/\s{1}x\="(\d+)"/g, "");
  if (!list) {
    return width;
  }
  list = list.map(item => Number(item.replace(/[^\d]/g, "")));
  let min = Math.min(...list);
  let max = Math.max(...list);
  return max + min + 100;
};

/**
 * @desc 自动计算高度
 * @param {*} xml 
 * @param {*} height 
 */
const autoHeight = (xml, height = 300) => {
  if (!xml) {
    return height;
  }
  let list = xml.match(/\s{1}y\="(\d+)"/g, "");
  if (!list) {
    return height;
  }
  list = list.map(item => Number(item.replace(/[^\d]/g, "")));
  let min = Math.min(...list);
  let max = Math.max(...list);
  return max + min + 100;
};

export {
  createKeyframes,
  ways2config,
  nodes2ways,
  autoWidth,
  autoHeight,
}