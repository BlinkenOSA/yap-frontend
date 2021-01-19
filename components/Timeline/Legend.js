import React, { useEffect } from "react";
import style from './Legend.module.css';
import Image from "next/image";

const countriesOnMap = {
  '1990': ['yugoslavia'],
  '1991 June': ['croatia', 'serbian_krajina', 'slovenia', 'yugoslavia',],
  '1991 September': ['croatia', 'macedonia', 'serbian_krajina', 'slovenia', 'yugoslavia',],
  '1992 March': ['croatia', 'macedonia', 'republic_bh', 'serbian_krajina', 'slovenia', 'yugoslavia'],
  '1992 April 7th': ['croatia', 'herzeg_bosnia', 'macedonia', 'republic_bh', 'republika_srpska', 'serbian_krajina', 'slovenia', 'yugoslavia'],
  '1992 April 28th': ['croatia', 'herzeg_bosnia', 'macedonia', 'republic_bh', 'republika_srpska', 'serbian_krajina', 'serbia_montenegro', 'slovenia'],
  '1993 June': ['croatia', 'herzeg_bosnia', 'macedonia', 'republic_bh', 'republika_srpska', 'serbian_krajina', 'serbia_montenegro', 'slovenia', 'western_bosnia'],
  '1995 September': ['croatia', 'herzeg_bosnia', 'macedonia', 'republic_bh', 'republika_srpska', 'serbian_krajina', 'serbia_montenegro', 'slovenia'],
  '1996 April': ['bosnia_herzegovina', 'croatia', 'macedonia', 'serbian_krajina', 'serbia_montenegro', 'slovenia', 'untaes'],
  '1998 January': ['bosnia_herzegovina', 'croatia', 'macedonia', 'serbia_montenegro', 'slovenia'],
  '2008 February': ['bosnia_herzegovina', 'croatia', 'kosovo', 'macedonia', 'montenegro', 'serbia', 'slovenia'],
};

const countries = {
  yugoslavia: {
    name: 'Yugoslavia',
    bgColor: 'rgba(244, 88, 68, 0.8)',
    color: '#FFF'
  },
  slovenia: {
    name: 'Slovenia',
    bgColor: 'rgba(254, 232, 117, 0.8)',
    color: '#666'
  },
  macedonia: {
    name: 'Macedonia',
    bgColor: 'rgba(247, 156, 144, 0.8)',
    color: '#FFF'
  },
  serbian_krajina: {
    name: 'Serbian Krajina',
    bgColor: 'rgba(107, 151, 207, 0.8)',
    color: '#FFF'
  },
  untaes: {
    name: 'UNTAES',
    bgColor: 'rgba(185, 228, 255, 0.8)',
    color: '#333'
  },
  republic_bh: {
    name: 'Republic of Bosnia & Herzegovina',
    bgColor: 'rgba(200, 200, 200, 0.8)',
    color: '#333'
  },
  bosnia_herzegovina: {
    name: 'Bosnia & Herzegovina',
    bgColor: 'rgba(201, 201, 201, 0.8)',
    color: '#333'
  },
  herzeg_bosnia: {
    name: 'Herzeg-Bosnia',
    bgColor: 'rgba(121, 115, 114, 0.8)',
    color: '#FFF'
  },
  serbia_montenegro: {
    name: 'Serbia & Montenegro',
    bgColor: 'rgba(45, 92, 170, 0.8)',
    color: '#FFF'
  },
  republika_srpska: {
    name: 'Republika Srpska',
    bgColor: 'rgba(64, 178, 215, 0.8)',
    color: '#FFF'
  },
  croatia: {
    name: 'Croatia',
    bgColor: 'rgba(254, 190, 28, 0.8)',
    color: '#333'
  },
  western_bosnia: {
    name: 'Western Bosnia',
    bgColor: 'rgba(237, 238, 238, 0.8)',
    color: '#333'
  },
  montenegro: {
    name: 'Montenegro',
    bgColor: 'rgba(131, 174, 189, 0.8)',
    color: '#FFF'
  },
  serbia: {
    name: 'Serbia',
    bgColor: 'rgba(45, 92, 170, 0.8)',
    color: '#FFF'
  },
  kosovo: {
    name: 'Kosovo',
    bgColor: 'rgba(71, 47, 146, 0.8)',
    color: '#FFF'
  }
};

const Legend = ({selectedLayer}) => {
  if (selectedLayer) {
    return (
      <div className={style.Info}>
        {countriesOnMap[selectedLayer].map(c => (
          <div
            className={style.Badge}
            style={{backgroundColor: countries[c].bgColor, color: countries[c].color}}
          >
            <img height={50} src={`/maps/icons/${c}.svg`} />
            <div>{countries[c].name}</div>
          </div>
        ))}
      </div>
    )
  } else {
    return (<span/>)
  }

};

export default Legend;
