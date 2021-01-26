import AppLayout from "../components/Layout/Layout";
import SearchBar from "../components/Search/SearchBar/SearchBar";
import React from "react";
import style from "../styles/global.module.css"

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  const onSearch = (values) => {
    router.push({pathname: '/search', query: values})
  };

  return (
    <AppLayout>
      <div className="container">
        <SearchBar onSearch={onSearch}/>
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
