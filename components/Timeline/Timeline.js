import React, {useState} from "react";
import {ImageOverlay, LayersControl, Map, TileLayer} from "react-leaflet";
import L from 'leaflet'
import Control from 'react-leaflet-control';
import Legend from "../Search/ResultPageMap/Legend";

const Timeline = () => {
  const [selectedLayer, setSelectedLayer] = useState('');

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
          url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
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
