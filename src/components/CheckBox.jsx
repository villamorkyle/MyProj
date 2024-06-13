import { Checkbox, Col, Row, Space } from "antd";

export const GenderCheckbox = ([ localData.gender, onChange ]) => (
  <Checkbox.Group value={localData.gender} onChange={onChange}>
    <Row>
      <Space>
        <Col span={7}>
          <Checkbox value="male">Male</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="female">Female</Checkbox>
        </Col>
        <Col span={8}>
          <Checkbox value="other">Other</Checkbox>
        </Col>
      </Space>
    </Row>
  </Checkbox.Group>
);
