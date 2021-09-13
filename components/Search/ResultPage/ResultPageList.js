import React from "react";
import {Carousel, Col, Row} from "antd";
import style from "./ResultPageList.module.css"
import Image from "next/image";
import Highlight from "../Highlight/Highlight";

const ResultPageList = ({data, highlights}) => {
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
    if (highlights.hasOwnProperty(d.id)) {
      const h = highlights[d.id];
      return (<Highlight data={h} id={d.id}/>);

    }
  };

  const results = data.map((d, idx) => (
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
  ));

  return (
    <Row>
      <Col xs={24}>
        {results}
      </Col>
    </Row>
  )
};

export default ResultPageList;
