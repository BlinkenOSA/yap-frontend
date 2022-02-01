import React, {useState} from "react";
import AppLayout from "../components/Layout/Layout";
import {Button, Col, Row, Typography} from "antd";

import style from "../styles/global.module.css";
import Head from "next/head";
import About from "../components/AboutPage/About";
import ArchivalMethodology from "../components/AboutPage/ArchivalMethodology";
import PeopleV2 from "../components/AboutPage/PeopleV2";
import Chronology from "../components/AboutPage/Chronology";
import Presentation from "../components/AboutPage/Presentation";
import Publication from "../components/AboutPage/Publication";

const AboutPage = () => {
  const [selectedPage, setSelectedPage] = useState('about');

  const renderPage = () => {
    switch (selectedPage) {
      case 'about':
        return <About/>;
      case 'methodology':
        return <ArchivalMethodology/>;
      case 'people':
        return <PeopleV2/>;
      case 'chronology':
        return <Chronology/>;
      case 'presentations':
        return <Presentation/>;
      case 'publications':
        return <Publication/>;
      default:
        return <About/>;
    }
  };

  return (
    <AppLayout withBackground={true}>
      <Head>
        <title>Yugoslavia Archive Project - About</title>
      </Head>
      <div className="container staticpage">
        <Row gutter={[24, 36]}>
          <Col lg={24}>
            <div className={style.NavButtons}>
              <Button
                onClick={() => setSelectedPage('about')}
                className={selectedPage === 'about' ? style.ActiveButton : ''}>
                About
              </Button>
              <Button
                onClick={() => setSelectedPage('methodology')}
                className={selectedPage === 'methodology' ? style.ActiveButton : ''}>
                Archival methodology</Button>
              <Button
                onClick={() => setSelectedPage('people')}
                className={selectedPage === 'people' ? style.ActiveButton : ''}>
                People
              </Button>
              <Button
                onClick={() => setSelectedPage('chronology')}
                className={selectedPage === 'chronology' ? style.ActiveButton : ''}>
                Chronology
              </Button>
              <Button
                onClick={() => setSelectedPage('presentations')}
                className={selectedPage === 'presentations' ? style.ActiveButton : ''}>
                Presentations
              </Button>
              <Button
                onClick={() => setSelectedPage('publications')}
                className={selectedPage === 'publications' ? style.ActiveButton : ''}>
                Publications
              </Button>
            </div>
          </Col>
        </Row>
        {renderPage()}
      </div>
    </AppLayout>
  )
};

export default AboutPage
