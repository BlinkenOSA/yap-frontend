import SelectedFacets from "./SelectedFacets";
import React, {useState} from "react";
import ResultPageFacetsDesktop from "../ResultPageFacets/ResultPageFacetsDesktop";
import {useRouter} from "next/router";
import style from "../ResultPageFacets/ResultPageFacets.module.css";
import {useDeepCompareEffect} from "react-use";

const Facets = ({query, selectedFacets, facetData}) => {
  const router = useRouter();
  const [facets, setFacets] = useState({});

  useDeepCompareEffect(() => {
    if (Object.keys(facetData).length > 0) {
      setFacets(facetData);
    }
  }, [facetData]);

  const handleFacetSelect = (field, value) => {
    if (selectedFacets.hasOwnProperty(field)) {
      if (Array.isArray(selectedFacets[field])) {
        if (!selectedFacets[field].includes(value)) {
          selectedFacets[field].push(value)
        }
      } else {
        if (!selectedFacets[field].includes(value)) {
          selectedFacets[field] = [selectedFacets[field], value]
        }
      }
    } else {
      selectedFacets[field] = value;
    }

    router.push({
      pathname: '/search', query: {
        query: query,
        ...selectedFacets
      }
    })
  };

  const handleDateRangeFacetSelect = (dateRangeValues) => {
    const newFacets = {...selectedFacets, ...dateRangeValues};

    router.push({
      pathname: '/search', query: {
        query: query,
        ...newFacets
      }
    })
  };

  const handleFacetRemove = (field, value) => {
    if (selectedFacets.hasOwnProperty(field)) {
      if (Array.isArray(selectedFacets[field])) {
        if (selectedFacets[field].includes(value)) {
          selectedFacets[field] = selectedFacets[field].filter(facet => facet !== value);
        }
      } else {
        if (selectedFacets[field] === value) {
          delete selectedFacets[field]
        }
      }
    }

    router.push({
      pathname: '/search', query: {
        query: query,
        ...selectedFacets
      }
    })
  };

  const handleDateRangeFacetRemove = (dateStartField, dateEndField) => {
    delete selectedFacets[dateStartField];
    delete selectedFacets[dateEndField];

    router.push({
      pathname: '/search', query: {
        query: query,
        ...selectedFacets
      }
    })
  };

  return (
    <div className={style.Facets}>
      <ResultPageFacetsDesktop
        selectedFacets={selectedFacets}
        onFacetSelect={handleFacetSelect}
        onDateRangeFacetSelect={handleDateRangeFacetSelect}
        onFacetRemove={handleFacetRemove}
        onDateRangeFacetRemove={handleDateRangeFacetRemove}
        facets={facets}
      />
    </div>
  )
};

export default Facets;
