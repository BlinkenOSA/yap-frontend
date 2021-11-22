import {Col, Pagination, Row} from "antd";
import React from "react";
import style from "./ResultPagination.module.css";
import RecordsPerPage from "./RecordsPerPage";

const ResultPagination = ({count, limit=10, offset=0, onPageChange}) => {
  return (
    <Row>
      <Col xs={24}>
        <div className={style.Pagination}>
          <Pagination
            total={count}
            showTotal={total => (<div className={style.Total}>{`${total} records`}</div>)}
            pageSize={limit ? limit : 10}
            showLessItems={true}
            showSizeChanger={false}
            current={offset ? offset / limit + 1 : 1}
            onChange={onPageChange}
          />
          <RecordsPerPage recordsPerPage={limit} onChange={(value) => onPageChange(1, value)} />
        </div>
      </Col>
    </Row>
  )
};

export default ResultPagination;
