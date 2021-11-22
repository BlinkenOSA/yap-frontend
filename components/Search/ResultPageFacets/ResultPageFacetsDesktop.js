import React, {useEffect, useState} from 'react';
import {Button, Col, Row} from 'antd';
import style from "./ResultPageFacets.module.css";
import globalStyle from "../../../styles/global.module.css";
import DateRangeFacet from "./facets/DateRangeFacet";
import LongTextFacet from "./facets/LongTextFacet";

const ResultPageFacetsDesktop = ({ facets, selectedFacets, onFacetSelect, onDateRangeFacetSelect,
                            onFacetRemove, onDateRangeFacetRemove }) => {

  const [selectedFacetType, setSelectedFacetType] = useState('creator');

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

  const renderFacetPanel = () => {
    switch (selectedFacetType) {
      case 'type':
        return (
          <LongTextFacet
            selectedFacets = {selectedFacets.hasOwnProperty('type') ? selectedFacets['type'] : []}
            onSelect={(value) => {onFacetSelect('type', value)}}
            onRemove={(value) => {onFacetRemove('type', value)}}
            facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['type_facet'] : []}
          />
        );
      case 'creator':
        return (
          <LongTextFacet
            selectedFacets = {selectedFacets.hasOwnProperty('creator') ? selectedFacets['creator'] : []}
            onSelect={(value) => {onFacetSelect('creator', value)}}
            onRemove={(value) => {onFacetRemove('creator', value)}}
            facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['creator_facet'] : []}
            search={true}
          />
        );
      case 'temporal_coverage':
        return (
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
        );
      case 'subject_person':
        return (
          <LongTextFacet
            selectedFacets = {selectedFacets.hasOwnProperty('subject_person') ? selectedFacets['subject_person'] : []}
            onSelect={(value) => {onFacetSelect('subject_person', value)}}
            onRemove={(value) => {onFacetRemove('subject_person', value)}}
            facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['subject_person_facet'] : []}
            search={true}
          />
        );
      case 'genre':
        return (
          <LongTextFacet
            selectedFacets = {selectedFacets.hasOwnProperty('genre') ? selectedFacets['genre'] : []}
            onSelect={(value) => {onFacetSelect('genre', value)}}
            onRemove={(value) => {onFacetRemove('genre', value)}}
            facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['genre_facet'] : []}
            search={true}
          />
        );
      case 'subject':
        return (
          <LongTextFacet
            selectedFacets = {selectedFacets.hasOwnProperty('subject') ? selectedFacets['subject'] : []}
            onSelect={(value) => {onFacetSelect('subject', value)}}
            onRemove={(value) => {onFacetRemove('subject', value)}}
            facets={facets.hasOwnProperty('facet_fields') ? facets['facet_fields']['subject_facet'] : []}
            search={true}
          />
        );
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <Row gutter={12}>
        <Col xs={24}>
          <div className={style.Title}>Filter by:</div>
        </Col>
        <Col xs={24}>
          <div className={globalStyle.NavButtons}>
            <Button
              onClick={() => setSelectedFacetType('type')}
              className={selectedFacetType === 'type' ? globalStyle.ActiveButton : ''}>
              Type
            </Button>
            <Button
              onClick={() => setSelectedFacetType('creator')}
              className={selectedFacetType === 'creator' ? globalStyle.ActiveButton : ''}>
              Creator
            </Button>
            <Button
              onClick={() => setSelectedFacetType('temporal_coverage')}
              className={selectedFacetType === 'temporal_coverage' ? globalStyle.ActiveButton : ''}>
              Temporal Coverage
            </Button>
            <Button
              onClick={() => setSelectedFacetType('subject_person')}
              className={selectedFacetType === 'subject_person' ? globalStyle.ActiveButton : ''}>
              People
            </Button>
            <Button
              onClick={() => setSelectedFacetType('genre')}
              className={selectedFacetType === 'genre' ? globalStyle.ActiveButton : ''}>
              Genre
            </Button>
            <Button
              onClick={() => setSelectedFacetType('subject')}
              className={selectedFacetType === 'subject' ? globalStyle.ActiveButton : ''}>
              Keywords
            </Button>
          </div>
        </Col>
      </Row>
      {renderFacetPanel()}
    </React.Fragment>
  )
};

export default ResultPageFacetsDesktop;
