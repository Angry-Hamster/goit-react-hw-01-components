import React from "react";
import StatisticItem from "./Sraristic-item.js";
import data from "./statistical-data.json";
import styles from './Statstscs.module.css'

const Statistics = ({title}) => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.head}>
        <h4>{title}</h4>
        </div>
        <ul className={styles.ul} id='colorUl'>
          <StatisticItem data={data}/>
        </ul>
      </div>
    </>
  );
};

Statistics.defaultProps = {
  title: 'title'
};

export default Statistics;
