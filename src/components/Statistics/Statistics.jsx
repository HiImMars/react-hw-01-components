import data from '../Data/data.json';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics} key={stats.id}>
      <h2 className={css.title}>{title}</h2>

      <ul className={css.statlist}>
        {data.map(item => {
          return (
            <li className={css.item} key={item.id}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
