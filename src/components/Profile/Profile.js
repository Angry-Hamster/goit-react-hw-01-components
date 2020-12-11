import React from "react";

import PropTypes from 'prop-types';

import Info from './Info'
import styles from './Profile.module.css'

const Profile = ({avatar, name, tag, location, stats}) => {
  return (
    <>
      <div className={styles.body}>
        <div className={styles.main}>
          <img
            src={avatar}
            alt="user avatar"
            className={styles.image}
          />
          <div className={styles.list}>
            <p className={styles.bold}>{name}</p>
            <p className={styles.element}>@{tag}</p>
            <p className={styles.element}>{location}</p>
          </div>
        </div>

        <ul className={styles.ul} id='ul'>
        {
          Object.keys(stats).map((item, i)=>{
            return(
              <Info key={i} name={item} stats={stats[item]}/>
            )
      })
    }
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object
}

export default Profile;

