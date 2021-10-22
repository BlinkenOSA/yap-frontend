import React, {useState, useEffect} from 'react';
import Head from "next/head";
import {ImageOverlay, LayersControl, Map, Marker, TileLayer, Tooltip} from "react-leaflet";
import style from "./ResultPageMap.module.css";
import L from "leaflet";
import Control from "react-leaflet-control";
import Legend from "../ResultPage/Legend";
import {Button, Col, Drawer, Row} from 'antd';
import ResultPageMapMarkers from "./ResultPageMapMarkers";
import ResultPageMapEntries from "./ResultPageMapEntries";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import {FullscreenOutlined, FullscreenExitOutlined} from '@ant-design/icons';

const ResultPageMap = ({params}) => {
  const handle = useFullScreenHandle();

  const [mapParams, setMapParams] = useState({});

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(0);

  const [selectedLayer, setSelectedLayer] = useState('');

  useEffect(() => {
    setMapParams(params);
  }, [params]);

  const mapFiles = [
    {file: '/maps/YAP_map_1990.svg', text: '1990 December'},
    {file: '/maps/YAP_map_1991_06.svg', text: '1991 June 25'},
    {file: '/maps/YAP_map_1992_03.svg', text: '1992 March 3'},
    {file: '/maps/YAP_map_1993_08.svg', text: '1993 August 28'},
    {file: '/maps/YAP_map_1995_12_14.svg', text: '1995 December 14'},
    {file: '/maps/YAP_map_1998_01.svg', text: '1998 January 15'},
    {file: '/maps/YAP_map_2008_02.svg', text: '2008 February 17'},
  ];

  const imageBounds = [
    new L.latLng(46.877933, 23.034040),
    new L.latLng(40.852090, 13.375633),
  ];

  const renderLayers = () => (
    mapFiles.map((m, idx) => (
      <LayersControl.BaseLayer
        name={m.text}
        key={idx}
      >
        <ImageOverlay
          url={m.file}
          opacity={0.6}
          bounds={imageBounds}
          zIndex={999}
        />
      </LayersControl.BaseLayer>
    ))
  );

  const onRemoveCity = (index) => {
    const sc = [...selectedCity];
    const params = {...mapParams};

    if ('city' in params) {
      if (params['city'].length === sc.length) {
        params['city'].splice(index, 1)
      } else {
        params['city'].splice(params['city'].length - sc.length + index, 1);
      }
      setMapParams(params);
    }
    sc.splice(index, 1);
    setSelectedCity(sc);
    setSelectedEntry(0);
  };

  const onDrawerClose = () => {
    const params = {...mapParams};
    if ('city' in params) {
      params['city'].splice(params['city'].length - selectedCity.length, selectedCity.length);
    }
    setMapParams(params);
    setDrawerVisible(false);
    setSelectedCity([]);
    setSelectedEntry(0);
  };

  const onClick = (place) => {
    const params = {...mapParams};

    if ('city' in params) {
      if (Array.isArray(params['city'])) {
        params['city'].push(place);
      } else {
        params['city'] = [params['city'], place];
      }
    } else {
      params['city'] = [place];
    }
    setMapParams(params);
    setDrawerVisible(true);
    setSelectedCity(oldSelectedCity => [...oldSelectedCity, place])
  };

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"/>
      </Head>
      <FullScreen handle={handle} className={handle.active ? style.FullScreen : ''}>
        <Row>
          <Col xs={drawerVisible ? 16 : 24}>
            <div style={{height: '100%'}}>
              <Map
                className={`markercluster-map ${style.MapContainer}`}
                center={[44.53842, 18.66709]}
                zoom={7}
                onBaselayerchange={({name}) => {setSelectedLayer(name)}}
              >
                <TileLayer
                  noWrap={true}
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
                  url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                <ResultPageMapMarkers params={mapParams} onMarkerClick={onClick} selectedEntry={selectedEntry}/>
                <LayersControl
                  position="topright"
                  collapsed={false}
                >
                  {renderLayers()}
                </LayersControl>
                <Control position="topleft" >
                  <div className={style.FullScreenButtonWrap}>
                    <a onClick={handle.active ? handle.exit : handle.enter} className={style.FullScreenButton}>
                      {handle.active ? <FullscreenExitOutlined/> : <FullscreenOutlined />}
                    </a>
                  </div>
                </Control>
                <Control position={'bottomleft'}>
                  <Legend selectedLayer={selectedLayer}/>
                </Control>
              </Map>
            </div>
          </Col>
          {
            drawerVisible &&
            <Col xs={8}>
              <ResultPageMapEntries
                params={mapParams}
                selectedCity={selectedCity}
                onCloseClick={onDrawerClose}
                onRemoveCity={onRemoveCity}
                selectedEntry={selectedEntry}
                onSelectEntry={setSelectedEntry}
              />
            </Col>
          }
        </Row>
      </FullScreen>
    </React.Fragment>
  )
};

export default ResultPageMap;
