import PropTypes from 'prop-types';

function Notification({ type, message }) {
  const classes = `notification bg-${type} text-white`;
  return (
    <div className={classes}>
      {message}
    </div>
  );
}

Notification.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Notification;
