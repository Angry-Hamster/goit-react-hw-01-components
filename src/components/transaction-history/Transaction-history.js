import styles from "./style.module.css"
import PropTypes from 'prop-types';

import TransactionHistoryItem from './Transaction-history-item.js'

function transactionHistory({items}) {
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
        {items.map((item, i) => {
            return(
              <TransactionHistoryItem type={item.type} amount={item.amount} currency={item.currency} key={i}/>
            )
        })}
        </tbody>
      </table>
    </>
  );
}

transactionHistory.propTypes = {
  items: PropTypes.array
}

export default transactionHistory;