import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <List>
            <li>Good: {good}</li>
            <li>Good: {neutral}</li>
            <li>Good: {bad}</li>
            <li>Good: {total}</li>
            <li>Good: {positivePercentage} %</li>
        </List>
    );
}; 
Statistics.propTypes = {
    positivePercentage: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
}