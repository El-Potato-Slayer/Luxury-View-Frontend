import PropTypes from 'prop-types';

function ModalCloseButton({ formToggler }) {
  return (
    <div
      className="modal-close-wrapper"
      aria-hidden="true"
      onClick={formToggler}
      onKeyDown={formToggler}
    >
      <div className="modal-close" />
    </div>
  );
}

ModalCloseButton.propTypes = {
  formToggler: PropTypes.func.isRequired,
};

export default ModalCloseButton;
