import transactions from '../Data/transactions.json';
import css from './TransactionHistory.module.css';

export const Transaction = () => {
  return transactions.map(transaction => {
    return (
      <tr key={transaction.id} className={css.tr}>
        <td className={css.td}>{transaction.type}</td>
        <td className={css.td}>{transaction.amount}</td>
        <td className={css.td}>{transaction.currency}</td>
      </tr>
    );
  });
};
