import React from "react";

import PropTypes from 'prop-types';

import styles from './Profile.module.css'

const Info = ({name, stats, key}) => {
  return (
  <>
    <li key={key} className={styles.li}>
      <span>{name}</span>
      <span className={styles.bold}>{stats}</span>
    </li>
  </>
  );
};

Info.propTypes = {
  name: PropTypes.string,
  stats: PropTypes.number,
  key: PropTypes.number
}

export default Info;