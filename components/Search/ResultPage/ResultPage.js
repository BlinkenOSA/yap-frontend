import React from "react";
import {Tabs} from "antd";
import style from "./ResultPage.module.css"
import Image from "next/image";
import ResultPageList from "./ResultPageList";
import RecordsPerPage from "../RecordsPerPage/RecordsPerPage";
import ResultPagination from "../ResultPagination/ResultPagination";

const { TabPane } = Tabs;

const ResultPage = ({data, limit, offset, onPageChange, onRecordsPerPageChange}) => {
  return (
    <div className={style.Results}>
      <Tabs defaultActiveKey="list" tabBarExtraContent={
        {left: <RecordsPerPage recordsPerPage={limit} onChange={onRecordsPerPageChange}/>}
      }>
        <TabPane tab={<span><Image src={'/images/listView.svg'} width={25} height={25}/></span>} key="list">
          <ResultPageList data={data.results} />
          <ResultPagination count={data.count} limit={limit} offset={offset} onPageChange={onPageChange} />
        </TabPane>
        <TabPane tab={<span><Image src={'/images/thumbnailView.svg'} width={25} height={25}/></span>} key="grid">Tab 2</TabPane>
        <TabPane tab={<span><Image src={'/images/mapView.svg'} width={25} height={25}/></span>} key="map">Tab 3</TabPane>
      </Tabs>
    </div>
  )
};

export default ResultPage;
