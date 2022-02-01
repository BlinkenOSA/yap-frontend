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
              Szilagyi, C. and P. Jovchevski on rethinking epistemic violence and power relations in archives of
              violent past (forthcoming in 2021)
            </div>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default People;
