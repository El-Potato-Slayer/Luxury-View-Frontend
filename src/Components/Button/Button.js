import PropTypes from 'prop-types';

function Button({ type, name, onClick }) {
  return (
    <button type="button" className={`button ${type}`} onClick={onClick}>
      {name}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
