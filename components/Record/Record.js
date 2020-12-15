import React from "react";
import {Carousel, Col, Row} from "antd";
import style from './Record.module.css';
import { AudioOutlined} from '@ant-design/icons';
import VideoPlayer from "./players/VideoPlayer";
import PDFViewer from "./players/PDFViewer";
import Image from "next/dist/client/image";

const Record = ({data}) => {
  const renderThumbnails = () => {
    return (
      <div style={{textAlign: 'center', marginBottom: '20px'}}>
      <Carousel effect={'fade'} dots={true} arrows={true}>
        {data.thumbnails.map(thmb =>
          <div key={thmb}>
            <Image
              width={400}
              height={300}
              objectFit={'contain'}
              objectPosition={'center center'}
              src={thmb}/>
          </div>
        )}
      </Carousel>
      </div>
    )
  };

  const renderMedia = () => {
    const {media_files} = data;

    const renderMediaButton = (media, index) => {
      switch (media.mimetype) {
        case 'video/mp4':
          return (
            <Col key={index} xs={24 / media_files.length} style={{textAlign: 'center', fontSize: '20px'}}>
              <VideoPlayer media={media} />
            </Col>
          );
        case 'application/pdf':
          return (
            <Col key={index} xs={24 / media_files.length} style={{textAlign: 'center', fontSize: '20px'}}>
              <PDFViewer media={media} />
            </Col>
          );
        case 'audio/mp3':
          return (
            <Col key={index} xs={24 / media_files.length} style={{textAlign: 'center', fontSize: '20px'}}>
              <span className={style.MediaPlayIcon}>
                <AudioOutlined />
              </span>
            </Col>
          );
      }
    };

    if (media_files.length > 0) {
      return (
        <Row justify="space-around" align="middle" className={style.MediaContainer} gutter={[24, 24]}>
          {media_files.map((media, idx) => renderMediaButton(media, idx))}
        </Row>
      )
    } else {
      return <div style={{height: '10px'}}/>
    }
  };

  return (
    <div className={style.RecordWrap}>
      <Row>
        <Col xs={2}/>
        <Col xs={20}>
          <h3>{data.title_original}</h3>

          {renderThumbnails()}

          <dl>
            <dt>Archival Rerefence Number</dt>
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
            <dt>Creation Date</dt>
            <dd>
              {data.date_of_creation_start} {data.date_of_creation_end ? `- ${data.date_of_creation_end}` : ''}
            </dd>
          </dl>

          {renderMedia()}

          <dl>
            <dt>Description</dt>
            <dd>
              {data.description.join('.|')}
            </dd>
          </dl>

          <dl>
            <dt>Temporal Coverage</dt>
            <dd>
              {data.temporal_coverage_start} {data.temporal_coverage_start ? `- ${data.temporal_coverage_end}` : ''}
            </dd>
          </dl>
          <dl>
            <dt>People as subjects</dt>
            <dd>
              {data.subject_people.map(person =>
                <React.Fragment>{person}<br/></React.Fragment>
              )}
            </dd>
          </dl>
          <dl>
            <dt>City</dt>
            <dd>
              {data.city.map(city =>
                <React.Fragment>{city['city']}<br/></React.Fragment>
              )}
            </dd>
          </dl>
          <dl>
            <dt>Language</dt>
            <dd>
              {data.language.map(lang => lang['language']).join(', ')}
            </dd>
          </dl>
          <dl>
            <dt>Subject</dt>
            <dd>
              {data.subject.join(', ')}
            </dd>
          </dl>
          <dl>
            <dt>Description Level</dt>
            <dd>
              {data.description_level === 'F' ? 'Folder' : 'Item'}
            </dd>
          </dl>
          <dl>
            <dt>Collector</dt>
            <dd>
              {data.collector.join(', ')}
            </dd>
          </dl>
          <dl>
            <dt>Creator</dt>
            <dd>
              {data.creator.join(', ')}
            </dd>
          </dl>
          <dl>
            <dt>Type</dt>
            <dd>
              {data.type.join(', ')}
            </dd>
          </dl>
          <dl>
            <dt>Genre</dt>
            <dd>
              {data.genre.join(', ')}
            </dd>
          </dl>
        </Col>
        <Col xs={2}/>
      </Row>
    </div>
  )
};

export default Record;
