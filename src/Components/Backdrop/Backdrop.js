import PropTypes from 'prop-types';

function Backdrop({ isOpen, formToggler }) {
  const hidden = isOpen ? 'open' : '';

  return (
    <div
      className={`backdrop ${hidden}`}
      aria-hidden="true"
      onClick={formToggler}
      onKeyDown={formToggler}
      // style={{ top: window.scrollY, transform: 'translateY(0%)' }}
    />
  );
}

Backdrop.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  formToggler: PropTypes.func.isRequired,
};

export default Backdrop;
