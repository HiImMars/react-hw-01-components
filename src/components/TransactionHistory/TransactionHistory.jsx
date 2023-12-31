import { Transaction } from './Transaction';
import css from './TransactionHistory.module.css';

export const TransactionHistory = () => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        <Transaction />
      </tbody>
    </table>
  );
};
