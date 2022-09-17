import css from '../Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      <h2 className={css.title}>Statistics</h2>
      <div className={css.container}>
        <p className={css.text}>Good: {good}</p>
        <p className={css.text}>Neutral: {neutral}</p>
        <p className={css.text}>Bad:{bad}</p>
      </div>
      <p className={css.text}>Total: {total()}</p>
      <p className={css.text}>Positive feedback: {positivePercentage()}%</p>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
