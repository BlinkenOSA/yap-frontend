import React, {useState, useEffect} from 'react';
import Head from "next/head";
import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";
import {Map, Marker, TileLayer, Tooltip} from "react-leaflet";
import FullscreenControl from "react-leaflet-fullscreen";
import style from "./ResultPageMap.module.css";
import L from "leaflet";

const ResultPageMap = ({params, onMarkerClick}) => {
  const { data, error } = useSWR([`${API}/repository/records_map/`, params], fetcher);
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

  const handleClick = event => {
    const { lat, lng } = event.latlng;
    const results = mapData.filter(data => data['geo'][0] === lat && data['geo'][1] === lng);
    onMarkerClick(results[0]['city'])
  };

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
              onClick={handleClick}
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
        <Map className={`markercluster-map ${style.MapContainer}`} center={[44.53842, 18.66709]} zoom={7}>
          <TileLayer
            noWrap={true}
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
            url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
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

export default ResultPageMap;
