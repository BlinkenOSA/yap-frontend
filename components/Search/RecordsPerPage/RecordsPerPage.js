import React from "react";
import style from "./RecordsPerPage.module.css";
import {Dropdown, Menu} from 'antd';
import { RightOutlined } from '@ant-design/icons';

const RecordsPerPage = ({recordsPerPage, onChange}) => {
  const onSelect = (value) => {
    onChange(value);
  };

  const menu = (
    <Menu>
      <Menu.Item key="10">
        <a onClick={() => onSelect(10)}>10</a>
      </Menu.Item>
      <Menu.Item key="20">
        <a onClick={() => onSelect(20)}>20</a>
      </Menu.Item>
      <Menu.Item key="50">
        <a onClick={() => onSelect(50)}>50</a>
      </Menu.Item>
      <Menu.Item key="100">
        <a onClick={() => onSelect(100)}>100</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={style.RecordsPerPageWrapper}>
      <Dropdown overlay={menu} trigger={['click']}>
        <a onClick={e => e.preventDefault()} className={style.Button}>
          Per page: {recordsPerPage ? recordsPerPage : 10} <RightOutlined />
        </a>
      </Dropdown>
    </div>
  )
};

export default RecordsPerPage;
