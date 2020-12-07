import React from "react";
import styles from './Statstscs.module.css'

const Info = ({label, percentage, id}) => {
  return (
    <>
      <div id={id}>
        <p className={styles.p}>{label}</p>
        <p className={styles.p}>{percentage}%</p>
      </div>
    </>
  );
};

Info.defaultProps = {
  label: 'name',
  percentage: '$',
  id: 1
}

export default Info;