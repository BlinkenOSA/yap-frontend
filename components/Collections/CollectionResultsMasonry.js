import React, {useEffect, useState} from "react";
import style from "./CollectionResults.module.css"
import Image from "next/dist/client/image";
import {Col, Row} from "antd";

const CollectionResultsMasonry = ({data}) => {
  const renderThumbnail = (d) => {
    if (d.thumbnail) {
      return (
          <img src={d.thumbnail} className={style.Image}/>
      )
    } else {
      return (
        <Image
          layout={'fill'}
          objectFit={'none'}
          objectPosition={'top left'}
          src='/images/recordEmpty.png'/>
      )
    }
  };

  const results = () => {
    return data['results'].map((d, idx) => {
      if (idx < 6 || (14 <= idx && idx < 20) || (28 <= idx && idx < 34) || (42 <= idx && idx < 48)) {
        return (
          <Col xs={4} sm={4}>
            <div className={`${style.ImageWrapper} ${style.ImageWrapperLarge}`}>
              {renderThumbnail(d)}
            </div>
          </Col>
        )
      }
      if ((6 <= idx && idx < 14) || (20 <= idx && idx < 28) || (34 <= idx && idx < 42)) {
        return (
          <Col xs={3} sm={3}>
            <div className={`${style.ImageWrapper} ${style.ImageWrapperSmall}`}>
              {renderThumbnail(d)}
            </div>
          </Col>
        )
      }
    });
  };

  return (
    <div>
      {data ?
      <React.Fragment>
        <Row gutter={[5, 5]}>
          {results()}
        </Row>
      </React.Fragment> : ''}
    </div>
  )
};

export default CollectionResultsMasonry;
