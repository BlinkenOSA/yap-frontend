import React, {useState} from "react";
import style from "./CollectionResultsMasonry.module.css"
import Image from "next/dist/client/image";
import {Col, Modal, Row} from "antd";
import { RightOutlined } from '@ant-design/icons';

const paragraph1 = "The Yugoslavia Archive Project deals with the archiving of records from the civilian, economic and political processes of the countries of former Yugoslavia during and after the disintegration of the country. The project started with systematic data capturing in 2015. Its aim is to provide meaningful descriptive metadata on the OSA Yugoslav Collection, formed in 2013, containing around 25.000 records from the post WWII history of Yugoslavia."
const paragraph2 = "The processing of the OSA Yugoslav Collection is an ongoing project. This online platform contains data of all the materials pertaining to the OSA Yugoslav Collection, the ones with already enriched descriptive metadata as well as the ones to be processed in future, for which currently only basic data are available."
const collectionTexts = [paragraph1, paragraph2];

const CollectionResultsMasonryWithText = ({data, isMobile=false}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState({});

  const renderThumbnail = (d) => {
    return (
      <div
        className={style.HoverBox}
        style={d.thumbnail ? {background: `url(${d.thumbnail}) center center no-repeat`, backgroundSize: 'cover'} : undefined}
        onClick={() => {
          setSelectedRecord(d);
          setModalOpen(true);
        }}
      >
        <div className={`${style.HoverBoxTopLayer} ${style.HoverBoxEffect}`}>
          <div className={style.HoverBoxText}>
            <div className={style.Title}>
              {d.title}, {d.year_start}{d.year_end !== d.year_start && d.year_end !== null ? ` - ${d.year_end}` : ''}
            </div>
            <div className={style.ItemCount}>
              {d.archival_reference_code}<br/>{d.record_count === 0 ? 'No items' : `${d.record_count} items`}
            </div>
          </div>
        </div>
      </div>
    )
  };

  const renderModal = () => {
    if (selectedRecord.hasOwnProperty('id')) {
      return (
        <Modal
          centered
          visible={modalOpen}
          onCancel={() => setModalOpen(false)}
          wrapClassName={style.ModalWrap}
          footer={false}
          width={isMobile ? '95%' : '60%'}
          destroyOnClose={true}
          zIndex={9999}
        >
          <Row>
            <Col xs={isMobile ? 24 : 12} style={isMobile ? {height: '200px'} : undefined}>
              <Image
                layout={'fill'}
                objectFit={'cover'}
                src={selectedRecord['thumbnail']}
              />
            </Col>
            <Col xs={isMobile ? 24 : 12}>
              <div className={isMobile ? style.PopupContentWrapMobile : style.PopupContentWrap} >
                <div className={style.Title}>
                  {selectedRecord.title}, {selectedRecord.year_start}{selectedRecord.year_end !== selectedRecord.year_start && selectedRecord.year_end !== null ? ` - ${selectedRecord.year_end}` : ''}
                </div>
                <div style={{paddingTop: '30px'}}>
                  {selectedRecord.description}
                </div>
                <div className={style.Date}>
                    {selectedRecord.record_count === 0 ? 'No items' : `${selectedRecord.record_count} items`}
                </div>
                <div className={style.CatalogLink}>
                  <a href={selectedRecord.catalog_url} target={'_new'}>Blinken OSA catalog: {selectedRecord.archival_reference_code} <RightOutlined /></a>
                </div>
              </div>
            </Col>
          </Row>
        </Modal>
      )
    } else {
      return '';
    }
  };

  const results = () => {
    const renderSmall = (d, idx) => (
      <Col xs={isMobile ? 8 : 4} key={idx}>
        <div className={`${style.ImageWrapperSmall}`}>
          {renderThumbnail(d)}
        </div>
      </Col>
    );

    const renderLarge = (d, idx) => (
      <Col xs={isMobile ? 12 : 6} key={idx}>
        <div className={`${style.ImageWrapperLarge}`}>
          {renderThumbnail(d)}
        </div>
      </Col>
      );

    return data.map((d, idx) => {
      if (idx < 2) {
        return renderLarge(d, idx)
      }

      if (idx === 2) {
        return (
          <React.Fragment>
            <Col xs={isMobile ? 24 : 12} className={style.TextWrap}>
              <div className={style.Text}>{paragraph1}</div>
            </Col>
            { isMobile ? '' :
              <Col xs={12} className={style.TextWrap}>
                <div className={style.Text}>{paragraph2}</div>
              </Col> }
            {renderSmall(d)}
          </React.Fragment>
        )
      }

      if (idx === 4) {
        return (
          <React.Fragment>
            {renderSmall(d)}
            { isMobile ?
              <Col xs={24} className={style.TextWrap}>
                <div className={style.Text}>{paragraph2}</div>
              </Col> : '' }
          </React.Fragment>
        )
      }

      if (isMobile ? idx % 5 < 2 : (idx + 5) % 10 < 4) {
        return renderLarge(d, idx)
      }
      if (isMobile ? idx % 5 >= 2 : (idx + 5) % 10 >= 4) {
        return renderSmall(d, idx)
      }
    });
  };

  return (
    <div>
      {data ?
      <React.Fragment>
        <Row className={style.Container} style={{marginTop: '50px'}}>
          {results()}
        </Row>
        {renderModal()}
      </React.Fragment> : ''}
    </div>
  )
};

export default CollectionResultsMasonryWithText;
