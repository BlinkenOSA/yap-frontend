import Popup from "reactjs-popup";
import style from "./MobileMenu.module.css";
import Link from "next/link";
import React from "react";
import {Col, Layout, Row} from "antd";
import Image from "next/image";

const {Header} = Layout;

const MobileMenu = () => {
  const contentStyle = {
    width: "80%",
    border: "none"
  };

  return (
    <Header className={style.Header}>
      <Row align="middle">
        <Col flex={2}>
          <div className={style.Logo}>
            <a href={'/'}>
              <Image width={75} height={50} src='/images/yap-logo.svg'/>
            </a>
          </div>
        </Col>
        <Col flex={22}>
          <Popup
            modal
            overlayStyle={{ background: "rgba(249,249,249,0.95)", zIndex: 999 }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => (
              <div className={open ? `${style.BurgerMenu} ${style.Open}` : style.BurgerMenu}>
                <div className={style.Bar1} key="b1"/>
                <div className={style.Bar2} key="b2"/>
                <div className={style.Bar3} key="b3"/>
              </div>
            )}
          >
            {close => (
              <div className={style.PopupMenu}>
                <ul>
                  <li onClick={close}><Link href={'/search'}>Search</Link></li>
                  <li onClick={close}><Link href={'/timeline'}>Timeline</Link></li>
                  <li onClick={close}><Link href={'/collections'}>Collections</Link></li>
                  <li onClick={close}><Link href={'/about'}>About</Link></li>
                </ul>
              </div>
            )}
          </Popup>
        </Col>
      </Row>
    </Header>
  )
};

export default MobileMenu;
