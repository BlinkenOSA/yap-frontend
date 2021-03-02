import {Col, Row, Timeline} from "antd";
import React from "react";
import style from "./style.module.css";
import QueueAnim from 'rc-queue-anim';

const Chronology = () => {
  const yearLabel = (year) => {
    return (
      <span className={style.YearLabel}>{year}</span>
    )
  };

  return (
    <React.Fragment>
      <Row gutter={[24, 48]} style={{minHeight: '1200px'}}>
        <Col lg={24}>
          <QueueAnim>
            <h3 key={'chronology'} className={style.Title}>Chronology</h3>
          </QueueAnim>
          <QueueAnim delay={300}>
            <Timeline key={'timeline'} mode={'alternate'} className={style.Timeline}>
              <Timeline.Item label={yearLabel('2011')}>
                  The preliminary work for a curated Balkan Archive began with the drafting of a conceptual frame
                  and creating an inventory of possible collections to be included.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2013')}>
                A master datasheet of analog and digital collection items (ca. 27,000 records) with pertaining
                metadata was set up and the first version of an expanded metadata schema was established.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2015')}>
                The Yugoslavia Archive Project (YAP) was launched and the reprocessing of archival materials
                based on the newly developed methodology began with prime time television newscasts and political
                programs from Bosnia and Herzegovina, Croatia and Serbia from 1990-1997.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2016')}>
                A documentary film on the ongoing archival experiment, entitled Room Without a View was produced
                with the participation of YAP team members.<br/><br/>
                An international conference around the YAP under the name Prime Time Nationalism was organized
                by Blinken OSA.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2017')}>
                Following the TV monitoring, the YAP team continued the work with textual archival sources of the
                Yugoslav socialist and its immediate aftermath: subject files from the collections of
                Radio Free Europe/Radio Liberty from 1945-1997, as well as documents on human rights violations
                from the UN Commission of Experts on Investigating War Crimes in the former Yugoslavia from 1994-1995.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2018')}>
                The workshop “After ICTY: Prospects for Reconciliation and Transitional Justice in the
                Post-Yugoslav Region” was organized by YAP members in cooperation with the Political Science
                Department at CEU.<br/><br/>
                In the archival work, the YAP continued to apply its methodology on sound materials from the UN
                Commission of Experts on Investigating War Crimes in the former Yugoslavia from 1992-1993.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2019')}>
                Website development and data consolidation began.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2021')}>
                The YAP website was launched.
              </Timeline.Item>
            </Timeline>
          </QueueAnim>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default Chronology;
