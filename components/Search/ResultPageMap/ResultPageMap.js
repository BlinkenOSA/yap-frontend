import React, {useState, useEffect} from 'react';
import Head from "next/head";
import {ImageOverlay, LayersControl, Map, TileLayer} from "react-leaflet";
import style from "./ResultPageMap.module.css";
import L from "leaflet";
import Control from "react-leaflet-control";
import Legend from "./Legend";
import {Col, Row} from 'antd';
import ResultPageMapMarkers from "./ResultPageMapMarkers";
import {useDeepCompareEffect} from 'react-use';
import {useRouter} from "next/router";

const ResultPageMap = ({query, selectedFacets, selectedEntry, view='desktop'}) => {
  const router = useRouter();

  const [mapParams, setMapParams] = useState({});
  const [selectedLayer, setSelectedLayer] = useState('');

  useDeepCompareEffect(() => {
    setMapParams({
      query: query,
      ...selectedFacets
    })
  }, [query, selectedFacets]);

  const mapFiles = [
    {file: '/maps/YAP_map_off.svg', text: 'Off'},
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
        checked={m.text === 'Off'}
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

  const onClick = (place) => {
    if (selectedFacets.hasOwnProperty('city')) {
      if (Array.isArray(selectedFacets['city'])) {
        if (!selectedFacets['city'].includes(place)) {
          selectedFacets['city'].push(place)
        }
      } else {
        if (!selectedFacets['city'].includes(place)) {
          selectedFacets['city'] = [selectedFacets['city'], place]
        }
      }
    } else {
      selectedFacets['city'] = place;
    }

    router.push({
      pathname: '/search', query: {
        query: query,
        ...selectedFacets
      }
    })
  };

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"/>
      </Head>
      <div className={style.MapWrapper}>
        <Map
          className={`markercluster-map ${view === 'mobile' ? style.MapContainerMobile : style.MapContainer}`}
          center={[44.53842, 18.66709]}
          zoom={7}
          onBaselayerchange={({name}) => {setSelectedLayer(name)}}
        >
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          <ResultPageMapMarkers
            params={mapParams}
            onMarkerClick={onClick}
            selectedEntry={selectedEntry}
          />
          {
            view === 'mobile' ?
            <LayersControl
              position="topright"
            >
              {renderLayers()}
            </LayersControl>
            :
            <LayersControl
              position="topright"
              collapsed={false}
            >
              {renderLayers()}
            </LayersControl>
          }
          <Control position={'bottomleft'}>
            <Legend selectedLayer={selectedLayer}/>
          </Control>
        </Map>
      </div>
    </React.Fragment>
  )
};

export default ResultPageMap;
