import React from "react";
import {Card, Col, Row} from "antd";
import style from "./CollectionResults.module.css"
import ResultPagination from "../Search/ResultPagination/ResultPagination";
import Image from "next/dist/client/image";
import { RightOutlined } from '@ant-design/icons';

const { Meta } = Card;

const CollectionResults = ({data, limit, offset, onPageChange}) => {

  const renderThumbnail = (d) => {
    if (d.thumbnail) {
      return (
        <Image
          layout={'fill'}
          objectFit={'cover'}
          objectPosition={'center center'}
          src={d.thumbnail}/>
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
    return data['results'].map((d, idx) => (
      <Row style={{marginBottom: '40px'}} key={idx}>
        <Col xs={24} md={6}>
          {renderThumbnail(d)}
        </Col>
        <Col xs={24} md={18}>
          <div className={style.ResultItemData}>
            <div className={style.Title}>
              {d.title}
            </div>
            <div style={{paddingTop: '20px'}}>
              {d.description}
            </div>
            <div className={style.Date}>
              {d.year_start}{d.year_end !== d.year_start && d.year_end !== null ? ` - ${d.year_end}` : ''} • {d.archival_reference_code} • {d.record_count === 0 ? 'No items' : `${d.record_count} items`}
            </div>
            <div className={style.CatalogLink}>
              <a href={d.catalog_url} target={'_new'}>See at OSA Catalog <RightOutlined /></a>
            </div>
          </div>
        </Col>
      </Row>
    ));
  };

  return (
    <div className={style.Results}>
      {data ?
      <React.Fragment>
        {results()}
        <ResultPagination
          count={data.count}
          limit={limit}
          offset={offset}
          onPageChange={onPageChange}
          recordsPerPage={false}
        />
      </React.Fragment> : ''}
    </div>
  )
};

export default CollectionResults;
