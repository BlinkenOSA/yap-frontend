import React, {useState} from "react";
import {Badge, Button, Col, Row} from "antd";
import { Form, Input } from 'formik-antd'
import { SearchOutlined } from '@ant-design/icons';
import style from "./SearchBar.module.css";
import {Formik} from "formik";
import {useRouter} from "next/router";
import SelectedFacets from "./SelectedFacets";

const SearchBar = ({onSearch, onFilter, filterOpen, urlParams}) => {
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
      pathname: '/search',
      query: {
        query: query,
      }
    })
  };

  const handleFacetRemove = (field, value) => {
    if (selectedFacets.hasOwnProperty(field)) {
      if (Array.isArray(selectedFacets[field])) {
        if (selectedFacets[field].includes(value)) {
          selectedFacets[field] = selectedFacets[field].filter(facet => facet !== value);
        }
      } else {
        if (selectedFacets[field] === value) {
          delete selectedFacets[field]
        }
      }
    }

    router.push({
      pathname: '/search', query: {
        query: query,
        ...selectedFacets
      }
    })
  };

  const handleDateRangeFacetRemove = (dateStartField, dateEndField) => {
    delete selectedFacets[dateStartField];
    delete selectedFacets[dateEndField];

    router.push({
      pathname: '/search', query: {
        query: query,
        ...selectedFacets
      }
    })
  };

  return (
    <div style={{marginLeft: 20}}>
      <Formik
        onSubmit={handleSearch}
        enableReinitialize={true}
        initialValues={{query: query}}
      >
        {(props) => (
          <Form layout="inline" onSubmit={props.handleSubmit}>
            <Row gutter={[16, 16]} style={{width: '100%'}}>
              <Col xs={20}>
                <Input
                  className={style.SearchInput}
                  name={'query'}
                  size="large"
                  style={{width: "100%"}}
                  allowClear={true}
                />
              </Col>
              <Col xs={2} style={{textAlign: 'right'}}>
                <Button
                  htmlType="submit"
                  shape="circle"
                  icon={<SearchOutlined style={{fontSize: '22px', fontWeight: 'bold'}} />}
                  size={'large'}
                  className={style.SearchButton}
                />
              </Col>
              <Col xs={2} style={{textAlign: 'right'}}>
                <Button
                  shape="circle"
                  size={'large'}
                  onClick={onFilter}
                  className={filterOpen ? style.FilterButtonActive : style.FilterButton}
                >
                  <span className={style.FilterButtonImage} />
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
      <SelectedFacets
        selectedFacets={selectedFacets}
        onFacetRemove={handleFacetRemove}
        onDateRangeFacetRemove={handleDateRangeFacetRemove}
      />
    </div>
  )
};

export default SearchBar;
