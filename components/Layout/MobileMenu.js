import Popup from "reactjs-popup";
import style from "./MobileMenu.module.css";
import Link from "next/link";
import React from "react";
import {Col, Layout, Row} from "antd";
import Image from "next/image";
import {useRouter} from "next/router";

const {Header} = Layout;

const MobileMenu = () => {
  const router = useRouter();

  const contentStyle = {
    width: "80%",
    border: "none"
  };

  return (
    <Header className={style.Header}>
      <Row align="middle">
        <Col flex={20}>
          <div className={style.Logo}>
            <a href={'/'}>
              <Image width={75} height={50} src='/images/yap-logo.svg'/>
            </a>
          </div>
        </Col>
        <Col flex={4}>
          <Popup
            modal
            overlayStyle={{ background: "rgba(249,249,249,0.95)", zIndex: 9998 }}
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
                  <li className={`${router.pathname === "/search" ? style.MenuItemActive : style.MenuItem}`} onClick={close}>
                    <Link href={'/search'}>Search</Link>
                  </li>
                  <li className={`${router.pathname === "/about" ? style.MenuItemActive : style.MenuItem}`} onClick={close}>
                    <Link href={'/about'}>About</Link>
                  </li>
                  <li className={`${router.pathname === "/collections" ? style.MenuItemActive : style.MenuItem}`} onClick={close}>
                    <Link href={'/collections'}>Collection Overview</Link>
                  </li>
                </ul>
                <div className={style.OSALogo}>
                  <a href={'https://www.osaarchivum.org'} target={'_blank'}>
                    <Image width={123} height={40} src='/images/osa-logo.png'/>
                  </a>
                </div>
              </div>
            )}
          </Popup>
        </Col>
      </Row>
    </Header>
  )
};

export default MobileMenu;
