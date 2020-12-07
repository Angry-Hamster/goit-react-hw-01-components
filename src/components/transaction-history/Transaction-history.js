import styles from "./style.module.css"

import TransactionHistoryItem from './Transaction-history-item.js'
import transactionInfo from './transactions.json'

function transactionHistory() {
  return (
    <>
      <table className={styles.body}>
        <thead className={styles.head}>
          <tr className={styles.thHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionHistoryItem info={transactionInfo}/>
        </tbody>
      </table>
    </>
  );
}

export default transactionHistory;