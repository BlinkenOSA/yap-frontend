import React from "react";
import AppLayout from "../components/Layout/Layout";
import dynamic from 'next/dynamic'
import Head from "next/head";

const TimelineMap = dynamic(
  () => import('../components/Timeline/Timeline'),
  { ssr: false }
);

function Timeline() {
  return (
    <AppLayout withBackground={true}>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
        <link href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" rel="stylesheet" />
        <title>YAP - Timeline</title>
      </Head>
      <TimelineMap />
    </AppLayout>
  )
}

export default Timeline
