import React from "react";
import {Col, Row} from "antd";
import style from "./ResultPageList.module.css"
import Image from "next/image";

const ResultPageList = ({data}) => {
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

    } else {
      return (
        <a href={`/record/${d.id}`}>
          <Image
            layout={'fill'}
            objectFit={'none'}
            objectPosition={'right top'}
            src='/images/recordEmpty.png'/>
        </a>
      )
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
              {d.title_original} {renderDates(d.date_of_creation_start, d.date_of_creation_end)}
            </a>
          </div>
          <div>
            <span className={style.Label}>Type:</span> {d.type}
          </div>
          <div>
            <span className={style.Label}>Call Number:</span> {d.archival_reference_number}
          </div>
          <div>
            {d.hasOwnProperty('genre') ?
              <React.Fragment>
                <span className={style.Label}>Genre:</span> {d.genre.join(', ')}
              </React.Fragment> : ''}
          </div>
          <div>
            {d.hasOwnProperty('city') ?
              <React.Fragment>
                <span className={style.Label}>City:</span> {d.city.join(', ')}
              </React.Fragment> : ''}
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
