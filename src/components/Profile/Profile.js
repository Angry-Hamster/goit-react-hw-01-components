import React from "react";
import Info from './Info'
import styles from './Profile.module.css'
import userInfo from './user.json'

const Profile = ({avatar, name, tag, location}) => {
  let stats = userInfo.stats
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
          <Info stats={stats}/>
        </ul>
      </div>
    </>
  );
};

Profile.defaultProps = {
  avatar: userInfo.avatar,
  name: userInfo.name,
  tag: userInfo.tag,
  location: userInfo.location,
  stats: userInfo.stats
}

export default Profile;

