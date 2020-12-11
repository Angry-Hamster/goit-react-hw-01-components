import React from "react";

import PropTypes from 'prop-types';

import StatisticItem from "./Sraristic-item.js";
import styles from './Statstscs.module.css'
import randomColor from './randomColor.js'

const Statistics = ({title, stats}) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.head}>
        <h4>{title}</h4>
        </div>
        <ul className={styles.ul} id='colorUl'>
        {stats.map((elem, i) => {
          return(<li className={styles.list} key={i} style={{backgroundColor: randomColor()}}>
            {
              <StatisticItem id={elem.id} label={elem.label} percentage={elem.percentage} key={i}/>
            }
          </li>)
        })}
        </ul>
      </div>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  title: PropTypes.string
}

export default Statistics;
