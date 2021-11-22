import React from 'react';
import Highlight from "../Highlight/Highlight";
import {AutoSizer, CellMeasurer, CellMeasurerCache, List} from 'react-virtualized';
import listStyle from "./ResultPageMapList.module.css";
import {CloseOutlined} from '@ant-design/icons';
import style from "../Facets/SelectedFacets.module.css";

const ResultPageMapList = ({data, highlights, selectedCity, onRemoveCity, onCloseClick, selectedEntry, onSelectEntry}) => {
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 25,
    minHeight: 25
  });

  const renderDates = (startDate, endDate) => {
    if (endDate) {
      if (startDate !== endDate) {
        return `(${startDate} - ${endDate})`
      } else {
        return `(${startDate})`
      }
    } else {
      return `(${startDate})`
    }
  };

  const renderTitle = (d) => {
    if (highlights.hasOwnProperty(d.id)) {
      const h = highlights[d.id];
      if (h.hasOwnProperty('title_original_search')) {
        return <div dangerouslySetInnerHTML={
          {__html: `${h.title_original_search}`}
        }/>
      }
      if (h.hasOwnProperty('title_english_search')) {
        return <div dangerouslySetInnerHTML={
          {__html: `${h.title_english_search}`}
        }/>
      }
    }
    return `${d.title_original}`
  };

  const renderSearchHit = (d) => {
    if (highlights.hasOwnProperty(d.id)) {
      const h = highlights[d.id];
      return (<Highlight data={h} id={d.id} type={'map'}/>);

    }
  };

  const onSelectRecord = (id) => {
    if (selectedEntry === id) {
      onSelectEntry(0);
    } else {
      onSelectEntry(id);
    }
  };

  const renderRow = ({ index, key, style, parent }) => (
    <CellMeasurer
      key={key}
      cache={cache}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <div key={key} style={style}>
        <div
          className={data[index].id === selectedEntry ? listStyle.ResultItemDataSelected : listStyle.ResultItemData}
          onClick={() => onSelectRecord(data[index].id)}
        >
          <div className={listStyle.Title}>
            {renderTitle(data[index])}
          </div>
          {
            data[index].hasOwnProperty('genre') ?
              <div className={listStyle.Genre}>
                <span>{data[index].genre.join('/')}</span>
              </div> :
              ''
          }
          <div>
            <span className={listStyle.Label}>Date(s) of creation: </span>
            {renderDates(data[index].date_of_creation_start, data[index].date_of_creation_end)}
          </div>
          <div>
            <span className={listStyle.Label}>Type:</span> {data[index].type}
          </div>
          <div>
            <React.Fragment>
              {renderSearchHit(data[index])}
            </React.Fragment>
          </div>
        </div>
      </div>
    </CellMeasurer>
  );

  return (
    <React.Fragment>
      <div className={listStyle.Header}>
        <span>
          Records related to:
        </span>
        <a className={listStyle.CloseButton} onClick={onCloseClick}>
          <CloseOutlined />
        </a>
      </div>
      { selectedCity.length > 0 &&
        <div className={listStyle.SelectedTags}>
          {
            selectedCity.map((sc, index) => (
              <span className={listStyle.SelectedTag} key={index}>
              {sc}
                <a className={style.RemoveIcon} onClick={() => onRemoveCity(index)}><CloseOutlined/></a>
            </span>
            ))
          }
        </div>
      }
      <div style={{height: 'calc(100vh - 90px)'}}>
        <AutoSizer>
          {({ width, height }) => (
            <List
              width={width}
              height={height}
              deferredMeasurementCache={cache}
              rowCount={data.length}
              rowHeight={cache.rowHeight}
              rowRenderer={renderRow}
              overscanRowCount={3}
            />
          )}
        </AutoSizer>
      </div>
    </React.Fragment>
  )
};

export default ResultPageMapList;
