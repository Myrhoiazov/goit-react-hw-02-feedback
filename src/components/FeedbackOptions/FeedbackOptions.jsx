import { Component } from 'react';
import style from './FeedbackOptions.module.css';
import Section from '../Section/Section.jsx';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes ={
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      onLeaveFeedback: PropTypes.funk.isRequired,
    })
  ).isRequired,
}

export default FeedbackOptions;
