import React from "react";
import {Tabs} from "antd";
import style from "./ResultPage.module.css"
import Image from "next/image";
import ResultPageList from "./ResultPageList";
import ResultPagination from "../ResultPagination/ResultPagination";
import ResultCounter from "../ResultCounter/ResultCounter";
import dynamic from "next/dist/next-server/lib/dynamic";

const { TabPane } = Tabs;

const ResultPageMap = dynamic(
  () => import('./ResultPageMap'),
  { ssr: false }
);

const ResultPage = ({data, query, limit, view='list', offset, selectedFacets, onPageChange, onMarkerClick}) => {
  return (
    <div className={style.Results}>
      <Tabs defaultActiveKey={view} tabBarExtraContent={
        {right: <ResultCounter count={data.count} limit={limit} offset={offset}/>}
      }>
        <TabPane tab={<span><Image src={'/images/listView.svg'} width={25} height={25}/></span>} key="list">
          <ResultPagination count={data.count} limit={limit} offset={offset} onPageChange={onPageChange} />
          <ResultPageList data={data.results} />
          <ResultPagination count={data.count} limit={limit} offset={offset} onPageChange={onPageChange} />
        </TabPane>
        <TabPane tab={<span><Image src={'/images/mapView.svg'} width={25} height={25}/></span>} key="map">
          <ResultPageMap params={{query: query, ...selectedFacets}} onMarkerClick={onMarkerClick}/>
        </TabPane>
      </Tabs>
    </div>
  )
};

export default ResultPage;
