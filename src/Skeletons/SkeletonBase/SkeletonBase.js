import PropTypes from 'prop-types';

function SkeletonBase({ type }) {
  const classes = `skeleton ${type}`;

  return (
    <div className={classes} />
  );
}

SkeletonBase.propTypes = {
  type: PropTypes.string,
};

SkeletonBase.defaultProps = {
  type: '',
};

export default SkeletonBase;
