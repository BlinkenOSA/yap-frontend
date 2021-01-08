import React, {useState} from "react";
import style from "./Players.module.css";
import {Modal, Tooltip} from "antd";
import ReactPlayer from "react-player";
import {VideoCameraOutlined} from '@ant-design/icons';

const VideoPlayer = ({key, media}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <React.Fragment>
      <Tooltip title="Watch!">
        <span
          className={style.MediaPlayIcon}
          onClick={() => setModalOpen(true)}
        >
          <VideoCameraOutlined />
        </span>
      </Tooltip>
      <Modal
        centered
        footer={false}
        visible={modalOpen}
        onCancel={() => setModalOpen(false)}
        width={750}
        destroyOnClose={true}
        zIndex={9999}
      >
        <ReactPlayer
          controls={true}
          width='100%'
          height='100%'
          url={media.file}
        />
      </Modal>
    </React.Fragment>
  )
};

export default VideoPlayer;
