import React, {useState} from "react";
import {ImageOverlay, LayersControl, Map, TileLayer} from "react-leaflet";
import L from 'leaflet'
import Control from 'react-leaflet-control';
import Legend from "./Legend";

const Timeline = () => {
  const [selectedLayer, setSelectedLayer] = useState('');

  const mapFiles = [
    {file: '/maps/YAP_map_1990.svg', text: '1990'},
    {file: '/maps/YAP_map_1991_06.svg', text: '1991 June'},
    {file: '/maps/YAP_map_1991_09.svg', text: '1991 September'},
    {file: '/maps/YAP_map_1992_03.svg', text: '1992 March'},
    {file: '/maps/YAP_map_1992_04_07.svg', text: '1992 April 7th'},
    {file: '/maps/YAP_map_1992_04_28.svg', text: '1992 April 28th'},
    {file: '/maps/YAP_map_1993_06.svg', text: '1993 June'},
    {file: '/maps/YAP_map_1995_09.svg', text: '1995 September'},
    {file: '/maps/YAP_map_1996_01.svg', text: '1996 April'},
    {file: '/maps/YAP_map_1998_01.svg', text: '1998 January'},
    {file: '/maps/YAP_map_2008_02.svg', text: '2008 February'},
  ];

  const imageBounds = [
    new L.latLng(46.877933, 23.034040),
    new L.latLng(40.852090, 13.375633),
  ];
  const mapBounds = [[40.3976, 13.3564], [47.1953, 23.2344]];

  const renderLayers = () => (
    mapFiles.map((m, idx) => (
      <LayersControl.BaseLayer
        name={m.text}
        key={idx}
      >
        <ImageOverlay
          url={m.file}
          attributes={{ stroke: 'red' }}
          opacity={0.6}
          bounds={imageBounds}
          zIndex={999}
        />
      </LayersControl.BaseLayer>
    ))
  );

  return (
    <div style={{marginTop: '70px', height: '100%'}}>
      <Map
        bounds={mapBounds}
        zoom={6}
        style={{height:"640px"}}
        onBaselayerchange={({name}) => {setSelectedLayer(name)}}
      >
        <TileLayer
          noWrap={true}
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        />
        <LayersControl
          position="topright"
          collapsed={false}
        >
          {renderLayers()}
        </LayersControl>
        <Control position={'bottomleft'}>
          <Legend selectedLayer={selectedLayer}/>
        </Control>
      </Map>
    </div>
  )
};

export default Timeline;
