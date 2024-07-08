import {Col, Row, Timeline} from "antd";
import React from "react";
import style from "./style.module.css";
import FadeIn from 'react-fade-in';

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
          <FadeIn>
            <h3 key={'chronology'} className={style.Title}>Chronology</h3>
          </FadeIn>
          <FadeIn delay={200}>
            <Timeline key={'timeline'} mode={'alternate'} className={style.Timeline}>
              <Timeline.Item label={yearLabel('2024')}>
                Final data consolidation was completed, and the YAP website was launched.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2022')}>
                Website development began.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2021')}>
                General data consolidation began.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2020')}>
                David Rohde’s Collection on Srebrenica (HU OSA 377) was processed, and descriptions of the Collection
                of Home Movies on Srebrenica Videos (HU OSA 406) were consolidated.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2019')}>
                Expansion of the timeframe of the textual materials processed: start of the processing of press
                clippings, news agency releases and other publication originating from the RFE/RL Research Institute between 1951-1985.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2018')}>
                The workshop “After ICTY: Prospects for Reconciliation and Transitional Justice in the
                Post-Yugoslav Region” was organized by YAP members in cooperation with the Political Science
                Department at CEU.<br/><br/>
                In the archival work, the YAP continued to apply its methodology on sound materials from the UN
                Commission of Experts on Investigating War Crimes in the former Yugoslavia (HU OSA 304) from 1992-1993.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2016')}>
                Expansion of the timeframe of the TV monitoring project: recordings of newscasts from the pre-war and
                the warring years between 1990-1994 were processed.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2016')}>
                A documentary film on the ongoing archival experiment, entitled Room Without a View was produced
                with the participation of YAP team members.<br/><br/>
                An international conference around the YAP under the name Prime Time Nationalism was organized
                by Blinken OSA.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2015')}>
                Start of the TV monitoring project: processing of recordings of news programs from Serbia, Bosnia and
                Croatia from 1996-1999. HU OSA…
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2013')}>
                A master datasheet of analog and digital collection items (ca. 27,000 records) with pertaining
                metadata was set up and the first version of an expanded metadata schema was established.
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2011')}>
                The preliminary work for a curated Balkan Archive began with the drafting of a conceptual frame
                and creating an inventory of possible collections to be included.
              </Timeline.Item>
            </Timeline>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default Chronology;
