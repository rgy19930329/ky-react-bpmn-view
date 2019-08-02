const xml = (
  `<?xml version="1.0" encoding="UTF-8"?>
  <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="4.0.3">
    <process id="Process_1" isExecutable="false">
      <startEvent id="StartEvent_1y45yut" name="hunger noticed">
        <outgoing>SequenceFlow_0h21x7r</outgoing>
      </startEvent>
      <task id="Task_1hcentk" name="choose recipe">
        <incoming>SequenceFlow_0h21x7r</incoming>
        <outgoing>SequenceFlow_0wnb4ke</outgoing>
        <outgoing>SequenceFlow_0s3g4zl</outgoing>
      </task>
      <sequenceFlow id="SequenceFlow_0h21x7r" sourceRef="StartEvent_1y45yut" targetRef="Task_1hcentk" />
      <exclusiveGateway id="ExclusiveGateway_15hu1pt" name="desired dish?">
        <incoming>SequenceFlow_0wnb4ke</incoming>
        <outgoing>SequenceFlow_0org3f7</outgoing>
        <outgoing>SequenceFlow_16ib0r7</outgoing>
      </exclusiveGateway>
      <sequenceFlow id="SequenceFlow_0wnb4ke" sourceRef="Task_1hcentk" targetRef="ExclusiveGateway_15hu1pt" />
      <task id="Task_0cfrjuy" name="x1">
        <incoming>SequenceFlow_0org3f7</incoming>
        <outgoing>SequenceFlow_19s704j</outgoing>
      </task>
      <sequenceFlow id="SequenceFlow_0org3f7" sourceRef="ExclusiveGateway_15hu1pt" targetRef="Task_0cfrjuy" />
      <task id="Task_1206bgx" name="x2">
        <incoming>SequenceFlow_16ib0r7</incoming>
        <outgoing>SequenceFlow_07arta0</outgoing>
      </task>
      <sequenceFlow id="SequenceFlow_16ib0r7" sourceRef="ExclusiveGateway_15hu1pt" targetRef="Task_1206bgx" />
      <exclusiveGateway id="ExclusiveGateway_0zycfrc">
        <incoming>SequenceFlow_07arta0</incoming>
        <outgoing>SequenceFlow_0wjsuvc</outgoing>
      </exclusiveGateway>
      <sequenceFlow id="SequenceFlow_07arta0" sourceRef="Task_1206bgx" targetRef="ExclusiveGateway_0zycfrc" />
      <intermediateThrowEvent id="IntermediateThrowEvent_1pkch9y">
        <incoming>SequenceFlow_0wjsuvc</incoming>
        <outgoing>SequenceFlow_1xc2boq</outgoing>
      </intermediateThrowEvent>
      <sequenceFlow id="SequenceFlow_0wjsuvc" sourceRef="ExclusiveGateway_0zycfrc" targetRef="IntermediateThrowEvent_1pkch9y" />
      <endEvent id="EndEvent_0ls3v4g">
        <incoming>SequenceFlow_19s704j</incoming>
      </endEvent>
      <sequenceFlow id="SequenceFlow_19s704j" sourceRef="Task_0cfrjuy" targetRef="EndEvent_0ls3v4g" />
      <endEvent id="EndEvent_08h2usd">
        <incoming>SequenceFlow_1xc2boq</incoming>
      </endEvent>
      <sequenceFlow id="SequenceFlow_1xc2boq" sourceRef="IntermediateThrowEvent_1pkch9y" targetRef="EndEvent_08h2usd" />
      <task id="Task_1cqe0bd" name="test">
        <incoming>SequenceFlow_0s3g4zl</incoming>
      </task>
      <sequenceFlow id="SequenceFlow_0s3g4zl" sourceRef="Task_1hcentk" targetRef="Task_1cqe0bd" />
    </process>
    <bpmndi:BPMNDiagram id="BpmnDiagram_1">
      <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1">
        <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1y45yut">
          <omgdc:Bounds x="152" y="292" width="36" height="36" />
          <bpmndi:BPMNLabel>
            <omgdc:Bounds x="134" y="335" width="73" height="14" />
          </bpmndi:BPMNLabel>
        </bpmndi:BPMNShape>
        <bpmndi:BPMNShape id="Task_1hcentk_di" bpmnElement="Task_1hcentk">
          <omgdc:Bounds x="240" y="270" width="100" height="80" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0h21x7r_di" bpmnElement="SequenceFlow_0h21x7r">
          <omgdi:waypoint x="188" y="310" />
          <omgdi:waypoint x="240" y="310" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="ExclusiveGateway_15hu1pt_di" bpmnElement="ExclusiveGateway_15hu1pt" isMarkerVisible="true">
          <omgdc:Bounds x="395" y="285" width="50" height="50" />
          <bpmndi:BPMNLabel>
            <omgdc:Bounds x="387" y="261" width="66" height="14" />
          </bpmndi:BPMNLabel>
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0wnb4ke_di" bpmnElement="SequenceFlow_0wnb4ke">
          <omgdi:waypoint x="340" y="310" />
          <omgdi:waypoint x="395" y="310" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="Task_0cfrjuy_di" bpmnElement="Task_0cfrjuy">
          <omgdc:Bounds x="500" y="270" width="100" height="80" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0org3f7_di" bpmnElement="SequenceFlow_0org3f7">
          <omgdi:waypoint x="445" y="310" />
          <omgdi:waypoint x="500" y="310" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="Task_1206bgx_di" bpmnElement="Task_1206bgx">
          <omgdc:Bounds x="500" y="380" width="100" height="80" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_16ib0r7_di" bpmnElement="SequenceFlow_16ib0r7">
          <omgdi:waypoint x="420" y="335" />
          <omgdi:waypoint x="420" y="420" />
          <omgdi:waypoint x="500" y="420" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="ExclusiveGateway_0zycfrc_di" bpmnElement="ExclusiveGateway_0zycfrc" isMarkerVisible="true">
          <omgdc:Bounds x="655" y="395" width="50" height="50" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_07arta0_di" bpmnElement="SequenceFlow_07arta0">
          <omgdi:waypoint x="600" y="420" />
          <omgdi:waypoint x="655" y="420" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="IntermediateThrowEvent_1pkch9y_di" bpmnElement="IntermediateThrowEvent_1pkch9y">
          <omgdc:Bounds x="762" y="402" width="36" height="36" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0wjsuvc_di" bpmnElement="SequenceFlow_0wjsuvc">
          <omgdi:waypoint x="705" y="420" />
          <omgdi:waypoint x="762" y="420" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="EndEvent_0ls3v4g_di" bpmnElement="EndEvent_0ls3v4g">
          <omgdc:Bounds x="662" y="292" width="36" height="36" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_19s704j_di" bpmnElement="SequenceFlow_19s704j">
          <omgdi:waypoint x="600" y="310" />
          <omgdi:waypoint x="662" y="310" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="EndEvent_08h2usd_di" bpmnElement="EndEvent_08h2usd">
          <omgdc:Bounds x="642" y="662" width="36" height="36" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_1xc2boq_di" bpmnElement="SequenceFlow_1xc2boq">
          <omgdi:waypoint x="796" y="412" />
          <omgdi:waypoint x="1000" y="310" />
          <omgdi:waypoint x="760" y="570" />
          <omgdi:waypoint x="650" y="480" />
          <omgdi:waypoint x="350" y="560" />
          <omgdi:waypoint x="643" y="674" />
        </bpmndi:BPMNEdge>
        <bpmndi:BPMNShape id="Task_1cqe0bd_di" bpmnElement="Task_1cqe0bd">
          <omgdc:Bounds x="500" y="80" width="100" height="80" />
        </bpmndi:BPMNShape>
        <bpmndi:BPMNEdge id="SequenceFlow_0s3g4zl_di" bpmnElement="SequenceFlow_0s3g4zl">
          <omgdi:waypoint x="320" y="270" />
          <omgdi:waypoint x="320" y="120" />
          <omgdi:waypoint x="480" y="250" />
          <omgdi:waypoint x="528" y="160" />
        </bpmndi:BPMNEdge>
      </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
  </definitions>`
);

export {
  xml,
}