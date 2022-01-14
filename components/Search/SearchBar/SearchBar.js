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
    <div style={{marginLeft: 20, marginRight: 15, marginBottom: 10}}>
      <Formik
        onSubmit={handleSearch}
        enableReinitialize={true}
        initialValues={{query: query}}
      >
        {(props) => (
          <Form onSubmit={props.handleSubmit}>
            <Row style={{width: '100%'}}>
              <Col flex={'auto'}>
                <Input
                  className={style.SearchInput}
                  name={'query'}
                  size="large"
                  style={{width: "100%"}}
                  allowClear={true}
                />
              </Col>
              <Col flex={'50px'} style={{textAlign: 'right'}}>
                <Button
                  htmlType="submit"
                  shape="circle"
                  icon={<SearchOutlined style={{fontSize: '22px', fontWeight: 'bold'}} />}
                  size={'large'}
                  className={style.SearchButton}
                />
              </Col>
              <Col flex={'50px'} style={{textAlign: 'right'}}>
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
