import React from "react";
import {Map, TileLayer} from "react-leaflet";
import ReactDistortableImageOverlay from "react-leaflet-distortable-imageoverlay";
import L from 'leaflet'

const Timeline = () => {
  const imageUrl = '/maps/1992_04_07.svg';
  const imageBounds = [[40.3976, 13.3564], [47.1953, 23.2344]];

  const onCornersUpdated = (corners) => {
    console.log(corners);
  };

  return (
    <div style={{marginTop: '110px', height: '100%'}}>
      <Map bounds={imageBounds} zoom={6} style={{height:"600px"}}>
        <TileLayer
          noWrap={true}
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
        />
        <ReactDistortableImageOverlay
          url={imageUrl}
          attributes={{ stroke: 'red' }}
          onCornersUpdated={onCornersUpdated}
          opacity={0.6}
          corners={[
            new L.latLng(46.891052758899654,13.383321762084963),
            new L.latLng(46.82285159007993, 23.536920547485355),
            new L.latLng(41.046152082688636,13.58940124511719),
            new L.latLng(40.812315136326006,22.947950363159183),
          ]}
          zIndex={999}
        />
      </Map>
    </div>
  )
};

export default Timeline;
