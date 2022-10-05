import PropTypes from 'prop-types';
import { List, Item, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {Object.keys(options).map(key => (
        <Item key={key}>
          <Button type="button" onClick={() => onLeaveFeedback(key)}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </Button>
        </Item>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
