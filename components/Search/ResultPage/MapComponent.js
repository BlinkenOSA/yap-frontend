import {Map, Marker, TileLayer, Tooltip} from "react-leaflet";
import React, {useEffect, useState} from "react";
import L from 'leaflet';
import FullscreenControl from 'react-leaflet-fullscreen';
import Head from "next/head";
import style from "./MapComponent.module.css";

const MapComponent = ({data}) => {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    const mData = [];
    if (data) {
      const facets = data['facets']['facet_fields']['geo_facet'];
      facets.forEach((facet, index) => {
        if (index % 2 === 0) {
          const d = JSON.parse(facet);
          mData.push({
            city: d['city'],
            geo: [d['lat'], d['long']],
            count: facets[index+1]})
        }
      });
    }
    setMapData(mData);
  }, [data]);

  const renderMarkers = () => {
    return (
      mapData.map((md) => {
        const getConfig = () => {
          if (md['count'] > 1000) {
            return {
              style: style.MapIconLarge,
              offset: L.point(18, -5)
            }
          }

          if (md['count'] > 100 && md['count'] <= 1000) {
            return {
              style: style.MapIconMid,
              offset: L.point(13, -5)
            }
          }

          if (md['count'] > 10 && md['count'] <= 100) {
            return {
              style: style.MapIconSmall,
              offset: L.point(8, -5)
            }
          }

          if (md['count'] <= 10) {
            return {
              style: style.MapIconExtraSmall,
              offset: L.point(3, -5)
            }
          }
        };

        const text = L.divIcon(
          {html: md['count'], className: getConfig()['style']}
        );

        return (
          <Marker
            key={md['city']}
            color={'#3080ED'}
            position={md['geo']}
            icon={text}
          >
            <Tooltip direction={'top'} offset={getConfig()['offset']}>
              {md['city']}
            </Tooltip>
          </Marker>
        )
      }
    ))
  };

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
        <link rel="stylesheet" href="https://unpkg.com/react-leaflet-markercluster/dist/styles.min.css"/>
      </Head>
      <div style={{height: '100%'}}>
        <Map className="markercluster-map" center={[44.53842, 18.66709]} zoom={7} style={{height:"600px"}}>
          <TileLayer
            noWrap={true}
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
          />
            {renderMarkers()}
            <FullscreenControl
              content={'[ ]'}
              position="topright"
              forceSeparateButton={true}/>
        </Map>
      </div>
    </React.Fragment>
  )
};

export default MapComponent;
