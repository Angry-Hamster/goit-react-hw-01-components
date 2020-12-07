import styles from "./style.module.css"

import friendInfo from './friends.json'
import FriendItem from './FriendItem.js'

function FriendList() {
  return (
    <>
      <ul className={styles.body}>
      {friendInfo.map((elem) => {
            return(
              <FriendItem friendInfo={elem}/>
            )
      })}
      </ul>
    </>
  );
}

export default FriendList;
