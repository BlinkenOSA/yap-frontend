import {Col, Pagination, Row} from "antd";
import React from "react";
import style from "./ResultPagination.module.css";
import RecordsPerPage from "../RecordsPerPage/RecordsPerPage";

const ResultPagination = ({count, limit=10, offset=0, onPageChange, recordsPerPage=true}) => {
  return (
    <Row>
      <Col xs={24} md={24}>
        <div className={style.Pagination}>
          <Pagination
            total={count}
            pageSize={limit ? limit : 10}
            showSizeChanger={false}
            current={offset ? offset / limit + 1 : 1}
            onChange={onPageChange} />
          {recordsPerPage && <RecordsPerPage onChange={onPageChange} />}
        </div>
      </Col>
    </Row>
  )
};

export default ResultPagination;
