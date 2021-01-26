import style from "./Highlight.module.css";
import React, {useState} from "react";

const facetLabels = {
  title_original_search: 'Original Title',
  title_english_search: 'English Title',
  description_search: 'Description',
  subject_search: 'Subject',
  subject_person_search: 'Person',
  city_search: 'Place'
};

const Highlight = ({data}) => {
  return (
    Object.keys(data).map((key, idx) => (
      <div key={idx} className={style.Highlight}>
        <div key={idx} dangerouslySetInnerHTML={{__html: `${facetLabels[key]} | ${data[key]}`}}/>
      </div>
    ))
  );
};

export default Highlight;
