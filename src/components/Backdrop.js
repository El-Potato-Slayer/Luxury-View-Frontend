import PropTypes from 'prop-types';

function Backdrop({ formToggler }) {
  return (
    <div
      className="backdrop"
      aria-hidden="true"
      onClick={formToggler}
      onKeyDown={formToggler}
      style={{ top: window.scrollY, transform: 'translateY(0%)' }}
    />
  );
}

Backdrop.propTypes = {
  formToggler: PropTypes.func.isRequired,
};

export default Backdrop;
