import React, { useEffect } from "react";
import style from './Legend.module.css';

const countriesOnMap = {
  'Off': [],
  '1990 December': ['sfr_yugoslavia'],
  '1991 June 25': ['slovenia', 'croatia', 'eastern_slavonia', 'kninska_krajina', 'sfr_yugoslavia',],
  '1992 March 3': ['slovenia', 'croatia', 'serbian_krajina', 'bosnia_herzegovina', 'bosanska_krajina', 'eastern_herzegovina', 'romanija', 'ne_bosnia', 'sfr_yugoslavia', 'macedonia'],
  '1993 August 28': ['slovenia', 'croatia', 'serbian_krajina', 'bosnia_herzegovina', 'western_bosnia', 'republika_srpska', 'herzeg_bosnia', 'fr_yugoslavia', 'macedonia'],
  '1995 December 14': ['slovenia', 'croatia', 'serbian_krajina', 'bosnia_federation', 'republika_srpska', 'fr_yugoslavia', 'macedonia'],
  '1998 January 15': ['slovenia', 'croatia', 'bosnia_herzegovina', 'fr_yugoslavia', 'macedonia'],
  '2008 February 17': ['slovenia', 'croatia', 'bosnia_herzegovina', 'serbia', 'montenegro', 'kosovo', 'macedonia'],
};

const countries = {
  sfr_yugoslavia: {
    name: 'Socialist Federal Republic of Yugoslavia',
    bgColor: 'rgba(244, 88, 68, 0.8)',
    color: '#FFF'
  },
  fr_yugoslavia: {
    name: 'Federal Republic of Yugoslavia',
    bgColor: 'rgba(45, 92, 170, 0.8)',
    color: '#FFF'
  },
  slovenia: {
    name: 'Slovenia',
    bgColor: 'rgba(63, 191, 114, 0.8)',
    color: '#FFF'
  },
  macedonia: {
    name: 'Macedonia',
    bgColor: 'rgba(255, 156, 148, 0.8)',
    color: '#FFF'
  },
  bosanska_krajina: {
    name: 'SAO Bosanska Krajina',
    bgColor: 'rgba(204, 204, 204, 0.8)',
    color: '#333'
  },
  serbian_krajina: {
    name: 'Serbian Krajina',
    bgColor: 'rgba(47, 128, 237, 0.8)',
    color: '#FFF'
  },
  kninska_krajina: {
    name: 'SAO Kninska Krajina',
    bgColor: 'rgba(136, 81, 161, 0.8)',
    color: '#FFF'
  },
  eastern_slavonia: {
    name: 'SAO of Eastern Slavonia, Baranja and Western Syrmia',
    bgColor: 'rgba(0, 173, 164, 0.8)',
    color: '#FFF'
  },
  romanija: {
    name: 'SAO Romanija',
    bgColor: 'rgba(255, 123, 172, 0.8)',
    color: '#FFF'
  },
  eastern_herzegovina: {
    name: 'SAO Eastern Herzegovina',
    bgColor: 'rgba(255, 217, 17, 0.8)',
    color: '#333'
  },
  ne_bosnia: {
    name: 'SAO North Eastern Bosnia',
    bgColor: 'rgba(102, 45, 145, 0.8)',
    color: '#FFF'
  },
  bosnia_herzegovina: {
    name: 'Bosnia & Herzegovina',
    bgColor: 'rgba(153, 153, 153, 0.8)',
    color: '#FFF'
  },
  brcko: {
    name: 'Brcko',
    bgColor: 'rgba(255, 255, 255, 0.8)',
    color: '#333'
  },
  herzeg_bosnia: {
    name: 'Croatian Republic of Herzeg-Bosnia',
    bgColor: 'rgba(204, 204, 204, 0.8)',
    color: '#333'
  },
  bosnia_federation: {
    name: 'Federation of Bosnia & Herzegovina',
    bgColor: 'rgba(153, 153, 153, 0.8)',
    color: '#FFF'
  },
  republika_srpska: {
    name: 'Republika Srpska',
    bgColor: 'rgba(64, 178, 215, 0.8)',
    color: '#FFF'
  },
  croatia: {
    name: 'Croatia',
    bgColor: 'rgba(252, 202, 118, 0.8)',
    color: '#FFF'
  },
  western_bosnia: {
    name: 'Western Bosnia',
    bgColor: 'rgba(102, 102, 102, 0.8)',
    color: '#FFF'
  },
  montenegro: {
    name: 'Montenegro',
    bgColor: 'rgba(255, 158, 62, 0.8)',
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
