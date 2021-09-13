import style from "./Highlight.module.css";
import React, {useState} from "react";

const facetLabels = {
  description_search: 'Description',
  subject_search: 'Subject',
  subject_person_search: 'Person',
  city_search: 'Place'
};



const Highlight = ({data, id}) => {
  const countHighligts = () => {
    let count = 0;
    Object.keys(data).map((key, idx) => {
      if (facetLabels.hasOwnProperty(key)) {
        count += 1;
      }
    });
    return count;
  };

  const displayHighlights = () => {
    return (
      Object.keys(data).map((key, idx) => {
        if (facetLabels.hasOwnProperty(key)) {
          return (
            <div key={idx} className={style.HighlightWrapper}>
              <div key={idx} dangerouslySetInnerHTML={{__html: `${facetLabels[key]} | ${key === 'description_search' ? `... ${data[key]} ...` : data[key]}`}}/>
            </div>
          )
        }
      })
    );
  };

  if (countHighligts() > 0) {
    return (
      <div className={style.Highlight}>
        {displayHighlights()}
        <a className={style.More} href={`/record/${id}`}>
          more
        </a>
      </div>
    )
  } else {
    return ''
  }
};

export default Highlight;
