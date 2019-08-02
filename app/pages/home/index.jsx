/**
 * bpmn流程图动画
 * @author ranguangyu
 * @date 2019-7-19
 */

import "./index.less";
import React from "react";
import BpmnView from "@components/BpmnView";
import EnumSelect from "@components/EnumSelect";
// import { xml } from "./mock";
import { xml } from "./mock2";

export default class Home extends React.Component {

	state = {
		way: "1",
	};

	waysMap = {
		"1": [
			"StartEvent_1y45yut_di",
			"Task_1hcentk_di",
			"ExclusiveGateway_15hu1pt_di",
			"Task_0cfrjuy_di",
			"EndEvent_0ls3v4g_di",
		],
		"2": [
			"StartEvent_1y45yut_di",
			"Task_1hcentk_di",
			"ExclusiveGateway_15hu1pt_di",
			"Task_1206bgx_di",
			"ExclusiveGateway_0zycfrc_di",
			"IntermediateThrowEvent_1pkch9y_di",
			"EndEvent_08h2usd_di",
			"IntermediateThrowEvent_1pkch9y_di",
			"EndEvent_08h2usd_di",
		],
		"3": [
			"StartEvent_1y45yut_di",
			"Task_1hcentk_di",
			"Task_1cqe0bd_di",
		]
	};

	render() {
		return (
			<div className="page-home">
				<div style={{paddingBottom: 20}}>
					<EnumSelect
						style={{width: 150}}
						placeholder="请选择"
						list={[
							{ name: "路线1", code: "1" },
							{ name: "路线2", code: "2" },
							{ name: "路线3", code: "3" },
						]}
						value={this.state.way}
						onChange={(way) => {
							console.log(way);
							this.setState({ way });
						}}
					/>
				</div>
				<BpmnView
					xmlStr={xml}
					motionNodes={this.waysMap[this.state.way]}
				/>
			</div>
		)
	}
}
