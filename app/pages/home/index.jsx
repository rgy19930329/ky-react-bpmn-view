/**
 * bpmn流程图动画
 * @author ranguangyu
 * @date 2019-7-19
 */

import "./index.less";
import React from "react";
import BpmnView from "@components/BpmnView";
import { xml } from "./mock";

export default class Home extends React.Component {
	render() {
		return (
			<div className="page-home">
				<BpmnView
					xmlStr={xml}
					motionNodes={[
						// "StartEvent_1y45yut_di",
						// "Task_1hcentk_di",
						// "ExclusiveGateway_15hu1pt_di",
						// "Task_0cfrjuy_di",
						// "EndEvent_0ls3v4g_di",

						"StartEvent_1y45yut_di",
						"Task_1hcentk_di",
						"ExclusiveGateway_15hu1pt_di",
						"Task_1206bgx_di",
						"ExclusiveGateway_0zycfrc_di",
						"IntermediateThrowEvent_1pkch9y_di",
						"EndEvent_08h2usd_di",
						"IntermediateThrowEvent_1pkch9y_di",
						"EndEvent_08h2usd_di",
					]}
				/>
			</div>
		)
	}
}
