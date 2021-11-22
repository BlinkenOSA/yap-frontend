import AppLayout from "../components/Layout/Layout";
import SearchBarIndex from "../components/Search/SearchBarIndex/SearchBarIndex";
import React from "react";
import style from "../styles/global.module.css"

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import {useRouter} from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  const onSearch = (values) => {
    router.push({pathname: '/search', query: values})
  };

  return (
    <AppLayout>
      <Head>
        <title>Yugoslavia Archive Project</title>
      </Head>
      <div className="container">
        <SearchBarIndex onSearch={onSearch}/>
      </div>
      <div className={style.FrontPageImage}>
        <span className={style.FrontPageTitle}>
          <Typewriter
            string={'Yugoslavia Archive Project'}
            stopBlinkinOnComplete
          />
        </span>
      </div>
    </AppLayout>
  )
}
