import {Col, Layout, Menu, Row} from "antd";
import style from "./DesktopMenu.module.css";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const {Header} = Layout;

const DesktopMenu = () => {
  return (
    <Header className={style.Header}>
      <Row align="middle">
        <Col flex={2}>
          <div className={style.Logo}>
            <a href={'/'}>
              <Image width={100} height={70} src='/images/yap-logo.svg'/>
            </a>
          </div>
        </Col>
        <Col flex={22}>
          <Menu theme="light" mode="horizontal" className={style.Menu}>
            <Menu.Item className={style.MenuItem} key="search">
              Search
            </Menu.Item>
            <Menu.Item className={style.MenuItem} key="timeline">
              <Link href={'/timeline'}>Timeline</Link>
            </Menu.Item>
            <Menu.Item className={style.MenuItem} key="collections">Collections</Menu.Item>
            <Menu.Item className={style.MenuItem} key="about">
              <Link href={'/about'}>About</Link>
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
};

export default DesktopMenu;
