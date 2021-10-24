import PropTypes from 'prop-types';

function ConfirmationForm({
  isOpen, message, confirmHandler, rejectHandler,
}) {
  const hidden = isOpen ? 'open' : '';

  return (
    <div className={`confirmation-form ${hidden}`}>
      {message}
      <div className="confirmation-form__buttons">
        <button type="button" className="button info" onClick={() => confirmHandler()}>Yes</button>
        <button type="button" className="button error" onClick={() => rejectHandler()}>No</button>
      </div>
    </div>
  );
}

ConfirmationForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  rejectHandler: PropTypes.func.isRequired,
};

export default ConfirmationForm;
