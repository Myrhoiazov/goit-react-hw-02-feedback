import { Component } from 'react';
import style from './FeedbackOptions.module.css';
import Section from '../Section/Section.jsx';

class FeedbackOptions extends Component {
  render() {
    const { onLeaveFeedback, options } = this.props;

    return (
      <Section title='Please leave feedback'>
        {options.map(option => (
          <button
            className={style.btn}
            type="button"
            name={option.name}
            onClick={onLeaveFeedback}
          >
            {option.label}
          </button>
        ))}
      </Section>
    );
  }
}

export default FeedbackOptions;
