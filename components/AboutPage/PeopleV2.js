import {Col, Row, Timeline} from "antd";
import React from "react";
import style from "./style.module.css";
import FadeIn from 'react-fade-in';

const PeopleV2 = () => {
  const yearLabel = (year) => {
    return (
      <span className={style.YearLabel}>{year}</span>
    )
  };

  return (
    <React.Fragment>
      <Row gutter={[24, 48]}>
        <Col lg={24}>
          <FadeIn>
            <h3 key={'people'} className={style.Title}>People</h3>
          </FadeIn>
          <FadeIn delay={200}>
            <Timeline key={'timeline'} mode={'left'} className={style.Timeline}>
              <Timeline.Item label={yearLabel('Csaba Szilagyi')}>
                Project Leader<br/>
                Head of Human Rights Program
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Acting Chief Archivist<br/>
                Blinken OSA, 2013-present
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Perica Jovchevski')}>
                PhD Student in Political Theory, CEU
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Assistant Archivist<br/>Blinken OSA, Budapest, 2015-present
              </Timeline.Item>
            </Timeline>
          </FadeIn>
        </Col>
      </Row>
      <Row gutter={[24, 48]}>
        <Col lg={24}>
          <FadeIn delay={400}>
            <h3 key={'former_contributors'} className={style.Title}>Former contributors</h3>
          </FadeIn>
          <FadeIn delay={600}>
            <Timeline key={'timeline'} mode={'left'} className={style.Timeline}>
              <Timeline.Item label={yearLabel('Connor Kusilek')}>
                MA Student in International Relations, CEU
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Assistant Archivist<br/>
                Blinken OSA, Budapest, 2017-2018
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Miloš Resimić')}>
                PhD Student in Political Science, CEU
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Assistant Archivist<br/>
                Blinken OSA, Budapest, 2015-2017
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Ana Ćuković')}>
                MA Student in Nationalism Studies, CEU
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Assistant Archivist<br/>
                Blinken OSA, Budapest, 2015-2017
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Nikola Kosović')}>
                MA Student in Political Science, CEU
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Assistant Archivist<br/>
                Blinken OSA, Budapest, 2015-2016
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Katarina Kosmina')}>
                MA Student in International Relations, CEU
                <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
                Assistant Archivist<br/>
                Blinken OSA, Budapest, 2015
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Kathryn Marie Metz')}>
                MA Student in Legal Studies, CEU, Budapest, 2015
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Dragana Koljenik')}>
                MA Student in Library and Information Science, J.J. Strossmayer University, Osijek, Croatia, 2013
              </Timeline.Item>
            </Timeline>
          </FadeIn>
        </Col>
      </Row>
      <Row gutter={[24, 48]}>
        <Col lg={24}>
          <FadeIn delay={800}>
            <h3 key={'design_and_dev'} className={style.Title}>Design and development</h3>
          </FadeIn>
          <FadeIn delay={1000}>
            <Timeline key={'timeline'} mode={'left'} className={style.Timeline}>
              <Timeline.Item label={yearLabel('József Gábor Bóné')}>
                Web Development<br/>
                Head of IT, Blinken OSA
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Maude Aubert')}>
                Web Design
              </Timeline.Item>
              <Timeline.Item label={yearLabel('Panni Bodonyi')}>
                Illustrator
              </Timeline.Item>
            </Timeline>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default PeopleV2;
