import AppLayout from "../components/Layout/Layout";
import SearchBarDesktop from "../components/Search/SearchBarDesktop/SearchBarDesktop";
import SearchBarMobile from "../components/Search/SearchBarMobile/SearchBarMobile";
import React, {useState} from "react";
import {Media} from "../components/Media/Media";
import useSWR from 'swr'
import {useRouter} from "next/router";
import {API, fetcher} from "../utils/api";
import {Col, Pagination, Row} from "antd";
import ResultCounter from "../components/Search/ResultCounter/ResultCounter";
import ResultPage from "../components/Search/ResultPage/ResultPage";
import ResultPageFacets from "../components/Search/ResultPage/ResultPageFacets";
import SelectedFacets from "../components/Search/SelectedFacets/SelectedFacets";

const Search = () => {
  const [view, setView] = useState('list');

  const router = useRouter();
  const params = router.query;
  const {query, limit, offset, ...selectedFacets} = params;

  const { data, error } = useSWR([`${API}/repository/records/`, params], fetcher);

  const onSearch = (values) => {
    router.push({pathname: '/search', query: values})
  };

  const onRecordsPerPageChange = (value) => {
    router.push({
      pathname: '/search',
      query: {
        query: query,
        limit: value,
        ...selectedFacets
      }
    })
  };

  const onPageChange = (page) => {
    router.push({
      pathname: '/search',
      query: {
        query: query,
        limit: limit,
        offset: (page * limit) - limit,
        ...selectedFacets
      }
    })
  };

  const onFacetSelect = (field, value) => {
    if (selectedFacets.hasOwnProperty(field)) {
      if (Array.isArray(selectedFacets[field])) {
        selectedFacets[field].push(value)
      } else {
        selectedFacets[field] = [selectedFacets[field], value]
      }
    } else {
      selectedFacets[field] = value;
    }

    router.push({
      pathname: '/search', query: {
        query: query,
        limit: limit,
        ...selectedFacets
      }
    })
  };

  const onDateRangeFacetSelect = (dateRangeValues) => {
    const newFacets = {...selectedFacets, ...dateRangeValues}
    router.push({
      pathname: '/search', query: {
        query: query,
        limit: limit,
        ...newFacets
      }
    })
  };

  const onFacetRemove = (field, value) => {
    if (selectedFacets.hasOwnProperty(field)) {
      if (Array.isArray(selectedFacets[field])) {
        if (selectedFacets[field].includes(value)) {
          selectedFacets[field].pop(value)
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
        limit: limit,
        ...selectedFacets
      }
    })
  };

  const onDateRangeFacetRemove = (dateStartField, dateEndField) => {
    delete selectedFacets[dateStartField];
    delete selectedFacets[dateEndField];
    router.push({
      pathname: '/search', query: {
        query: query,
        limit: limit,
        ...selectedFacets
      }
    })
  };

  const renderResults = () => (
    <React.Fragment>
      <Row>
        <Col md={24}>
          <ResultCounter count={data.count} limit={limit} offset={offset}/>
        </Col>
      </Row>
      <ResultPage
        data={data}
        limit={limit}
        offset={offset}
        onPageChange={onPageChange}
        onRecordsPerPageChange={onRecordsPerPageChange}
      />
    </React.Fragment>
  );

  return (
    <AppLayout>
      <div className="container">
        <Media at="xs">
          <SearchBarMobile onSearch={onSearch} initialValues={params}/>
        </Media>
        <Media greaterThan="xs">
          <SearchBarDesktop onSearch={onSearch} initialValues={params}/>
          <SelectedFacets selectedFacets={selectedFacets} onFacetRemove={onFacetRemove}/>
        </Media>
      </div>
      <Row>
        <Col xs={24} md={6}>
          <ResultPageFacets
            selectedFacets={selectedFacets}
            onFacetSelect={onFacetSelect}
            onDateRangeFacetSelect={onDateRangeFacetSelect}
            onFacetRemove={onFacetRemove}
            onDateRangeFacetRemove={onDateRangeFacetRemove}
            facets={data ? data.facets : {}}
          />
        </Col>
        <Col xs={24} md={18}>
          { data ? renderResults() : <div>Loading...</div>}
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Search;
