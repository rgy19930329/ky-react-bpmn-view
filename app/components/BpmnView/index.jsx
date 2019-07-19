/**
 * @desc bpmn-view 流程图解析器
 * @author ranguangyu
 * @date 2019-7-19
 */

import "./index.less";
import React from "react";
import { autoWidth, autoHeight, createKeyframes, ways2config, nodes2ways } from "./utils";
// import { xml } from "./mock";
import xml2js from "xml2js";
import BpmnViewer from "bpmn-js/lib/Viewer";

const parser = new xml2js.Parser({ explicitArray: false });

export default class BpmnView extends React.Component {

  state = {
    bpmnId: `bpmn_${Date.now()}`,
    motionName: `motion_flow_${Date.now()}`,
    width: autoWidth(this.props.xmlStr),
    height: autoHeight(this.props.xmlStr),
  };

  componentDidMount() {
    const { motionNodes, xmlStr } = this.props;
    parser.parseString(xmlStr, (err, json) => {
      this.renderViewer(xmlStr);
      if (motionNodes.length > 1) {
        let ways = nodes2ways(json, motionNodes);
        let config = ways2config(ways);
        config && createKeyframes(this.state.motionName, config);
      }
    });
  }

  renderViewer = (xml) => {
    const viewer = new BpmnViewer({
      container: `#${this.state.bpmnId}`,
    });
    viewer.importXML(xml, (err) => {
      if (!err) {
        viewer.get("canvas").zoom("fit-viewport");
      } else {
        console.error("error: ", err);
      }
    });
  };

  render() {
    const { bpmnId, motionName, width, height } = this.state;
    const { motionNodes } = this.props;
    return (
      <div
        id={`${bpmnId}`}
        className="bpmn-wrapper"
        style={{ width, height }}
      >
        {motionNodes.length > 1 &&
          <div
            className="bpmn-animate-dot"
            style={{animation: `${motionName} ${motionNodes.length - 1}s linear infinite`}}
          />
        }
      </div>
    )
  }
}
