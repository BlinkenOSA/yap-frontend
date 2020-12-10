import {Col, Pagination, Row} from "antd";
import React from "react";
import style from "./ResultPagination.module.css";

const ResultPagination = ({count, limit=10, offset=0, onPageChange}) => {
  return (
    <Row>
      <Col md={24}>
        <div className={style.Pagination}>
          <Pagination
            total={count}
            pageSize={limit}
            showSizeChanger={false}
            current={offset ? offset / limit + 1 : 1}
            onChange={onPageChange} />
        </div>
      </Col>
    </Row>
  )
};

export default ResultPagination;
