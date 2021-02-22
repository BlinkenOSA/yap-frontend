import React, {useState, useEffect} from 'react';
import {ImageOverlay, LayersControl, Map, Marker, TileLayer, Tooltip} from "react-leaflet";
import style from "./RecordMap.module.css";
import L from "leaflet";
import Control from "react-leaflet-control";
import Legend from "../Search/ResultPage/Legend";

const RecordMap = ({data}) => {
  const [mapData, setMapData] = useState([]);
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

  useEffect(() => {
    const mData = [];
    if (data) {
      console.log(data)
      data.forEach((d, index) => {
        if (index % 2 === 0) {
          mData.push({
            city: d['city'],
            geo: [d['latitude'], d['longitude']]
          })
        }
      });
    }
    setMapData(mData);
  }, [data]);

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

  const renderMarkers = () => {
    return (
      mapData.map((md) => {
        const text = L.divIcon(
          {className: style.MapIconExtraSmall}
        );

        return (
          <Marker
            key={md['city']}
            color={'#3080ED'}
            position={md['geo']}
            icon={text}
          >
            <Tooltip direction={'top'} offset={L.point(3, -5)}>
              {md['city']}
            </Tooltip>
          </Marker>
        )
      }
      ))
  };

  return (
    <React.Fragment>
      <div style={{height: '200px', width: '500px'}}>
        <Map
          className={`markercluster-map`}
          center={[44.53842, 18.66709]}
          zoom={7}
          onBaselayerchange={({name}) => {setSelectedLayer(name)}}
        >
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {renderMarkers()}
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
    </React.Fragment>
  )
};

export default RecordMap;
