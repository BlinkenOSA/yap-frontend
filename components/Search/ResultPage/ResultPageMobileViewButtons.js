import React, {useState, useEffect} from 'react';
import globalStyle from "../../../styles/global.module.css";
import {Badge, Button} from "antd";

const ResultPageMobileViewButtons = ({selectedDisplay, selectedEntry, onViewChange, count}) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    count > 0 && setTotal(count)
  }, [count]);

  return (
    <div className={globalStyle.MobileViewButtons} style={{textAlign: 'center'}}>
      <Badge
        style={{backgroundColor: '#2E80EC'}}
        count={total}
        showZero
        offset={[-130, 0]}
        overflowCount={9999}
      >
        <Button
          onClick={() => onViewChange('results')}
          className={selectedDisplay === 'results' ? globalStyle.ActiveButton : ''}
        >
          Show Results
        </Button>
      </Badge>
      <Badge
        style={{backgroundColor: '#2E80EC'}}
        count={selectedEntry === 0 ? 0 : 'Filtered'}
        offset={[0, 0]}
        overflowCount={9999}
      >
        <Button
          onClick={() => onViewChange('maps')}
          className={selectedDisplay === 'results' ? '' : globalStyle.ActiveButton}
        >
          Show Map
        </Button>
      </Badge>
    </div>
  )
};

export default ResultPageMobileViewButtons;
