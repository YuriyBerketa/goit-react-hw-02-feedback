import PropTypes from 'prop-types';
import { Notific } from './Notification.styled';

export const Notification = ({ message }) => {
    return <Notific>{message}</Notific>;
};
Notification.propTypes = {
    message: PropTypes.string.isRequired,
};