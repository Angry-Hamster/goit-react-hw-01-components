import styles from "./style.module.css"

function transactionHistoryItem({info}) {
  return (
    <>
      {info.map((item, i) => {
            return(
              <tr className={styles.tdMain} id={item.id} key={i}>
                <td><span className={styles.spanType}>{item.type}</span></td>
                <td><span className={styles.spanAmount}>{item.amount}</span></td>
                <td>{info.currency}</td>
              </tr>
            )
      })}
    </>
  );
}

transactionHistoryItem.defaultProps = {
  info: [{
    "id": "1e0700a2-5183-4291-85cc-2065a036a683",
    "type": "invoice",
    "amount": "964.82",
    "currency": "LRD"
  }]
};

export default transactionHistoryItem;