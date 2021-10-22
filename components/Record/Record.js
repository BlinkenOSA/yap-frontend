import React from "react";
import {Carousel, Col, Row} from "antd";
import style from './Record.module.css';
import { SoundOutlined} from '@ant-design/icons';
import VideoPlayer from "./players/VideoPlayer";
import PDFViewer from "./players/PDFViewer";
import Link from "next/link";


const Record = ({data}) => {
  const renderMedia = () => {
    const {thumbnails, media_files} = data;

    const renderMediaButton = (media, index) => {
      switch (media.mimetype) {
        case 'video/mp4':
          return (
            <Col key={index} xs={24} style={{textAlign: 'center', fontSize: '20px'}}>
              <VideoPlayer media={media} thumbnails={thumbnails} />
            </Col>
          );
        case 'application/pdf':
          return (
            <Col key={index} xs={24} style={{textAlign: 'center', fontSize: '20px'}}>
              <PDFViewer media={media} thumbnails={thumbnails} />
            </Col>
          );
        case 'audio/mp3':
          return (
            <Col key={index} xs={24} style={{textAlign: 'center', fontSize: '20px'}}>
              <span className={style.MediaPlayIcon}>
                <SoundOutlined />
              </span>
            </Col>
          );
      }
    };

    if (media_files.length > 0) {
      return (
        <Row justify="space-around" align="middle" className={style.MediaContainer} gutter={[24, 24]}>
          {renderMediaButton(media_files[0], 0)}
        </Row>
      )
    } else {
      return '';
    }
  };

  const renderMultiValuedField = (field, label, subField='', paramField='', facet=false) => {
    const renderValue = (value) => {
      if (facet) {
        const f = {};
        f[paramField] = subField === '' ? value : value[subField];
        return <Link
          href={{
            pathname: '/search',
            query: f,
          }}>{subField === '' ? value : value[subField]}</Link>
      } else {
        return subField === '' ? value : value[subField]
      }
    };

    if (data.hasOwnProperty(field)) {
      if (data[field].length > 0) {
        return (
          <dl>
            <dt>{label}</dt>
            <dd>
              {data[field].map((d, idx) => {
                if (data[field].length === idx + 1) {
                  return renderValue(d)
                } else {
                  return (
                    <span>
                      {renderValue(d)}<span className={style.Pipe}>|</span>
                    </span>
                  )
                }
              })}
            </dd>
          </dl>
        )
      }
    }
  };

  return (
    <div className={style.RecordWrap}>
      <Row>
        <Col xs={2}/>
        <Col xs={20}>
          <h3>{data.title_original}</h3>

          {renderMedia()}

          <dl>
            <dt>Creation Date</dt>
            <dd>
              {data.date_of_creation_start} {data.date_of_creation_end ? `- ${data.date_of_creation_end}` : ''}
            </dd>
          </dl>
          {renderMultiValuedField('language', 'Language', 'language')}
          {renderMultiValuedField('type', 'Type', '', 'type', true)}
          <dl>
            <dt>Description</dt>
            <dd>
              <div dangerouslySetInnerHTML={{
                __html: `${data.description.join('<span style="margin: 0 5px; color: #CCC">|</span>')}`
              }}/>
            </dd>
          </dl>

          <dl>
            <dt>Temporal Coverage</dt>
            <dd>
              {data.temporal_coverage_start} {data.temporal_coverage_start ? `- ${data.temporal_coverage_end}` : ''}
            </dd>
          </dl>
          {renderMultiValuedField('city', 'Place', 'city', 'city', true)}
          {renderMultiValuedField('subject', 'Keyword', '', 'subject', true)}
          {renderMultiValuedField('subject_people', 'People', '', 'subject_person', true)}
          {renderMultiValuedField('genre', 'Genre', '', 'genre', true)}

          <dl>
            <dt>Extent</dt>
            <dd>{data.extent}</dd>
          </dl>

          {renderMultiValuedField('creator', 'Creator')}
          {renderMultiValuedField('collector', 'Collector')}

          <dl>
            <dt>Call Number</dt>
            <dd>{data.archival_reference_number}</dd>
          </dl>

          <dl>
            <dt>Part of collection</dt>
            <dd>
              <a href={data.collection.catalog_url}>
                {data.collection.title} ({data.collection.archival_reference_code})
              </a>
            </dd>
          </dl>

          <dl>
            <dt>Description Level</dt>
            <dd>
              {data.description_level === 'F' ? 'Folder' : 'Item'}
            </dd>
          </dl>
        </Col>
        <Col xs={2}/>
      </Row>
    </div>
  )
};

export default Record;
