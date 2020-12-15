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
import ResultPageFacetsDesktop from "../components/Search/ResultPageFacets/ResultPageFacetsDesktop";
import SelectedFacets from "../components/Search/SelectedFacets/SelectedFacets";
import ResultPageFacetsMobile from "../components/Search/ResultPageFacets/ResultPageFacetsMobile";
import Image from "next/image";
import Head from "next/head";

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

  const onPageChange = (page, pageSize) => {
    router.push({
      pathname: '/search',
      query: {
        query: query,
        limit: pageSize,
        offset: (page * pageSize) - pageSize,
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
    data.count > 0 ?
    <React.Fragment>
      <Row>
        <Col xs={24}>
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
    </React.Fragment> :
    <Row>
      <Col xs={24}>
        <div style={{textAlign: 'center', marginTop: '20px', fontWeight: '700', color: '#CCC'}}>
          There are no records with the defined search criteria!<br/>
          Please try again with a different search term.
        </div>
      </Col>
      <Col xs={24}>
        <div style={{textAlign: 'center'}}>
          <Image
            width={400}
            height={400}
            objectFit={'contain'}
            objectPosition={'center center'}
            src={'/images/emptyPage.svg'}
          />
        </div>
      </Col>
    </Row>
  );

  return (
    <AppLayout>
      <Head>
        <title>YAP (Yugoslavia Archive Project) - Search</title>
      </Head>
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
          <Media at="xs">
            <ResultPageFacetsMobile
              selectedFacets={selectedFacets}
              onFacetSelect={onFacetSelect}
              onDateRangeFacetSelect={onDateRangeFacetSelect}
              onFacetRemove={onFacetRemove}
              onDateRangeFacetRemove={onDateRangeFacetRemove}
              facets={data ? data.facets : {}}
            />
          </Media>
          <Media greaterThan="xs">
            <ResultPageFacetsDesktop
              selectedFacets={selectedFacets}
              onFacetSelect={onFacetSelect}
              onDateRangeFacetSelect={onDateRangeFacetSelect}
              onFacetRemove={onFacetRemove}
              onDateRangeFacetRemove={onDateRangeFacetRemove}
              facets={data ? data.facets : {}}
            />
          </Media>
        </Col>
        <Col xs={24} md={18}>
          { data ? renderResults() : <div>Loading...</div>}
        </Col>
      </Row>
    </AppLayout>
  );
};

export default Search;