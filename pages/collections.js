import React from "react";
import AppLayout from "../components/Layout/Layout";
import useSWR from "swr";
import {API, fetcher} from "../utils/api";
import Head from "next/head";
import {Media} from "../components/Media/Media";
import CollectionResultsMasonryWithText from "../components/Collections/CollectionResultsMasonryWithText";


const Collections = () => {
  const { data, error } = useSWR(`${API}/repository/collections/`, fetcher);

  return (
    <AppLayout withBackground={true}>
      <Head>
        <title>YAP (Yugoslavia Archive Project) - Collections</title>
      </Head>s
      <Media at="xs">
        <CollectionResultsMasonryWithText data={data} isMobile={true}/>
      </Media>
      <Media greaterThan="xs">
        <CollectionResultsMasonryWithText data={data} />
      </Media>
    </AppLayout>
  )
};

export default Collections
