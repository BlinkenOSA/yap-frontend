import React from 'react';
import Head from "next/head";
import dynamic from 'next/dynamic'
import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";

const MapComponent = dynamic(
  () => import('./MapComponent'),
  { ssr: false }
);

const ResultPageMap = ({params}) => {
  const { data, error } = useSWR([`${API}/repository/records_map/`, params], fetcher);

  return (
    <React.Fragment>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
        <link href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" rel="stylesheet" />
      </Head>
      <MapComponent data={data}/>
    </React.Fragment>
  )
};

export default ResultPageMap;
