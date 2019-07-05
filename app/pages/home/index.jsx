/**
 * 我的书签
 * @author ranguangyu
 * @date 2019-6-27
 */

import "./index.less";
import React from "react";
import BpmnView from "@components/BpmnView";

export default class Home extends React.Component {
	render() {
		return (
			<div className="page-home">
				<BpmnView xmlStr="xxx" />
			</div>
		)
	}
}
