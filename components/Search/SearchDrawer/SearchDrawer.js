import React from "react";
import {Col, Input, Row} from "antd";
import style from "./SearchDrawer.module.css";
import {useRouter} from "next/router";
import SelectedFacets from "../SearchBar/SelectedFacets";

const {Search} = Input;

const SearchDrawer = ({urlParams, onSearch}) => {
  const router = useRouter();

  const {query, limit, offset, ...selectedFacets} = urlParams;

  const handleSearch = (value, event) => {
    onSearch();
    router.push({
      pathname: '/search',
      query: {
        query: value,
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
    <div className={style.SearchDrawer}>
      <Row gutter={12}>
        <Col xs={24}>
          <div className={style.SearchLabel}>Search:</div>
        </Col>
        <Col xs={24}>
          <div className={style.Search}>
            <Search
              defaultValue={query}
              onSearch={handleSearch}
              style={{width: '100%'}}
              enterButton
              onChange={(e) => {
                if (e.target.value === '' && e.type === 'click') {
                  handleSearch('')
                }
              }}
              allowClear={true}
            />
          </div>
        </Col>
        <Col xs={24}>
          <div className={style.FilterLabel}>Selected filters:</div>
        </Col>
        <Col xs={24}>
          <SelectedFacets
            selectedFacets={selectedFacets}
            onFacetRemove={handleFacetRemove}
            onDateRangeFacetRemove={handleDateRangeFacetRemove}
          />
        </Col>
      </Row>
    </div>
  )
};

export default SearchDrawer;
