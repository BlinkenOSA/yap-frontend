import React, {useState} from "react";
import {Col, Drawer, Row} from "antd";
import style from "./ResultPage.module.css"
import dynamic from "next/dist/next-server/lib/dynamic";
import Facets from "../Facets/Facets";
import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";
import SearchBarMobile from "../SearchBar/SearchBarMobile";
import ResultPageListMobile from "./ResultPageListMobile";
import ResultPageMobileViewButtons from "./ResultPageMobileViewButtons";

const ResultPageMap = dynamic(
  () => import('../ResultPageMap/ResultPageMap'),
  { ssr: false }
);

const ResultPageMobile = (params) => {
  const {query, limit, offset, ...selectedFacets} = params;
  const [filterOpen, setFilterOpen] = useState(false);
  const [displayOnMapID, setDisplayOnMapID] = useState(0);

  const [selectedDisplay, setSelectedDisplay] = useState('results');

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
            {
              selectedDisplay === 'results' ?
                <ResultPageListMobile
                  urlParams={params}
                  displayOnMapID={displayOnMapID}
                  onClickDisplayOnMap={onClickDisplayOnMap}
                  data={data}
                /> :
                <ResultPageMap
                  query={query}
                  selectedFacets={selectedFacets}
                  selectedEntry={displayOnMapID}
                  filterOpen={filterOpen}
                  view={'mobile'}
                />
            }
            <ResultPageMobileViewButtons
              selectedDisplay={selectedDisplay}
              selectedEntry={displayOnMapID}
              onViewChange={setSelectedDisplay}
              count={data ? data['count'] : 0}
            />
            <Drawer
              mask={false}
              placement={'top'}
              width={'100%'}
              height={'calc(100vh - 104px)'}
              visible={filterOpen}
              closable={true}
              getContainer={false}
              className={style.Drawer}
              onClose={() => setFilterOpen(false)}
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
    </div>
  )
};

export default ResultPageMobile;
