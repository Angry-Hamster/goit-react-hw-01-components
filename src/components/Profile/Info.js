import React from "react";
import styles from './Profile.module.css'

const Info = ({stats}) => {
  return (
  <>
    {
    Object.keys(stats).map((item, i)=>{
      let stat = stats[item].toString()
      return(
            <li key={i} className={styles.li}>
              <span>{item}</span>
              <span className={styles.bold}>{stat}</span>
            </li>
          )
      })
    }
  </>
  );
};

Info.defaultProps = {
  stats: [{'followers': 'Nan', 'views': 'Nan', 'likes': 'Nan'}]
}

export default Info;