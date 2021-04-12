import React, {useState} from "react";
import {Carousel, Modal, Tooltip} from "antd";
import ReactPlayer from "react-player";
import Image from "next/dist/client/image";
import { PlayCircleFilled } from '@ant-design/icons';
import style from "./Players.module.css";

const VideoPlayer = ({key, media, thumbnails}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const renderThumbnails = () => {
    return (
      <div className={style.Player}>
        <Carousel effect={'fade'} dots={false} autoplay>
          {thumbnails.map(thmb =>
            <div key={thmb}>
              <span className={style.PlayIcon} onClick={() => setModalOpen(true)}>
                <PlayCircleFilled />
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
