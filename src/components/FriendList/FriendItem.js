import styles from "./style.module.css";

import PropTypes from 'prop-types';

function FriendItem({key, avatar, name, isOnline}) {
  return (
    <>
      <li className={styles.li} key={key}>
        <span className={isOnline ? styles.enable : styles.disable}></span>
        <img src={avatar} alt="avatar" width="48" />
        <p className={styles.p}>{name}</p>
      </li>
    </>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  key: PropTypes.number
}

export default FriendItem;
