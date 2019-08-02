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
 * @desc 通过起始节点获取edges对应ways
 * @param {} sequenceFlow 
 * @param {*} edges 
 * @param {*} { startNode, endNode } 
 */
const getEdgeWays = (sequenceFlow, edges, { startNode, endNode }) => {
  let { $: { bpmnElement: startNodeId } } = startNode;
  let { $: { bpmnElement: endNodeId } } = endNode;
  let direction = 1; // 正向
  let targetShapes = sequenceFlow.filter(item => {
    let { sourceRef, targetRef } = item["$"];
    if (sourceRef === startNodeId && targetRef === endNodeId) {
      direction = 1;
      return item;
    } else if (sourceRef === endNodeId && targetRef === startNodeId){
      direction = -1;
      return item;
    }
  });
  let targetEdges = edges.filter(item => {
    return item["$"]["bpmnElement"] === targetShapes[0]["$"]["id"];
  });
  let ways = targetEdges[0]["omgdi:waypoint"];
  // ways = ways.slice(1, -1); // 掐头去尾
  ways = ways.slice(0, -1);
  return direction === 1 ? ways : ways.reverse();
};

/**
 * @desc 通过过程节点获取路径列表
 * @param {String} xml 数据源
 * @param {Array} nodes 
 * @param {Array}
 */
const nodes2ways = (json, nodes) => {
  let sequenceFlow = json["definitions"]["process"]["sequenceFlow"];
  let shapes = json["definitions"]["bpmndi:BPMNDiagram"]["bpmndi:BPMNPlane"]["bpmndi:BPMNShape"];
  let edges = json["definitions"]["bpmndi:BPMNDiagram"]["bpmndi:BPMNPlane"]["bpmndi:BPMNEdge"];
  let shapesSort = nodes.map(id => {
    let shape = shapes.filter(item => item["$"]["id"] === id);
    return shape.length > 0 ? shape[0] : null;
  });
  shapesSort = shapesSort.filter(item => !!item);
  let edgesAndShapes = [];
  if (shapesSort.length < 2) {
    return [];
  }
  for (let i = 0; i < shapesSort.length - 1; i++) {
    if (edgesAndShapes.length > 0) {
      if (shapesSort[i]["$"]["id"] !== edgesAndShapes[edgesAndShapes.length - 1]["$"]["id"]) {
        edgesAndShapes.push(shapesSort[i]);
      }
    } else {
      edgesAndShapes.push(shapesSort[i]);
    }
    let ways = getEdgeWays(sequenceFlow, edges, {
      startNode: shapesSort[i],
      endNode: shapesSort[i + 1],
    });
    if (ways.length > 0) {
      edgesAndShapes = edgesAndShapes.concat(ways);
    }
    edgesAndShapes.push(shapesSort[i + 1]);
  }
  console.log("edgesAndShapes", edgesAndShapes);
  let ways = edgesAndShapes.map(item => {
    if (item["omgdc:Bounds"]) {
      const { x, y, width, height } = item["omgdc:Bounds"]["$"];
      return {
        x: Number(x) - 5 + Number(width) / 2,
        y: Number(y) + 5 + Number(height) / 2,
      }
    } else {
      const { x, y } = item["$"];
      return {
        x: Number(x) - 5,
        y: Number(y) + 5,
      }
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