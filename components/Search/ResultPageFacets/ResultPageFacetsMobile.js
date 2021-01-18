import React, {useEffect, useState} from 'react';
import { Collapse } from 'antd';
import style from "./ResultPageFacets.module.css";
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import TextFacet from "./facets/TextFacet";
import DateRangeFacet from "./facets/DateRangeFacet";
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'

const { Panel } = Collapse;

const ResultPageFacetsMobile = ({ facets, selectedFacets, onFacetSelect, onDateRangeFacetSelect,
                            onFacetRemove, onDateRangeFacetRemove }) => {
  const [selectedFacetsValues, setSelectedFacetsValues] = useState(['type', 'creator']);
  const [facetsOpen, setFacetsOpen] = useState(false);

  useEffect(() => {
    if (selectedFacets && Object.keys(selectedFacets).length > 0) {
      setSelectedFacetsValues(Object.keys(selectedFacets))
    }
  }, [selectedFacets]);

  const getDateRangeSelectedFacets = (startField, endField) => {
    let startDate;
    let endDate;

    if (selectedFacets.hasOwnProperty(startField)) {
      startDate = selectedFacets[startField];
    }
    if (selectedFacets.hasOwnProperty(endField)) {
      endDate = selectedFacets[endField];
    }
    return [startDate, endDate]
  };

  return (
    <div className={style.Facets}>
      <div
        onClick={() => setFacetsOpen(!facetsOpen)}
        className={style.FilterText}>
        <span className={style.FilterTextMobile}>{facetsOpen ? `Close Filters` : `Open Filters`}</span>
      </div>
      <div className={facetsOpen ? '' : style.FacetsOff}>
        <Collapse
          bordered={false}
          defaultActiveKey={selectedFacetsValues}
          expandIconPosition={'right'}
          expandIcon={(panelProps) => (panelProps.isActive ? <PlusOutlined /> : <MinusOutlined/>)}
        >
          <Panel header="Type" key="type" collapsible={'disabled'}>
            <TextFacet
              selectedFacets = {selectedFacets.hasOwnProperty('type') ? selectedFacets['type'] : []}
              onSelect={(value) => {onFacetSelect('type', value)}}
              onRemove={(value) => {onFacetRemove('type', value)}}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['type_facet'] : []}
            />
          </Panel>
          <Panel header="Creator" key="creator">
            <TextFacet
              selectedFacets = {selectedFacets.hasOwnProperty('creator') ? selectedFacets['creator'] : []}
              onSelect={(value) => {onFacetSelect('creator', value)}}
              onRemove={(value) => {onFacetRemove('creator', value)}}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['creator_facet'] : []}
              search={true}
            />
          </Panel>
          <Panel header="Temporal Coverage" key="temporal_coverage">
            <DateRangeFacet
              selectedFacets = {getDateRangeSelectedFacets('year_coverage_start', 'year_coverage_end')}
              onSelect={(startValue, endValue) => {
                onDateRangeFacetSelect({
                  'year_coverage_start': startValue,
                  'year_coverage_end': endValue
                })
              }}
              onRemove={() => onDateRangeFacetRemove('year_coverage_start', 'year_coverage_end')}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['temporal_coverage_facet'] : []}
            />
          </Panel>
          <Panel header="People" key="subject_person">
            <TextFacet
              selectedFacets = {selectedFacets.hasOwnProperty('subject_person') ? selectedFacets['subject_person'] : []}
              onSelect={(value) => {onFacetSelect('subject_person', value)}}
              onRemove={(value) => {onFacetRemove('subject_person', value)}}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['subject_person_facet'] : []}
              search={true}
            />
          </Panel>
          <Panel header="Genre" key="genre">
            <TextFacet
              selectedFacets = {selectedFacets.hasOwnProperty('genre') ? selectedFacets['genre'] : []}
              onSelect={(value) => {onFacetSelect('genre', value)}}
              onRemove={(value) => {onFacetRemove('genre', value)}}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['genre_facet'] : []}
              search={true}
            />
          </Panel>
          <Panel header="Keywords" key="subject">
            <TextFacet
              selectedFacets = {selectedFacets.hasOwnProperty('subject') ? selectedFacets['subject'] : []}
              onSelect={(value) => {onFacetSelect('subject', value)}}
              onRemove={(value) => {onFacetRemove('subject', value)}}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['subject_facet'] : []}
              search={true}
            />
          </Panel>
          <Panel header="Places" key="place">
            <TextFacet
              selectedFacets = {selectedFacets.hasOwnProperty('city') ? selectedFacets['city'] : []}
              onSelect={(value) => {onFacetSelect('city', value)}}
              onRemove={(value) => {onFacetRemove('city', value)}}
              facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['city_facet'] : []}
              search={true}
            />
          </Panel>
        </Collapse>
      </div>
    </div>
  )
};

export default ResultPageFacetsMobile;
