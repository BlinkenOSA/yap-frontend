import React from "react";
import {Button, Col, Row} from "antd";
import { Form, Input } from 'formik-antd'
import { SearchOutlined } from '@ant-design/icons';
import style from "./SearchBarDesktop.module.css";
import {Formik} from "formik";

const SearchBarDesktop = ({onSearch, initialValues={}, ...props}) => {
  return (
    <Formik
      onSubmit={onSearch}
      enableReinitialize={true}
      initialValues={initialValues}
    >
      {(props) => (
        <Form layout="inline" onSubmit={props.handleSubmit}>
          <Row gutter={[32, 16]} style={{width: '100%'}}>
            <Col xs={4}> </Col>
            <Col xs={14}>
              <Input
                placeholder={'Search...'}
                className={style.SearchInput}
                name={'query'}
                size="large"
                style={{width: "100%"}}
                allowClear={true}
                onChange={(e) => {e.target.value === '' ? onSearch(e.target.value) : undefined}}
              />
            </Col>
            <Col xs={2}>
              <Button
                htmlType="submit"
                shape="circle"
                icon={<SearchOutlined style={{fontSize: '22px', fontWeight: 'bold'}} />}
                size={'large'}
                className={style.SearchButton}
              />
            </Col>
            <Col xs={4}> </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
};

export default SearchBarDesktop;
