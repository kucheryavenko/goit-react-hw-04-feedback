import PropTypes from 'prop-types';
import { List, Item } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item>
        <p>Good: {good}</p>
      </Item>
      <Item>
        <p>Neutral: {neutral}</p>
      </Item>
      <Item>
        <p>Bad: {bad}</p>
      </Item>
      <Item>
        <p>Total: {total}</p>
      </Item>
      <Item>
        <p>Positive feedback: {positivePercentage}%</p>
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
