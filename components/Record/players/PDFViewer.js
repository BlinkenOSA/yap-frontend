import React, {useState} from "react";
import style from "./Players.module.css";
import {Modal, Tooltip} from "antd";
import {FilePdfOutlined} from '@ant-design/icons';

const PDFViewer = ({media}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Tooltip title="Read!">
        <span
          className={style.MediaPlayIcon}
          onClick={() => setModalOpen(true)}
        >
          <FilePdfOutlined />
        </span>
      </Tooltip>
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
