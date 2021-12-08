import React from "react";
import {Col, Layout} from "antd";
import Link from 'next/link'
import style from "./Layout.module.css";
import {Media} from "../Media/Media";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const {Content, Footer} = Layout;

export default function AppLayout({ withBackground = false, children }) {
  return (
    <Layout className={style.Layout}>
      <Media lessThan="lg"><MobileMenu/></Media>
      <Media greaterThanOrEqual="lg"><DesktopMenu/></Media>
      <Content
        style={withBackground ? {background: 'url(/images/homepage-map.png) no-repeat center top scroll'} : undefined}
        className={style.Content}
      >
          {children}
      </Content>
      <Footer className={style.Footer}>
        <Col flex={'25%'}> </Col>
        <Col flex={'50%'} className={style.FooterContact}>
          <Link href={'/contact'}><a className={style.FooterLink}>Contact</a></Link>
          <span style={{margin: '0 10px'}}>|</span>
          <Link href={'/terms'} className={style.FooterLink}><a className={style.FooterLink}>Terms</a></Link>
        </Col>
        <Col flex={'25%'}> </Col>
      </Footer>
    </Layout>
  )
}
