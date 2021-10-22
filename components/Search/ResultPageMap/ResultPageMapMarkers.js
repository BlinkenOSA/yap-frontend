import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";
import React, {useEffect, useState} from "react";
import style from "./ResultPageMap.module.css";
import L from "leaflet";
import {Marker, Tooltip} from "react-leaflet";

const ResultPageMapMarkers = ({params, selectedEntry, onMarkerClick}) => {
  const response = useSWR([`${API}/repository/records_map/`, params], fetcher);
  const entryResponse = useSWR(selectedEntry !== 0 ? `${API}/repository/records/${selectedEntry}` : undefined, fetcher);

  const [mapData, setMapData] = useState([]);
  const [markedCities, setMarkedCities] = useState([]);

  useEffect(() => {
    const {data, error} = response;
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
  }, [response['data']]);

  useEffect(() => {
    const {data, error} = entryResponse;
    if (data) {
      if ('city' in data) {
        setMarkedCities(data['city'].map(c => c.city));
      }
    }
  }, [entryResponse['data']]);

  const handleClick = event => {
    const { lat, lng } = event.latlng;
    const results = mapData.filter(data => data['geo'][0] === lat && data['geo'][1] === lng);
    onMarkerClick(results[0]['city']);
  };

  return (
    mapData.map((md) => {
      const getStyle = (size) => {
        if (markedCities.includes(md['city'])) {
          if (selectedEntry !== 0) {
            return style[`MapIcon${size}Blue`]
          } else {
            return style[`MapIcon${size}Red`]
          }
        } else {
          if (selectedEntry !== 0) {
            return style[`MapIcon${size}RedPale`]
          } else {
            return style[`MapIcon${size}Red`]
          }
        }
      };

      const getConfig = () => {
        if (md['count'] > 1000) {
          return {
            style: getStyle('Large'),
            offset: L.point(18, -5)
          }
        }

        if (md['count'] > 100 && md['count'] <= 1000) {
          return {
            style: getStyle('Mid'),
            offset: L.point(13, -5)
          }
        }

        if (md['count'] > 10 && md['count'] <= 100) {
          return {
            style: getStyle('Small'),
            offset: L.point(8, -5)
          }
        }

        if (md['count'] <= 10) {
          return {
            style: getStyle('ExtraSmall'),
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
          position={md['geo']}
          onClick={handleClick}
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

export default ResultPageMapMarkers;
