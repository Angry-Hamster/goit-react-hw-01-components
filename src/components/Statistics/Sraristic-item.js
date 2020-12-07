import React from "react";
import styles from './Statstscs.module.css'

const Info = ({data}) => {
  return (
    <>
      {data.map((elem, i) => {
        return(<li className={styles.li} key={i}>
          {
            <div id={elem.id}>
              <p className={styles.p}>{elem.label}</p>
              <p className={styles.p}>{elem.percentage}%</p>
            </div>
          }
        </li>)
      })}

    </>
  );
};

Info.defaultProps = [{
  label: 'name',
  percentage: '$',
  id: 1
}]

export default Info;

