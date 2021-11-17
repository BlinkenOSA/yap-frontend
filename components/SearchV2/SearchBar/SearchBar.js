import React, {useState} from "react";
import {Badge, Button, Col, Row} from "antd";
import { Form, Input } from 'formik-antd'
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import style from "./SearchBar.module.css";
import {Formik} from "formik";
import {useRouter} from "next/router";

const SearchBar = ({onSearch, onFilter, urlParams, ...props}) => {
  const router = useRouter();

  const {query, limit, offset, ...selectedFacets} = urlParams;

  const getCount = () => {
    let count = 0;

    if (selectedFacets) {
      Object.keys(selectedFacets).forEach(key => {
        if (Array.isArray(selectedFacets[key])) {
          count += selectedFacets[key].length
        } else {
          if (key !== 'year_coverage_end') {
            count += 1;
          }
        }
      })
    }
    return count;
  };

  const handleSearch = (values) => {
    const {query} = values;
    onSearch(values);
    router.push({
      pathname: '/search-v2',
      query: {
        query: query,
      }
    })
  };

  return (
    <div style={{paddingLeft: 20, paddingTop: 15}}>
      <Formik
        onSubmit={handleSearch}
        enableReinitialize={true}
        initialValues={{query: query}}
      >
        {(props) => (
          <Form layout="inline" onSubmit={props.handleSubmit}>
            <Row gutter={[32, 16]} style={{width: '100%'}}>
              <Col xs={20}>
                <Input
                  className={style.SearchInput}
                  name={'query'}
                  size="large"
                  style={{width: "100%"}}
                  allowClear={true}
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
              <Col xs={2}>
                <Badge count={getCount()} style={{backgroundColor: '#2E80EC'}}>
                  <Button
                    shape="circle"
                    icon={<FilterOutlined style={{fontSize: '22px', fontWeight: 'bold'}} />}
                    size={'large'}
                    onClick={onFilter}
                    className={style.SearchButton}
                  />
                </Badge>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default SearchBar;
