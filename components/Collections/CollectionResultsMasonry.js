import React, {useState} from "react";
import style from "./CollectionResultsMasonry.module.css"
import Image from "next/dist/client/image";
import {Col, Modal, Row} from "antd";

const CollectionResultsMasonry = ({data, isMobile=false}) => {
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
                  <a href={selectedRecord.catalog_url} target={'_new'}>Blinken OSA catalog: {selectedRecord.archival_reference_code}</a>
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
    return data.map((d, idx) => {
      if (isMobile ? (idx < 2 || idx % 5 < 2) : (idx < 4 || idx % 10 < 4)) {
        return (
          <Col xs={isMobile ? 12 : 6} key={idx}>
            <div className={`${style.ImageWrapperLarge}`}>
              {renderThumbnail(d)}
            </div>
          </Col>
        )
      }
      if (isMobile ? (2 <= idx && idx < 5) || idx % 5 >= 2 : (4 <= idx && idx < 10) || idx % 10 >= 4) {
        return (
          <Col xs={isMobile ? 8 : 4} key={idx}>
            <div className={`${style.ImageWrapperSmall}`}>
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
        <Row className={style.Container}>
          {results()}
        </Row>
        {renderModal()}
      </React.Fragment> : ''}
    </div>
  )
};

export default CollectionResultsMasonry;
