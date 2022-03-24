import {Col, Row} from "antd";
import style from "./style.module.css";
import React from "react";
import FadeIn from 'react-fade-in';
import ReactPlayer from "react-player/youtube";

const ArchivalMethodology = () => {
  return (
    <React.Fragment>
      <Row gutter={[24, 48]} style={{minHeight: '700px'}}>
        <Col lg={12}>
          <FadeIn>
            <h3 key={'methodology'} className={style.Title}>Archival Methodology</h3>
            <div key={1} className={style.Text}>
              The Yugoslavia Archive Project (YAP) has developed and deployed a geo-temporally simultaneous and
              self-reflexive archival methodology which rests on two basic elements: an enhanced metadata model and a
              critical-reflective approach to the process of archival intervention and the agency of the archivist
              throughout it.
            </div>
            <div style={{width: '100%', minHeight: '300px', marginTop: '30px', marginBottom: '10px', textAlign: 'center'}}>
              <ReactPlayer
                  controls={true}
                  width='95%'
                  height='300px'
                  style={{margin: '30px auto'}}
                  url='https://storage.osaarchivum.org/yap/video/YAPTrailer/YAPTrailer.m3u8'
              />
            </div>
          </FadeIn>
        </Col>
        <Col lg={12}>
          <FadeIn delay={200}>
            <h3  key={'metadata'} className={style.Title}>Enhanced metadata</h3>
            <div key={2} className={style.Text}>
              The metadata schema used by the YAP is an extension in both scope and granularity of the traditional archival
              metadata model used in the <a href={"https://catalog.osaarchivum.org/"} target={'_blank'}>catalog</a> of Blinken
              OSA. Beyond title, date of creation, creator and annotation it contains information on the type and genre,
              temporal and spatial coverage of the documents, including locality level geo-coordinates. We provided
              extended content description to embrace the multivocality of the records and include themes, individuals,
              groups, organizations and communities that have been traditionally under- or misrepresented in archival
              descriptions. We further enriched metadata with keywords on corporate and personal names, topics and
              events, as well as with internal notes, where interactions of the processing archivist with the records
              were recorded.
            </div>
            <div key={3} className={style.Text} style={{marginTop: '20px'}}>
              The resulting rich texture of descriptive metadata provides multiple access points for researchers,
              ensures a more insightful scanning of the vast Yugoslavia Archive and offers possibilities of creating new
              meanings and narratives by every instance of using or reusing the records.
            </div>
          </FadeIn>
        </Col>
        <Col lg={24}>
          <FadeIn delay={400}>
            <h3 key={'procesing'} className={style.Title}>Critical and self-reflective data processing</h3>
            <div key={4} className={style.Text} style={{marginTop: '20px'}}>
              The YAP methodology starts from the fundamental epistemic premise that the agency of the archivist is of
              critical importance in the production of archival descriptions, which are as much the representations of
              the archivist as of the archived material. This aspect of archiving is worth being recorded, preserved,
              challenged and rethought. The YAP, thus, exceeds the framework of a traditional archival project and
              presents itself more as an open forum for epistemic archival experiments and innovation.
            </div>
            <div key={5} className={style.Text} style={{marginTop: '20px'}}>
              The YAP team consisted of Blinken OSA archivists (“professional outsiders”), as well as graduate students
              (“cultural insiders”) with different backgrounds from the former Yugoslavia. While interacting with the
              materials through enriched archival descriptions, team members also reflected on the archival narratives
              they have created and on their individual and collective position within this specific archival context.
              They continued to maintain dialogue with each other about methodological, moral, ethical and factual
              matters throughout the process. Many of these debates have been captured in the documentary
              film <a href={'https://www.youtube.com/watch?v=Bk7f4mGl6e8'} target={'_blank'}>A Room Without a View</a> produced
              by the YAP team in April 2016, in which they also give account of their emotional-behavioral
              approach and imagination in relation to the materials in their care and the entire process of archiving.
            </div>
          </FadeIn>
        </Col>
      </Row>
    </React.Fragment>
  )
};

export default ArchivalMethodology;
