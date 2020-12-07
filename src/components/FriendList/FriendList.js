import styles from "./style.module.css"

import friendInfo from './friends.json'
import FriendItem from './FriendItem.js'

function FriendList() {
  return (
    <>
      <ul className={styles.body}>
        <FriendItem friendInfo={friendInfo}/>
      </ul>
    </>
  );
}

export default FriendList;
