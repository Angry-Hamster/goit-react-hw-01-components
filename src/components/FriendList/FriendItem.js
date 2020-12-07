import styles from "./style.module.css";

function FriendItem({friendInfo}) {
  let name = friendInfo.name
  let isOnline = friendInfo.isOnline
  let avatar = friendInfo.avatar

  let status = "style_disable__2kAso style_span__3pWud";
  if (isOnline) {
    status = "style_enable__4Betd style_span__3pWud";
  }

  return (
    <>
      <li className={styles.li}>
        <span className={status}></span>
        <img src={avatar} alt="avatar" width="48" />
        <p className={styles.p}>{name}</p>
      </li>
    </>
  );
}

FriendItem.defaultProps = {
  friendInfo: {name: 'load name', friendInfo: false}
};

export default FriendItem;
