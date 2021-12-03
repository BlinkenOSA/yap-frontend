import React, {useState, useEffect} from "react";
import {Button, Col, Drawer, Row} from "antd";
import style from "./ResultPage.module.css"
import ResultPageList from "./ResultPageList";
import dynamic from "next/dist/next-server/lib/dynamic";
import SearchBar from "../SearchBar/SearchBar";
import Facets from "../Facets/Facets";
import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";
import SearchBarMobile from "../SearchBar/SearchBarMobile";
import globalStyle from "../../../styles/global.module.css";

const ResultPageMap = dynamic(
  () => import('../ResultPageMap/ResultPageMap'),
  { ssr: false }
);

const ResultPageMobile = (params) => {
  const {query, limit, offset, ...selectedFacets} = params;
  const [filterOpen, setFilterOpen] = useState(false);
  const [displayOnMapID, setDisplayOnMapID] = useState(0);

  const { data, error } = useSWR([`${API}/repository/records/`, params], fetcher);

  const onFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const onSearch = () => {
    setDisplayOnMapID(0);
  };

  const onClickDisplayOnMap = (id) => {
    setFilterOpen(false);
    setDisplayOnMapID(id);
  };

  return (
    <div className={style.ResultsWrap}>
      <Row>
        <Col xs={24}>
          <div className={style.Results}>
            <SearchBarMobile
              urlParams={params}
              filterOpen={filterOpen}
              onFilter={onFilter}
              onSearch={onSearch}
            />
            <ResultPageList
              urlParams={params}
              displayOnMapID={displayOnMapID}
              onClickDisplayOnMap={onClickDisplayOnMap}
              data={data}
            />
            <Drawer
              mask={false}
              placement={'top'}
              width={'100%'}
              visible={filterOpen}
              closable={true}
              getContainer={false}
              className={style.Drawer}
              style={{ position: 'absolute' }}
            >
              <Facets
                query={query}
                selectedFacets={selectedFacets}
                facetData={data ? data.facets : {}}
              />
            </Drawer>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <div className={globalStyle.NavButtons}>
            <Button>Results</Button>
            <Button>Map</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
};

export default ResultPageMobile;
