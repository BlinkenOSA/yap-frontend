import React, {useState, useEffect} from "react";
import {Badge, Button, Col, Row} from "antd";
import { SearchOutlined } from '@ant-design/icons';
import style from "./SearchBarMobile.module.css";
import globalStyle from "../../../styles/global.module.css";

const SearchBarMobile = ({onFilter, filterOpen, onSearch, selectedDisplay, setSelectedDisplay, onClickDisplayOnMap, data, urlParams}) => {
  const {query, limit, offset, ...selectedFacets} = urlParams;

  const getSearchCount = () => {
    const queryCount = query && query !== '' ? 1 : 0;
    let facetCount = 0;

    for (const [key, value] of Object.entries(selectedFacets)) {
      if (Array.isArray(value)) {
        facetCount += value.length;
      } else {
        facetCount += 1;
      }
    }

    return queryCount + facetCount;
  };

  return (
    <div className={style.SearchBar}>
      <Row style={{width: '100%'}}>
        <Col flex={'50px'}>
          <Badge
            style={{backgroundColor: '#2E80EC', zIndex: 500}}
            count={getSearchCount()}
            offset={[0, 38]}
            overflowCount={9999}
          >
            <Button
              htmlType="submit"
              shape="circle"
              icon={<SearchOutlined style={{fontSize: '22px', fontWeight: 'bold'}} />}
              onClick={onSearch}
              size={'large'}
              className={filterOpen ? style.SearchButtonActive : style.SearchButton}
            />
          </Badge>
        </Col>
        <Col flex={'50px'}>
          <Button
            shape="circle"
            size={'large'}
            onClick={onFilter}
            className={filterOpen ? style.FilterButtonActive : style.FilterButton}
          >
            <span className={style.FilterButtonImage} />
          </Button>
        </Col>
        <Col flex={'auto'}>
          <div className={globalStyle.MobileViewButtons} style={{textAlign: 'right'}}>
            <Badge
              style={{backgroundColor: '#2E80EC', zIndex: 500}}
              count={data ? data['count'] : 0}
              showZero
              offset={[-80, 38]}
              overflowCount={9999}
            >
              <Button
                style={{marginRight: '10px'}}
                onClick={() => {
                  setSelectedDisplay('results');
                  onClickDisplayOnMap(0);
                }}
                className={selectedDisplay === 'results' ? globalStyle.ActiveButton : ''}
              >
                Results
              </Button>
            </Badge>
            <Button
              onClick={() => setSelectedDisplay('maps')}
              className={selectedDisplay === 'results' ? '' : globalStyle.ActiveButton}
            >
              Map
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default SearchBarMobile;
