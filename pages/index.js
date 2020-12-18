import AppLayout from "../components/Layout/Layout";
import SearchBarDesktop from "../components/Search/SearchBarDesktop/SearchBarDesktop";
import React from "react";
import {Media} from "../components/Media/Media";
import style from "../styles/global.module.css"

import { Typewriter } from 'react-typewriting-effect'
import 'react-typewriting-effect/dist/index.css'
import SearchBarMobile from "../components/Search/SearchBarMobile/SearchBarMobile";
import {useRouter} from "next/router";

export default function Home() {
  const router = useRouter();

  const onSearch = (values) => {
    router.push({pathname: '/search', query: values})
  };

  return (
    <AppLayout>
      <div className="container">
        <Media at="xs"><SearchBarMobile onSearch={onSearch}/></Media>
        <Media greaterThan="xs"><SearchBarDesktop onSearch={onSearch}/></Media>
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
