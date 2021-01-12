import React from "react";
import {Button, Col, Row} from "antd";
import _ from 'lodash';
import style from "./SelectedFacets.module.css";
import { CloseOutlined } from '@ant-design/icons';

const SelectedFacets = ({selectedFacets, onFacetRemove, onDateRangeFacetRemove}) => {
  const renderFacetButton = (key, value, label, index) => {
    const renderButton = (val, index) => (
      <span className={style.Button} key={index}>
        <span className={style.Label}>{label}:</span> {val}
        <a className={style.RemoveIcon} onClick={() => onFacetRemove(key, val)}><CloseOutlined/></a>
      </span>
    );

    if (Array.isArray(value)) {
      return value.map((val, index) => (renderButton(val, index)))
    } else {
      return renderButton(value, index);
    }

  };

  const renderDateFacet = (start, end) => (
    <span className={style.Button} key={'temporal_coverage'}>
      <span className={style.Label}>Temporal coverage:</span> {start} {end ? `- ${end}` : ''}
      <a className={style.RemoveIcon} onClick={() => onDateRangeFacetRemove('year_coverage_start', 'year_coverage_end')}>
        <CloseOutlined/>
      </a>
    </span>
  );

  const renderFacets = () => (
    Object.keys(selectedFacets).map((key, index) => {
      const value = selectedFacets[key];

      switch (key) {
        case 'city':
          return renderFacetButton(key, value, 'Place', index);
        case 'subject':
          return renderFacetButton(key, value, 'Keyword', index);
        case 'year_coverage_start':
          return renderDateFacet(selectedFacets['year_coverage_start'], selectedFacets['year_coverage_end']);
        case 'year_coverage_end':
          return '';
        default:
          return renderFacetButton(key, value, _.startCase(key), index)
      }
    })
  );

  return (
      Object.keys(selectedFacets).length > 0 &&
      <Row gutter={[32, 16]} style={{width: '100%'}}>
        <Col sm={2} md={4}> </Col>
        <Col sm={20} md={16}>
          {renderFacets()}
        </Col>
        <Col sm={2} md={4}> </Col>
      </Row>
  )
};

export default SelectedFacets;
