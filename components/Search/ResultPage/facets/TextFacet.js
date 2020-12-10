import React, {useState, useEffect} from "react";
import { FixedSizeList as List } from 'react-window';
import {Badge, Button, Typography, Skeleton, Spin} from 'antd';
import facetStyle from "./TextFacet.module.css";
const { Paragraph } = Typography;
import { Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { Search } = Input;

const TextFacet = ({facets, selectedFacets, search=false, onSelect, onRemove}) => {
  const [filterValue, setFilterValue] = useState('');
  const [facetOriginalData, setFacetOriginalData] = useState([]);
  const [facetData, setFacetData] = useState([]);

  useEffect(() => {
    facetInit();
  }, [facets]);

  useEffect(() => {
    if (filterValue === '') {
      facetInit();
    }

    if (filterValue.length > 2) {
      const matches = facetOriginalData.filter(f => f['text'].toLowerCase().includes(filterValue.toLowerCase()));
      setFacetData(matches);
    }
  }, [filterValue]);

  const facetInit = () => {
    const fData = [];
    facets.forEach((facet, index) => {
      if (index % 2 === 0) {
        fData.push({text: facet, count: facets[index+1]})
      }
    });
    setFacetOriginalData(fData);
    setFacetData(fData);
  };

  const Row = ({ index, style }) => {
    if (selectedFacets.includes(facetData[index]['text'])) {
      return (
        <div style={style}>
          <div className={facetStyle.FacetWrapper}>
            <Paragraph ellipsis={true} className={facetStyle.FacetActiveText}>
                {facetData[index]['text']}
            </Paragraph>
            <Paragraph className={facetStyle.FacetRemove}>
              <a className={facetStyle.FacetRemoveLink} onClick={() => onFacetRemoveClick(facetData[index]['text'])}>
                <CloseOutlined />
              </a>
            </Paragraph>
          </div>
        </div>
      )
    } else {
      return (
        <div style={style}>
          <div className={facetStyle.FacetWrapper}>
            <Paragraph ellipsis={true} className={facetStyle.FacetText}>
              <a className={facetStyle.FacetLink} onClick={() => onFacetClick(facetData[index]['text'])}>
                {facetData[index]['text']}
              </a>
            </Paragraph>
            <Paragraph className={facetStyle.FacetNumber}>
              ({facetData[index]['count']})
            </Paragraph>
          </div>
        </div>
      )
    }
  };

  const onFacetClick = (value) => {
    onSelect(value)
  };

  const onFacetRemoveClick = (value) => {
    onRemove(value)
  };

  const onSearch = (value) => {
    setFilterValue(value);
  };

  if (facets.length > 0) {
    return(
      <React.Fragment>
        {search &&
          <div className={facetStyle.Search}>
            <Search
              placeholder="Search..."
              onSearch={onSearch}
              style={{ width: '100%' }}
              allowClear={true}
              enterButton
            />
          </div>
        }
        <List
          height={facetData.length > 10 ? 300 : facetData.length * 25 + 15}
          itemCount={facetData.length}
          itemSize={25}
          width={'95%'}
          style={{marginLeft: '10px', marginTop: '10px'}}
        >
          {Row}
        </List>
      </React.Fragment>
    )
  } else {
    return (
      <div style={{marginLeft: '10px', marginTop: '10px'}}>
        <Spin>
          <Skeleton paragraph={{rows: 4, width: ['100%', '100%', '100%', '100%']}}/>
        </Spin>
      </div>
    )
  }
};

export default TextFacet;
