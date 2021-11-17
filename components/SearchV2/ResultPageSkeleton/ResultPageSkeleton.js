import React from "react";
import {Col, Row, Spin} from "antd";

const ResultPageSkeleton = (props) => (
  <Spin size="large">
    <Row>
      <Col xs={24}>
        <div style={{width: '100%', minHeight: '800px'}}/>
      </Col>
    </Row>
  </Spin>
);

export default ResultPageSkeleton;
