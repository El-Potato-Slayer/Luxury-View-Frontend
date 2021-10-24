import PropTypes from 'prop-types';

function Backdrop({ isOpen, formToggler }) {
  const hidden = isOpen ? 'open' : '';
  return (
    <div
      className={`backdrop ${hidden}`}
      aria-hidden="true"
      onClick={formToggler}
      onKeyDown={formToggler}
    />
  );
}

Backdrop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  formToggler: PropTypes.func.isRequired,
};

export default Backdrop;
