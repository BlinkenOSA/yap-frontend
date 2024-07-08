import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import ReactPlayer from 'react-player/file'
import FadeIn from 'react-fade-in';


const About = () => {
    return (
        <React.Fragment>
            <Row gutter={[24]} style={{minHeight: '600px'}}>
                <Col lg={24}>
                    <FadeIn>
                        <div key={'title'}>
                            <h3 className={style.Title}>About the Yugoslavia Archive Project</h3>
                        </div>
                    </FadeIn>
                </Col>
                <Col lg={12}>
                    <FadeIn delay={100}>
                        <div key={1} className={style.Text}>
                            The Yugoslavia Archive Project (YAP) is both a curated collection and an archival research
                            lab of the Blinken OSA Archivum (the Archivum), which comprises over 35,000 records covering
                            the historical changes in the socio-political, economic, and cultural landscape in the
                            Yugoslav region from WWII to 2010. The collection brings together text, still and moving
                            image and sound records in multiple languages in analog and digital format from across the
                            archives.
                        </div>
                        <div className={style.ReactPlayer16_9Wrapper}>
                            <ReactPlayer
                                className={style.ReactPlayer}
                                controls={true}
                                width='100%'
                                height='100%'
                                light='https://storage.osaarchivum.org/yap/thumbnail/Room_Without_a_View.png'
                                url='https://storage.osaarchivum.org/yap/video/Room_Without_a_View/Room_Without_a_View.m3u8'
                            />
                        </div>
                    </FadeIn>
                </Col>
                <Col lg={12}>
                    <FadeIn delay={200}>
                        <div key={2} className={style.Text}>
                            The documents in the collection are being reprocessed and recontextualized according to a
                            critical and self-reflexive archival methodology devised specifically for this project,
                            which aims at enhancing descriptive metadata to ensure diversified, multiple access points
                            to the materials. At the same time, it allows for discovering novel relational patterns,
                            interactions, and cross-references among relevant archival sources. This methodological
                            approach is entrenched within archival initiatives committed to the promotion and protection
                            of human rights and social justice through the creation of more inclusive descriptions of
                            the records.
                        </div>
                        <div key={3} className={style.Text} style={{marginTop: '30px'}}>
                            The YAP is a work in progress performed by an international team of archival professionals
                            and students in information science, international relations, law, nationalism studies,
                            philosophy, and political science, many of whom come from the former Yugoslavia. We have
                            already reprocessed parts of the collections using the critical and self-reflexive archival
                            methodology and we continue to add further materials as they become available. Many of the
                            included records remain described by international descriptive standards traditionally used
                            across the Archivum. When searching the holdings of the YAP, you will therefore find analog
                            and digital materials represented by metadata of different levels of granularity.
                        </div>
                    </FadeIn>
                </Col>
            </Row>
        </React.Fragment>
    )
};

export default About;
