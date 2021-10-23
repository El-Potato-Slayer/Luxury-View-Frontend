import PropTypes from 'prop-types';

function ListingFeature({
  name, image, amount, superScript,
}) {
  return (
    <div className="listing-feature">
      <div className="listing-feature__top">
        <img className="listing_feature__svg" src={image} alt="" />
        <span>{amount}</span>
      </div>
      <span className="listing-feature__bottom">
        {name}
        {superScript && <sup>{superScript}</sup>}
      </span>
    </div>
  );
}

ListingFeature.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  superScript: PropTypes.string,
};

ListingFeature.defaultProps = {
  superScript: undefined,
};

export default ListingFeature;
