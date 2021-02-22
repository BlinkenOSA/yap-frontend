import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import QueueAnim from 'rc-queue-anim';

const Presentation = () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 48]} style={{minHeight: '650px'}}>
        <Col lg={24}>
          <QueueAnim>
            <h3 key={'title'} className={style.Title}>Presentations</h3>
            <div key={1} className={style.Text}>
              <a href={'https://iuc.hr/programme/1065'} target={'_blank'}>
                Divided Societies XXIII: Myths and the Media
              </a>
              Inter-University Center, Dubrovnik, 2020 (postponed for 2021)
            </div>
            <div key={2} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'http://whitakerinstitute.ie/violence-space-and-the-archives-conference/'} target={'_blank'}>
                Violence, Space and the Archives
              </a>
              National University of Ireland, Galway, 2019
            </div>
            <div key={3} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'http://web.archive.org/web/20190614053427/http://www.srebrenica.international:80/#'} target={'_blank'}>
                Summer University Srebrenica
              </a>
              Gazi Husrev-beg Library, Sarajevo, 2018
            </div>
            <div key={4} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'https://www.osaarchivum.org/events/Prospects-Reconciliation-and-Transitional-Justice-post-Yugoslav-Region'} target={'_blank'}>
                After ICTY
              </a>
              Prospects for Reconciliation and Transitional Justice in the Post-Yugoslav Region, Blinken OSA, Budapest, 2018
            </div>
            <div key={5} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'http://aeri2017.org/2017/04/22/the-stories-of-ordinary-people-are-more-powerful-than-anything-politicians-can-say-affective-archivists-re-figure-the-former-yugoslavia-through-historical-records/'} target={'_blank'}>
                Affective archivists re-figure (the former) Yugoslavia through historical records
              </a>
              Archival Education and Research Institute, Toronto, 2017
            </div>
            <div key={6} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'https://ecchrd.files.wordpress.com/2016/06/agenda-37-budapest-20161.pdf'} target={'_blank'}>
                The Yugoslavia Archive Project
              </a>
              37th annual meeting of the European Coordination Committee on Human Rights Documentation, Blinken OSA, Budapest, 2016
            </div>
            <div key={7} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'https://www.osaarchivum.org/events/Prime-Time-Nationalism-Role-Television-BroadcastsArchives-Aftermath-Yugoslav-Wars-1'} target={'_blank'}>
                Part Time Nationalism
              </a>
              The Role of Television Broadcasts/Archives in the Aftermath of the Yugoslav Wars, Blinken OSA, Budapest, 2016<br/>
              Recordings of the conference proceedings are available <a className={style.InlineLink} href={'https://www.youtube.com/watch?v=5uqDT9d9GV8&list=PLW16VxGg82nXJBXIXH8Thm28uxh2EoXgD'} target={'_blank'}>here</a>.
            </div>
            <div key={8} className={style.Text} style={{marginTop: '20px'}}>
              <a href={'https://ecchrd.files.wordpress.com/2015/05/agenda-36-2015-copenhagen.pdf'} target={'_blank'}>
                The former Yugoslavia Archive
              </a>
              36th annual meeting of the European Coordination Committee on Human Rights Documentation, Copenhagen, 2015
            </div>
          </QueueAnim>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default Presentation;
