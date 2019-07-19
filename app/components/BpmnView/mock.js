const xml = (
  `<?xml version="1.0" encoding="UTF-8"?>
  <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="4.0.0">
    <process id="Process_1" isExecutable="false">
      <startEvent id="StartEvent_1y45yut">
        <outgoing>SequenceFlow_0h21x7r</outgoing>
      </startEvent>
      <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
      <endEvent id="EndEvent_15pydlw">
        <incoming>SequenceFlow_0pxagg4</incoming>
      </endEvent>
      <sequenceFlow id="SequenceFlow_0pxagg4" sourceRef="Task_1hcentk" targetRef="EndEvent_15pydlw" />
      <userTask id="Task_1hcentk" name="rgy">
        <incoming>SequenceFlow_0h21x7r</incoming>
        <outgoing>SequenceFlow_0pxagg4</outgoing>
      </userTask>
    </process>
    <bpmndi:BPMNDiagram id="BpmnDiagram_1">
      <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
        <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
          <omgdc:Bounds x="152" y="102" width="36" height="36" />
          <bpmndi:BPMNLabel>
            <omgdc:Bounds x="134" y="145" width="73" height="14" />
          </bpmndi:BPMNLabel>
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
          <omgdi:waypoint x="188" y="120" />
          <omgdi:waypoint x="240" y="120" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="EndEvent_15pydlw_di" bpmnElement="EndEvent_15pydlw">
          <omgdc:Bounds x="392" y="102" width="36" height="36" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0pxagg4_di" bpmnElement="SequenceFlow_0pxagg4">
          <omgdi:waypoint x="340" y="120" />
          <omgdi:waypoint x="392" y="120" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="UserTask_0yxxx4c_di" bpmnElement="Task_1hcentk">
          <omgdc:Bounds x="240" y="80" width="100" height="80" />
        </bpmndi:BPMNShape>
      </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
  </definitions>`
);

export {
  xml,
}