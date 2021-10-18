import PropTypes from 'prop-types';

function ConfirmationForm({ message, confirmHandler, rejectHandler }) {
  return (
    <div>
      {message}
      <button type="button" className="info-button" onClick={confirmHandler}>Yes</button>
      <button type="button" className="error-button" onClick={rejectHandler}>No</button>
    </div>
  );
}

ConfirmationForm.propTypes = {
  message: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  rejectHandler: PropTypes.func.isRequired,
};

export default ConfirmationForm;
