import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import ReactPlayer from 'react-player/file'
import FadeIn from 'react-fade-in';


const Exploring = () => {
    return (
        <React.Fragment>
            <Row gutter={[24]}>
                <Col lg={24}>
                    <FadeIn>
                        <div key={'title'}>
                            <h3 className={style.Title}>Exploring the collection</h3>
                        </div>
                    </FadeIn>
                </Col>
                <Col lg={24}>
                    <FadeIn delay={100}>
                        <div key={1} className={style.Text}>
                            The Yugoslavia Archive Project (YAP) contains over 35,000 records on the post WWII history
                            of Yugoslavia from the archival collections of the Blinken OSA Archivum. They include text,
                            photo, moving image and sound documents in analog and digital format. Available in over ten
                            languages, records are described either individually (items) or in smaller units (folders or
                            carriers) with descriptive metadata of various levels of granularity.
                        </div>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <div key={2} className={style.Text} style={{marginTop: '30px'}}>
                            The YAP collections were donated by international human rights, media and philanthropic
                            organizations, such as Physicians for Human Rights, the United Nations Expert Committee on
                            Investigating War Crimes in the former Yugoslavia, the International Helsinki Federation for
                            Human Rights, the American Refugee Committee, Radio Free Europe/Radio Liberty, the
                            International Monitor Institute and the Open Society Foundations, and private donors,
                            including the American Journalist <a href={'https://en.wikipedia.org/wiki/David_S._Rohde'}
                            target={'_blank'}>David Rohde</a> or political scientist and human rights
                            activist <a href={'https://as.nyu.edu/faculty/LaraNettelfield.html'} target={'_blank'}>
                            Lara J. Nettelfield.</a>
                        </div>
                    </FadeIn>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default Exploring;
