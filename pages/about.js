import React from "react";
import AppLayout from "../components/Layout/Layout";
import {Col, Row, Typography} from "antd";
import ReactPlayer from 'react-player/youtube'

import style from "../styles/global.module.css";

const { Text } = Typography;

const About = () => {
  return (
    <AppLayout withBackground={true}>
      <div className="container">
        <Row>
          <h3 className={style.Title}>About the Yugoslavia Archive Project</h3>
        </Row>
        <Row gutter={[24, 48]}>
          <Col lg={12}>
            <Text className={style.Text}>
              The Yugoslavia Archive Project deals with the archiving of records from the civilian,
              economic and political processes of the countries of former Yugoslavia during and after the
              disintegration of the country. The project started with systematic data capturing in 2015.
              Its aim is to provide meaningful descriptive metadata on the OSA Yugoslav Collection, formed in 2013,
              containing around 25.000 records from the post WWII history of Yugoslavia.<br/><br/>
              The processing of the OSA Yugoslav Collection is an ongoing project. This online platform contains
              data of all the materials pertaining to the OSA Yugoslav Collection, the ones with already enriched
              descriptive metadata as well as the ones to be processed in future, for which currently only
              basic data are available.
            </Text>
          </Col>
          <Col lg={12} style={{width: '100%', minHeight: '300px'}}>
              <ReactPlayer
                controls={true}
                width='100%'
                height='100%'
                url='https://www.youtube.com/watch?v=Bk7f4mGl6e8'
              />
          </Col>
        </Row>
        <Row>
          <h3 className={style.Title}>Guide</h3>
        </Row>
        <Row gutter={[24, 48]}>
          <Col md={12}>
            <Text className={style.Text}>
              The Yugoslavia Archive Project deals with the archiving of records from the civilian,
              economic and political processes of the countries of former Yugoslavia during and after the
              disintegration of the country. The project started with systematic data capturing in 2015.
              Its aim is to provide meaningful descriptive metadata on the OSA Yugoslav Collection, formed in 2013,
              containing around 25.000 records from the post WWII history of Yugoslavia.
            </Text>
          </Col>
          <Col md={12}>
            <Text className={style.Text}>
              The processing of the OSA Yugoslav Collection is an ongoing project. This online platform contains
              data of all the materials pertaining to the OSA Yugoslav Collection, the ones with already enriched
              descriptive metadata as well as the ones to be processed in future, for which currently only
              basic data are available.
            </Text>
          </Col>
        </Row>
        <Row>
          <h3 className={style.Title}>Contributors</h3>
        </Row>
        <Row gutter={[24, 48]}>
          <Col md={12}>
            <Text className={style.Text}>
              <dl>
                <dt>Contributors</dt>
                <dd>First Name, Last Name</dd>
              </dl>

            </Text>
          </Col>
          <Col md={12}>
            <Text className={style.Text}>
              Contributors
              First Name Last Name: By Developers
              Company Company: One More Story
              Association: Good Mood Asso
              Anything Else: Simply Dummy Text
              First Name Last Name
              Company Company
              Association: Lorem Ipsum Dolor
              Anything Else
              First Name Last Name
              Company Company
            </Text>
          </Col>
        </Row>
      </div>
    </AppLayout>
  )
}

export default About
