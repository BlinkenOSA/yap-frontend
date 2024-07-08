import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import FadeIn from "react-fade-in";

const People = () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 48]}>
        <Col lg={24} style={{minHeight: '960px'}}>
          <FadeIn>
            <h3 key={'people'} className={style.Title}>Publications</h3>
            <div key={'1'} className={style.Text}>
              Szilágyi, C., and P. Jovchevski. “Critical Re-Archiving for Social Justice and Inclusive Memories of the
              Yugoslav Wars.” In N. Trajanovski and L. Georgieva (eds.), <i>Conflicting Remembrance:
              The Memory of the Macedonian 2001 in Context</i>, Friedrich Ebert Stiftung, 148-167, 2023.
            </div>
            <div key={'2'} className={style.Text} style={{marginTop: 20}}>
              <a href={'https://www.archivum.org/entries/blog/52'} target={'_blank'}>
                “Sarajevo, the biggest concentration camp in the world,”</a> Csaba Szilágyi (2022)
            </div>
            <div key={'3'} className={style.Text} style={{marginTop: 20}}>
              <a href={'https://www.archivum.org/entries/blog/95'} target={'_blank'}>
                Through A Camera, Gradually Brighter</a> Csaba Szilágyi (2021)
            </div>
            <div key={'4'} className={style.Text} style={{marginTop: 20}}>
              <a href={'https://www.archivum.org/entries/blog/102'} target={'_blank'}>
                25 Years After Dayton:</a> Between the Ethics of Memory and the Historiography of the Yugoslav Wars, Perica Jovchevski (2020)
            </div>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default People;
