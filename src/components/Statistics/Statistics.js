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
          {data.map((elem) => {
            return(<li className={styles.li}>
              {
                <StatisticItem label={elem.label} percentage={elem.percentage} id={elem.id}/>
              }
            </li>)
          })}
        </ul>
      </div>
    </>
  );
};

Statistics.defaultProps = {
  title: 'title'
};

export default Statistics;
