import React from "react";
import {Col, Row} from "antd";

const SelectedFacets = ({selectedFacets}) => {
  const renderFacets = () => {
  };

  return (
    <Row gutter={[32, 16]} style={{width: '100%'}}>
      <Col xs={2}> </Col>
      <Col xs={20}>
        {renderFacets()}
      </Col>
      <Col xs={2}> </Col>
    </Row>
  )
};

export default SelectedFacets;
