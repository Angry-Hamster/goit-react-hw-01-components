import styles from "./style.module.css"

import PropTypes from 'prop-types';

function transactionHistoryItem({type, amount, currency, key}) {
  return (
    <>
      <tr className={styles.tdMain} key={key}>
        <td><span className={styles.spanType}>{type}</span></td>
        <td><span className={styles.spanAmount}>{amount}</span></td>
        <td>{currency}</td>
      </tr>
    </>
  );
}

transactionHistoryItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
  type: PropTypes.string
}

export default transactionHistoryItem;