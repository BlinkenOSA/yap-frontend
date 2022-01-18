import React, {useState} from "react";
import {Col, Drawer, Row} from "antd";
import style from "./ResultPage.module.css"
import dynamic from "next/dist/next-server/lib/dynamic";
import Facets from "../Facets/Facets";
import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";
import SearchBarMobile from "../SearchBar/SearchBarMobile";
import ResultPageListMobile from "./ResultPageListMobile";
import SearchDrawer from "../SearchDrawer/SearchDrawer";

const ResultPageMap = dynamic(
  () => import('../ResultPageMap/ResultPageMap'),
  { ssr: false }
);

const ResultPageMobile = (params) => {
  const {query, limit, offset, ...selectedFacets} = params;

  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [displayOnMapID, setDisplayOnMapID] = useState(0);

  const [selectedDisplay, setSelectedDisplay] = useState('results');

  const { data, error } = useSWR([`${API}/repository/records/`, params], fetcher);

  const onFilter = () => {
    setFilterOpen(!filterOpen);
  };

  const onSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const onClickDisplayOnMap = (id) => {
    setFilterOpen(false);
    setDisplayOnMapID(id);
    id !== 0 && setSelectedDisplay('maps');
  };

  const renderComponent = () => {
    if (searchOpen) {
      return <SearchDrawer onSearch={onSearch} urlParams={params} />
    }

    if (filterOpen) {
      return <Facets query={query} selectedFacets={selectedFacets} facetData={data ? data.facets : {}} />
    }

    return (
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
    )
  };

  return (
    <Row>
      <Col xs={24}>
        <div className={style.ResultsMobile}>
          <SearchBarMobile
            urlParams={params}
            onFilter={onFilter}
            filterOpen={filterOpen}
            onSearch={onSearch}
            searchOpen={searchOpen}
            selectedDisplay={selectedDisplay}
            setSelectedDisplay={setSelectedDisplay}
            selectedEntry={displayOnMapID}
            onClickDisplayOnMap={onClickDisplayOnMap}
            data={data}
          />
          {renderComponent()}
        </div>
      </Col>
    </Row>
  )
};

export default ResultPageMobile;
