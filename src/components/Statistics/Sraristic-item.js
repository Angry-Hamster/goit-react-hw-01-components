import React from "react";

import PropTypes from 'prop-types';

import styles from './Statstscs.module.css'

const Info = ({label, percentage, id, key}) => {
  return (
    <>
     <div id={id} key={key}>
        <p className={styles.p}>{label}</p>
        <p className={styles.p}>{percentage}%</p>
      </div>
    </>
  );
};

Info.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  percentage: PropTypes.number,
  key: PropTypes.number
}

export default Info;

