import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import FadeIn from 'react-fade-in';

const People = () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 48]}>
        <Col lg={24} style={{minHeight: '960px'}}>
          <FadeIn>
            <h3 key={'people'} className={style.Title}>People</h3>
            <div key={'1'} className={style.Text}>
              <span className={style.Name}>Csaba Szilagyi</span>, Project Leader<br/>
              Head of Human Rights Program
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Acting Chief Archivist, Blinken OSA, 2013-present
            </div>
            <div key={'2'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Perica Jovchevski</span><br/>
              PhD Student in Political Theory, CEU
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Assistant Archivist, Blinken OSA, Budapest, 2015-present
            </div>
            <h3 key={'contributors'} className={style.Title} style={{marginTop: '20px'}}>
              Former contributors
            </h3>
            <div key={'3'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Connor Kusilek</span><br/>
              MA Student in International Relations, CEU
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Assistant Archivist, Blinken OSA, Budapest, 2017-2018
            </div>
            <div key={'4'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Miloš Resimić</span><br/>
              PhD Student in Political Science, CEU
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Assistant Archivist, Blinken OSA, Budapest, 2015-2017
            </div>
            <div key={'5'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Ana Ćuković</span><br/>
              MA Student in Nationalism Studies, CEU
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Assistant Archivist, Blinken OSA, Budapest, 2015-2017
            </div>
            <div key={'6'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Nikola Kosović</span><br/>
              MA Student in Political Science, CEU
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Assistant Archivist, Blinken OSA, Budapest, 2015-2016
            </div>
            <div key={'7'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Katarina Kosmina</span><br/>
              MA Student in International Relations, CEU
              <span style={{margin: '0 5px', color: '#CCC'}}>|</span>
              Assistant Archivist, Blinken OSA, Budapest, 2015
            </div>
            <div key={'8'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Kathryn Marie Metz</span><br/>
              MA Student in Legal Studies, CEU, Budapest, 2015
            </div>
            <div key={'9'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Dragana Koljenik</span><br/>
              MA Student in Library and Information Science, J.J. Strossmayer University, Osijek, Croatia, 2013
            </div>
            <h3 key={'development'} className={style.Title} style={{marginTop: '20px'}}>
              Design and development
            </h3>
            <div key={'10'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>József Bóné</span>, web development<br/>
              Head of IT, Blinken OSA
            </div>
            <div key={'11'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Maude Aubert</span>, web design
            </div>
            <div key={'12'} className={style.Text} style={{marginTop: '20px'}}>
              <span className={style.Name}>Panni Bodonyi</span>, illustrator
            </div>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default People;
