import {Col, Layout, Menu, Row} from "antd";
import style from "./DesktopMenu.module.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

const {Header} = Layout;

const DesktopMenu = () => {
  const router = useRouter();

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
        <Col flex={20}>
          <Menu theme="light" mode="horizontal" className={style.Menu}>
            <Menu.Item className={`${router.pathname === "/search" ? style.MenuItemActive : style.MenuItem}`} key="search">
              <Link href={'/search'}>Search</Link>
            </Menu.Item>
            <Menu.Item className={`${router.pathname === "/about" ? style.MenuItemActive : style.MenuItem}`} key="about">
              <Link href={'/about'}>About</Link>
            </Menu.Item>
            <Menu.Item className={`${router.pathname === "/collections" ? style.MenuItemActive : style.MenuItem}`} key="collections">
              <Link href={'/collections'}>Collection Overview</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col flex={2}>
          <div className={style.OSALogo}>
            <a href={'https://www.osaarchivum.org'} target={'_blank'}>
              <Image width={123} height={40} src='/images/osa-logo.png'/>
            </a>
          </div>
        </Col>
      </Row>
    </Header>
  )
};

export default DesktopMenu;
