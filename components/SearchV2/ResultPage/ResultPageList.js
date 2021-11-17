import React, {useState, useEffect} from "react";
import {Badge, Button, Carousel, Col, Popover, Row, Spin, Tooltip} from "antd";
import style from "./ResultPageList.module.css"
import Image from "next/image";
import Highlight from "../Highlight/Highlight";
import ResultPagination from "../ResultPagination/ResultPagination";
import {useRouter} from "next/router";
import { EnvironmentOutlined } from '@ant-design/icons';

const ResultPageList = ({data, displayOnMapID, onClickDisplayOnMap, urlParams}) => {
  const router = useRouter();

  const [dataLength, setDataLength] = useState(0);

  const {query, limit, offset, ...selectedFacets} = urlParams;

  useEffect(() => {
    data && setDataLength(data.count);
  }, [data]);

  const handlePageChange = (page, pageSize) => {
    onClickDisplayOnMap(0);
    router.push({
      pathname: '/search-v2',
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

  const renderThumbnail = (d) => {
    if (d.hasOwnProperty('thumbnails')) {
      if (d.length > 1) {
        return (
          <a href={`/record/${d.id}`}>
            <Image
              layout={'fill'}
              objectFit={'none'}
              objectPosition={'top left'}
              src={d.thumbnails[0]}/>
          </a>
        )
      } else {
        return (
          <a key={d.id} href={`/record/${d.id}`}>
            <Carousel dots={false} effect={'fade'} autoplay>
              {d.thumbnails.map(thmb =>
                <div key={thmb}>
                  <Image
                    width={180}
                    height={150}
                    objectFit={'contain'}
                    objectPosition={'center center'}
                    src={thmb}/>
                </div>
              )}
            </Carousel>
          </a>
        )
      }
    } else {
      return (
        <a href={`/record/${d.id}`}>
          <Image
            layout={'fill'}
            objectFit={'none'}
            objectPosition={'top left'}
            src='/images/recordEmpty.png'/>
        </a>
      )
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
    return `${d.title_original}`
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
      <Row style={{marginBottom: '40px'}} key={idx}>
        <Col xs={4}>
          {renderThumbnail(d)}
        </Col>
        <Col xs={20}>
          <div className={style.ResultItemData}>
            <div className={style.Title}>
              <a href={`/record/${d.id}`}>
                {renderTitle(d)}
              </a>
              <span style={{float: 'right', marginRight: '20px'}}>
                <Button
                  shape="circle"
                  icon={<EnvironmentOutlined style={{fontSize: '22px', fontWeight: 'bold'}} />}
                  size={'large'}
                  className={d.id === displayOnMapID ? style.ActiveMapButton : style.MapButton}
                  onClick={() => showItOnMap(d.id)}
                />
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
      <div className={style.ResultsToScroll}>
        <Row>
          <Col xs={24}>
            <div style={{paddingTop: '10px', paddingLeft: '20px'}}>
              {data ? results() : loading()}
            </div>
          </Col>
        </Row>
      </div>
      <ResultPagination count={dataLength} limit={limit} offset={offset} onPageChange={handlePageChange}/>
    </React.Fragment>
  )
};

export default ResultPageList;
