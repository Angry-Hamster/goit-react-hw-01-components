import styles from "./style.module.css"

import PropTypes from 'prop-types';

import FriendItem from './FriendItem.js'

function FriendList({friends}) {
  return (
    <>
      <ul className={styles.body}>
      {friends.map((elem) => {
        return(
          <FriendItem key={elem.id} avatar={elem.avatar} name={elem.name} isOnline={elem.isOnline}/>
        )
      })}
      </ul>
    </>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array
}

export default FriendList;
