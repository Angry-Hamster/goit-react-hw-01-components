import styles from "./style.module.css";

function FriendItem({friendInfo}) {
  return (
    <>
      {friendInfo.map((elem, i) => {

        let name = elem.name
        let isOnline = elem.isOnline
        let avatar = elem.avatar

        let status = "style_disable__2kAso style_span__3pWud";
        if (isOnline) {
          status = "style_enable__4Betd style_span__3pWud";
        }

        return(
        <li className={styles.li} key={i}>
          <span className={status}></span>
          <img src={avatar} alt="avatar" width="48" />
          <p className={styles.p}>{name}</p>
        </li>
        )
      })}
    </>
  );
}

FriendItem.defaultProps = {
  friendInfo: [{name: 'load name', friendInfo: false}]
};

export default FriendItem;
