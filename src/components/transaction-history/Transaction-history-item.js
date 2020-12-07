import styles from "./style.module.css"

function transactionHistoryItem({info}) {
  return (
    <>
      <tr className={styles.tdMain} id={info.id}>
        <td><span className={styles.spanType}>{info.type}</span></td>
        <td><span className={styles.spanAmount}>{info.amount}</span></td>
        <td>{info.currency}</td>
      </tr>
    </>
  );
}

export default transactionHistoryItem;