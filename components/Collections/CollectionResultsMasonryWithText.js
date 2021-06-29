import React, {useState} from "react";
import style from "./CollectionResultsMasonryWithText.module.css"
import Image from "next/dist/client/image";
import {Col, Modal, Row} from "antd";
import QueueAnim from 'rc-queue-anim';

const paragraph1 =
  <QueueAnim delay={300}>
    <div key={'p1'}>
      The Yugoslavia Archive Project (YAP) contains over 30,000 records on the post WWII history of Yugoslavia from
      the archival collections of Blinken OSA. They include text, photo, moving image and sound documents in analog and
      digital format. Available in over ten languages, records are described either individually (items) or in smaller
      units (folders or carriers) with descriptive metadata of various levels of granularity.
    </div>
  </QueueAnim>;
const paragraph2 =
  <QueueAnim delay={600}>
    <div key={'p2'}>
      The YAP collections were donated by international human rights, media and philanthropic organizations,
      such as Physicians for Human Rights, the United Nations Expert Committee on Investigating War Crimes in the former
      Yugoslavia, the International Helsinki Federation for Human Rights, the American Refugee Committee, Radio Free
      Europe/Radio Liberty, the International Monitor Institute and the Open Society Foundations.
    </div>
  </QueueAnim>;
const paragraph3 =
  <QueueAnim delay={900}>
    <div key={'p3'}>
      Some of the records come from local NGOs like the Humanitarian Law Center in Belgrade or private donors,
      including the journalist David Rohde, the political scientist Lara Nettelfield and the legal scholar
      Tibor Várady. Important parts of the collections, such as television monitoring materials from Bosnia and
      Herzegovina, Croatia and Serbia were commissioned by Blinken OSA. A full list of all archival record groups is
      available for download here.
    </div>
  </QueueAnim>;

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
          footer={false}
          width={isMobile ? '95%' : '60%'}
          destroyOnClose={true}
          zIndex={9999}
        >
          <Row>
            <Col xs={isMobile ? 24 : 12} style={isMobile ? {height: '200px'} : undefined}>
              <Image
                layout={'fill'}
                objectFit={'contain'}
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
              <div className={style.Text}>
                <div className={style.Title}>Explore the collections</div>
                {paragraph1}
              </div>
            </Col>
            { isMobile ? '' :
              <Col xs={12} className={style.TextWrap}>
                <div className={style.Text}>{paragraph2}</div>
              </Col> }
            {renderSmall(d)}
          </React.Fragment>
        )
      }

      if (idx === 3) {
        return renderSmall(d, idx)
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

      if (idx > 4 && idx <7) {
        return renderLarge(d, idx)
      }

      if (idx === 7) {
        return (
          <React.Fragment>
            <Col xs={isMobile ? 24 : 12} className={style.TextWrap}>
              <div className={style.Text}>
                {paragraph3}
              </div>
            </Col>
            {renderSmall(d)}
          </React.Fragment>
        )
      }

      if (idx > 7) {
        if (isMobile ? idx % 5 < 2 : (idx + 3) % 10 > 5) {
          return renderLarge(d, idx)
        }
        if (isMobile ? idx % 5 >= 2 : (idx + 3) % 10 <= 5) {
          return renderSmall(d, idx)
        }
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
