/**
 * @desc bpmn-view 流程图解析器
 * @author ranguangyu
 * @date 2019-7-5
 */

import "./index.less";
import React from "react";
// import PropTypes from "prop-types";
// import "svgjs";
import { Motion, spring } from 'react-motion';

export default class BpmnView extends React.Component {

  state = {
    ways: [
      { x: 0, y: 0 },
      { x: 400, y: 100 },
      { x: 300, y: 200 },
    ]
  }

  componentDidMount() {
    // var draw = SVG("bpmn").size(300, 300);
    // draw.rect(50, 100).move(100, 100).attr({fill: "#f06"});
  }

  render() {
    return (
      <div>
        <h3>流程图</h3>
        <div id="bpmn">
          <Motion
            defaultStyle={{x: 0, y: 0}}
            style={{x: spring(400, { precision: 1 }), y: spring(200)}}
          >
            {value => (
              <div
                className="dot"
                style={{transform: `translate(${value.x}px,${value.y}px)`}}></div>
            )}
          </Motion>
        </div>
      </div>
    )
  }
}
