
import {Button} from "./Notification.styled";

import PropTypes from 'prop-types';

export const Feedback = ({ onLeaveFeedback, options }) => {
  return (
    <div>
      {options.map(option => (
        <Button
          type='button'
          key={option}
          onClick={onLeaveFeedback}
          data-type={option}
        >{option}
        </Button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
}