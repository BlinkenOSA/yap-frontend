import React, {useState} from "react";
import {Tabs} from "antd";
import style from "./ResultPage.module.css"
import Image from "next/image";
import ResultPageList from "./ResultPageList";
import ResultPagination from "../ResultPagination/ResultPagination";
import ResultCounter from "../ResultCounter/ResultCounter";
import dynamic from "next/dist/next-server/lib/dynamic";
import Sticky from 'react-stickynode';

const { TabPane } = Tabs;

const ResultPageMap = dynamic(
  () => import('../ResultPageMap/ResultPageMap'),
  { ssr: false }
);

const ResultPage = ({data, query, limit, view='list', offset, selectedFacets, onPageChange, onTabChange, onMarkerClick}) => {
  const getCounter = () => {
    switch (view) {
      case 'list':
        return <ResultCounter count={data.count} limit={limit} offset={offset}/>
      case 'map02':
        return <span/>
      default:
        return ''
    }
  };

  return (
    <div className={style.Results}>
      <Tabs defaultActiveKey={view} tabBarExtraContent={{right: getCounter()}} onChange={onTabChange}>
        <TabPane tab={<span><Image src={'/images/listView.svg'} width={20} height={20}/> </span>} key="list">
          <ResultPagination count={data.count} limit={limit} offset={offset} onPageChange={onPageChange} />
          <ResultPageList data={data.results} highlights={data.highlights} />
          <ResultPagination count={data.count} limit={limit} offset={offset} onPageChange={onPageChange} />
        </TabPane>
        <TabPane tab={<span><Image src={'/images/mapView.svg'} width={20} height={20}/> </span>} key="map02">
          <Sticky enabled={true} top={70}>
            <ResultPageMap params={{query: query, ...selectedFacets}} onMarkerClick={onMarkerClick}/>
          </Sticky>
        </TabPane>
      </Tabs>
    </div>
  )
};

export default ResultPage;
