import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import ReactPlayer from 'react-player/file'
import FadeIn from 'react-fade-in';


const About = () => {
  return (
    <React.Fragment>
      <Row gutter={[24]} style={{minHeight: '600px'}}>
        <Col lg={24}>
          <FadeIn>
            <div key={'title'}>
              <h3 className={style.Title}>About the Yugoslavia Archive Project</h3>
            </div>
          </FadeIn>
        </Col>
        <Col lg={12}>
          <FadeIn delay={100}>
            <div key={1} className={style.Text}>
              The Yugoslavia Archive Project (YAP) is both a curated collection and an archival research lab of
              Blinken OSA, which comprises over 30,000 records covering the historical changes in the socio-political,
              economic and cultural landscape in the Yugoslav region from WWII to 2010. The collection brings together
              text, still and moving image and sound records in multiple languages in analog and digital format from
              across the archives.
            </div>
            <div style={{width: '100%', minHeight: '300px', marginTop: '30px', marginBottom: '60px', textAlign: 'center'}}>
              <ReactPlayer
                controls={true}
                width='95%'
                height='300px'
                style={{margin: '30px auto'}}
                url='https://storage.osaarchivum.org/yap/video/Room_Without_a_View/Room_Without_a_View.m3u8'
              />
            </div>
          </FadeIn>
        </Col>
        <Col lg={12}>
          <FadeIn delay={200}>
            <div key={2} className={style.Text}>
              The included documents are reprocessed and recontextualized according to a geo-temporally simultaneous
              and self-reflexive archival methodology developed specifically for this project, which aims at enhancing
              descriptive metadata to ensure diversified, multiple access to and reveal the multivocality of the
              sources. This objective of the project stems from and promotes human rights and social justice archival
              initiatives for creating more inclusive records description. At the same time, it allows for discovering
              relational patterns, interactions and cross-references among the sources in an informed and
              innovative manner.
            </div>
            <div key={3} className={style.Text} style={{marginTop: '30px'}}>
              The YAP is a work in progress performed by an international team of archival professionals and students
              in information science, nationalism studies, international relations, philosophy, law and political
              science and theory, many of whom come from the former Yugoslavia. We have already reprocessed some of
              the collections by the means of this new method and we continue to add further materials as they become
              available. Many of the records still remain described by international standards traditionally used
              across Blinken OSA. When searching the holdings of the YAP, you will therefore find analog and digital
              materials represented by metadata of different levels of granularity.
            </div>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default About;
