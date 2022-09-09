import style from './Statistics.module.css';
import { Component } from 'react';
import Section from '../Section/Section.jsx';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <Section title="Statistics">
        {total === 0 ? (
          'Notification!!!!!!!!!!'
        ) : (
          <ul className={style.list}>
            <li className={style.item}>Good: {good}</li>

            <li className={style.item}>Neutral: {neutral}</li>
            <li className={style.item}>Bad: {bad}</li>
            <li className={style.item}>Total: {total}</li>
            <li className={style.item}>
              Positive feedback: {positivePercentage}%
            </li>
          </ul>
        )}
      </Section>
    );
  }
}

export default Statistics;
