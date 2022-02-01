import React, {useState} from "react";
import style from "./Players.module.css";
import {Carousel, Modal, Tooltip} from "antd";
import {FilePdfOutlined} from '@ant-design/icons';
import Image from "next/dist/client/image";

const PDFViewer = ({media, thumbnails}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const renderThumbnails = () => {
    return (
      <div className={style.Player}>
        <Carousel effect={'fade'} dots={false} autoplay>
          {thumbnails.map(thmb =>
            <div key={thmb}>
              <span className={style.PlayIcon} onClick={() => setModalOpen(true)}>
                <FilePdfOutlined />
              </span>
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

  return (
    <React.Fragment>
      {renderThumbnails()}
      <Modal
        centered
        footer={false}
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={800}
        destroyOnClose={true}
        zIndex={9999}
      >
        <object
          data={media.file.replace('http://', 'https://')}
          type="application/pdf"
          width="100%"
          height="600px"
        />
      </Modal>
    </React.Fragment>
  )
};

export default PDFViewer;
