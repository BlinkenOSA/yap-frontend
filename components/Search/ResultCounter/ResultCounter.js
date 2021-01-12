import React from "react";
import {Media} from "../../Media/Media";

const ResultCounter = ({count, limit, offset}) => {
  const lmt = limit ? limit : 10;
  const ofst = offset ? offset: 0;

  const recordsStart = parseInt(ofst) + 1;
  const recordsEnd = parseInt(ofst) + parseInt(lmt);

  return (
    <React.Fragment>
      <Media at="xs">
        <div>
          {`${recordsStart} - ${recordsEnd} / ${count}`}
        </div>
      </Media>
      <Media greaterThan="xs">
        <div>
          {`Showing ${recordsStart} - ${recordsEnd} results of ${count} documents`}
        </div>
      </Media>
    </React.Fragment>

  )
};

export default ResultCounter;
