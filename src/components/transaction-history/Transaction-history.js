import styles from "./style.module.css"

import TransactionHistoryItem from './Transaction-history-item.js'
import transactionInfo from './transactions.json'

function transactionHistory() {
  return (
    <>
      <table class={styles.body}>
        <thead className={styles.head}>
          <tr className={styles.thHead}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {transactionInfo.map(item => {
            return(
              <TransactionHistoryItem info={item}/>
            )
          })}
        </tbody>
      </table>
    </>
  );
}

export default transactionHistory;