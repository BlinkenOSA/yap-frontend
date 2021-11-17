import React, {useState, useEffect} from "react";
import {Col, Drawer, Row} from "antd";
import style from "./ResultPage.module.css"
import ResultPageList from "./ResultPageList";
import dynamic from "next/dist/next-server/lib/dynamic";
import SearchBar from "../SearchBar/SearchBar";
import Facets from "../Facets/Facets";
import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";

const ResultPageMap = dynamic(
  () => import('../ResultPageMap/ResultPageMap'),
  { ssr: false }
);

const ResultPage = (params) => {
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

  return (
    <div className={style.ResultsWrap}>
      <Row>
        <Col xs={12}>
          <div className={style.Results}>
            <SearchBar
              urlParams={params}
              onFilter={onFilter}
              onSearch={onSearch}
            />
            <ResultPageList
              urlParams={params}
              displayOnMapID={displayOnMapID}
              onClickDisplayOnMap={(id) => setDisplayOnMapID(id)}
              data={data}
            />
          </div>
        </Col>
        <Col xs={12}>
          <ResultPageMap
            query={query}
            selectedFacets={selectedFacets}
            selectedEntry={displayOnMapID}
            filterOpen={filterOpen}
          />
          <Drawer
            mask={false}
            placement={'right'}
            width={'100%'}
            visible={filterOpen}
            closable={false}
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
        </Col>
      </Row>
    </div>
  )
};

export default ResultPage;
