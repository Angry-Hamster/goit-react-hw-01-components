import React from "react";
import styles from './Profile.module.css'

const Info = ({stats}) => {
  return (
  <>
    {Object.keys(stats).map(item=>{
      return(
            <li className={styles.li}>
              <span>{item}</span>
              <span className={styles.bold}>{stats[item]}</span>
            </li>
          )
      })}
  </>
  );
};

Info.defaultProps = {
  stats: {key: 'null'}
}

export default Info;