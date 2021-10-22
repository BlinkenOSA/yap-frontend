import useSWR from "swr";
import {API, fetcher} from "../../../utils/api";
import React from "react";
import ResultPageMapList from "./ResultPageMapList";
import {Spin} from "antd";

const ResultPageMapEntries = ({params, selectedCity, onCloseClick, onRemoveCity, selectedEntry, onSelectEntry}) => {
  const {data, error} = useSWR([`${API}/repository/records_all/`, params], fetcher);

  return (
    data ?
    <ResultPageMapList
      data={data.results}
      highlights={data.highlights}
      selectedCity={selectedCity}
      onCloseClick={onCloseClick}
      onRemoveCity={onRemoveCity}
      selectedEntry={selectedEntry}
      onSelectEntry={onSelectEntry}
    /> :
      <div style={{textAlign: 'center', marginTop: '200px'}}>
        <Spin size={'large'} />
      </div>
  )
};

export default ResultPageMapEntries;
