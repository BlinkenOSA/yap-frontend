import {Col, Pagination, Row} from "antd";
import React, {useState, useEffect} from "react";
import style from "./ResultPaginationMobile.module.css";

const ResultPaginationMobile = ({count, limit=10, offset=0, onPageChange}) => {
  return (
    <Row>
      <Col xs={24}>
        <div className={style.Pagination}>
          <Pagination
            total={count}
            simple
            showTotal={total => (<div className={style.Total}>{`${total} records`}</div>)}
            pageSize={limit ? limit : 10}
            showLessItems={true}
            showSizeChanger={false}
            current={offset ? offset / limit + 1 : 1}
            onChange={onPageChange}
          />
        </div>
      </Col>
    </Row>
  )
};

export default ResultPaginationMobile;
