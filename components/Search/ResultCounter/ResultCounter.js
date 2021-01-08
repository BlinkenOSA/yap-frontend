import React from "react";

const ResultCounter = ({count, limit, offset}) => {
  const lmt = limit ? limit : 10;
  const ofst = offset ? offset: 0;

  const recordsStart = parseInt(ofst) + 1;
  const recordsEnd = parseInt(ofst) + parseInt(lmt);

  return (
    <div>
      {`Showing ${recordsStart} - ${recordsEnd} results of ${count} documents`}
    </div>
  )
};

export default ResultCounter;
