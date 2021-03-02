import {Col, Row, Timeline} from "antd";
import style from "./style.module.css";
import React from "react";
import QueueAnim from 'rc-queue-anim';

const Presentation = () => {
  const yearLabel = (year) => {
    return (
      <span className={style.YearLabel}>{year}</span>
    )
  };

  return (
    <React.Fragment>
      <Row gutter={[24, 48]} style={{minHeight: '650px'}}>
        <Col lg={24}>
          <QueueAnim>
            <h3 key={'title'} className={style.Title}>Presentations</h3>
          </QueueAnim>
          <QueueAnim delay={300}>
            <Timeline key={'timeline'} mode={'alternate'} className={style.Timeline}>
              <Timeline.Item label={yearLabel('2020')}>
                <div className={style.Text}>
                  <a href={'https://iuc.hr/programme/1065'} target={'_blank'} className={style.Presentation}>
                    Divided Societies XXIII: Myths and the Media
                  </a>
                  Inter-University Center, Dubrovnik, 2020 (postponed for 2021)
                </div>
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2019')}>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'http://whitakerinstitute.ie/violence-space-and-the-archives-conference/'} target={'_blank'} className={style.Presentation}>
                  Violence, Space and the Archives
                  </a>
                  National University of Ireland, Galway, 2019
                </div>
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2018')}>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'http://web.archive.org/web/20190614053427/http://www.srebrenica.international:80/#'} target={'_blank'} className={style.Presentation}>
                    Summer University Srebrenica
                  </a>
                  Gazi Husrev-beg Library, Sarajevo, 2018
                </div>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'https://www.osaarchivum.org/events/Prospects-Reconciliation-and-Transitional-Justice-post-Yugoslav-Region'} target={'_blank'} className={style.Presentation}>
                    After ICTY
                  </a>
                  Prospects for Reconciliation and Transitional Justice in the Post-Yugoslav Region, Blinken OSA, Budapest, 2018
                </div>
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2017')}>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'http://aeri2017.org/2017/04/22/the-stories-of-ordinary-people-are-more-powerful-than-anything-politicians-can-say-affective-archivists-re-figure-the-former-yugoslavia-through-historical-records/'} target={'_blank'} className={style.Presentation}>
                    Affective archivists re-figure (the former) Yugoslavia through historical records
                  </a>
                  Archival Education and Research Institute, Toronto, 2017
                </div>
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2016')}>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'https://ecchrd.files.wordpress.com/2016/06/agenda-37-budapest-20161.pdf'} target={'_blank'} className={style.Presentation}>
                    The Yugoslavia Archive Project
                  </a>
                  37th annual meeting of the European Coordination Committee on Human Rights Documentation, Blinken OSA, Budapest, 2016
                </div>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'https://www.osaarchivum.org/events/Prime-Time-Nationalism-Role-Television-BroadcastsArchives-Aftermath-Yugoslav-Wars-1'} target={'_blank'} className={style.Presentation}>
                    Part Time Nationalism
                  </a>
                  The Role of Television Broadcasts/Archives in the Aftermath of the Yugoslav Wars, Blinken OSA, Budapest, 2016<br/>
                  Recordings of the conference proceedings are available <a href={'https://www.youtube.com/watch?v=5uqDT9d9GV8&list=PLW16VxGg82nXJBXIXH8Thm28uxh2EoXgD'} target={'_blank'}>here</a>.
                </div>
              </Timeline.Item>
              <Timeline.Item label={yearLabel('2015')}>
                <div className={style.Text} style={{marginTop: '20px'}}>
                  <a href={'https://ecchrd.files.wordpress.com/2015/05/agenda-36-2015-copenhagen.pdf'} target={'_blank'} className={style.Presentation}>
                    The former Yugoslavia Archive
                  </a>
                  36th annual meeting of the European Coordination Committee on Human Rights Documentation, Copenhagen, 2015
                </div>
              </Timeline.Item>
            </Timeline>
          </QueueAnim>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default Presentation;
