/**
 * @desc bpmn-view 流程图解析器
 * @author ranguangyu
 * @date 2019-7-5
 */

import "./index.less";
import React from "react";
import PropTypes from "prop-types";
import "svgjs";

export default class BpmnView extends React.Component {

  componentDidMount() {
    var draw = SVG("bpmn").size(300, 300);
    draw.rect(50, 100).move(100, 100).attr({fill: '#f06'});
  }

  render() {
    return (
      <div>
        <h3>流程图</h3>
        <div id="bpmn"></div>
      </div>
    )
  }
}
