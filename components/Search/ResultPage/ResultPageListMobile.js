import React, {useState, useEffect} from "react";
import {Button, Col, Row, Spin} from "antd";
import style from "./ResultPageList.module.css"
import Highlight from "../Highlight/Highlight";
import {useRouter} from "next/router";
import ResultPaginationMobile from "../ResultPagination/ResultPaginationMobile";

const ResultPageListMobile = ({data, displayOnMapID, onClickDisplayOnMap, urlParams}) => {
  const router = useRouter();

  const [dataLength, setDataLength] = useState(0);

  const {query, limit, offset, ...selectedFacets} = urlParams;

  useEffect(() => {
    data && setDataLength(data.count);
  }, [data]);

  const handlePageChange = (page, pageSize) => {
    onClickDisplayOnMap(0);
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

  const renderDates = (startDate, endDate) => {
    if (endDate) {
      if (startDate !== endDate) {
        return `(${startDate} - ${endDate})`
      } else {
        return `(${startDate})`
      }
    } else {
      return `(${startDate})`
    }
  };

  const renderTitle = (d) => {
    const {highlights} = data;

    if (highlights.hasOwnProperty(d.id)) {
      const h = highlights[d.id];
      if (h.hasOwnProperty('title_original_search')) {
        return <div dangerouslySetInnerHTML={
          {__html: `${h.title_original_search}`}
        }/>
      }
      if (h.hasOwnProperty('title_english_search')) {
        return <div dangerouslySetInnerHTML={
          {__html: `${h.title_english_search}`}
        }/>
      }
    }
    return `${d.title_english}`
  };

  const renderSearchHit = (d) => {
    const {highlights} = data;

    if (highlights.hasOwnProperty(d.id)) {
      const h = highlights[d.id];
      return (<Highlight data={h} id={d.id}/>);

    }
  };

  const showItOnMap = (id) => {
    if (id === displayOnMapID) {
      onClickDisplayOnMap(0);
    } else {
      onClickDisplayOnMap(id);
    }
  };

  const results = () => {
    const {results} = data;
    return results.map((d, idx) => (
      <Row style={{marginBottom: '20px'}} key={idx}>
        <Col xs={24}>
          <div className={style.ResultItemDataMobile}>
            <div className={style.Title}>
              <a href={`/record/${d.id}`} target={'_blank'}>
                {renderTitle(d)}
              </a>
              <span style={{float: 'right'}}>
                <Button
                  shape="circle"
                  size={'large'}
                  className={d.id === displayOnMapID ? style.ActiveMapButton : style.MapButton}
                  onClick={() => showItOnMap(d.id)}
                >
                  <span className={style.FilterMapButtonImage} />
                </Button>
              </span>
            </div>
            {
              d.hasOwnProperty('genre') ?
                <div className={style.Genre}>
                  <span>{d.genre.join('/')}</span>
                </div> :
                ''
            }
            <div>
              <span className={style.Label}>Date(s) of creation:</span> {renderDates(d.date_of_creation_start, d.date_of_creation_end)}
            </div>
            <div>
              {d.hasOwnProperty('language') ?
                <React.Fragment>
                  <span className={style.Label}>Language:</span> {d.language.join(', ')}
                </React.Fragment> : ''}
            </div>
            <div>
              <span className={style.Label}>Type:</span> {d.type}
            </div>
            <div className={style.CatalogLink}>
              <span className={style.Label}>Part of:</span> <a href={d.collection_url} target={'_new'}>{d.collection}</a>
            </div>
            <div>
              <React.Fragment>
                {renderSearchHit(d)}
              </React.Fragment>
            </div>
          </div>
        </Col>
      </Row>
    ))
  };

  const loading = () => (
    <div className={style.Loading}>
      <Spin size={'large'}/>
    </div>
  );

  return (
    <React.Fragment>
      <Row>
        <Col xs={24}>
          <div className={style.ResultPageListMobileWrapper}>
            {data ? results() : loading()}
          </div>
        </Col>
      </Row>
      <div className={style.PaginationWrapperMobile}>
        <ResultPaginationMobile
          count={dataLength}
          limit={limit}
          offset={offset}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  )
};

export default ResultPageListMobile;
