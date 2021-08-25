import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function MansionsList({ mansions }) {
  const filteredRooms = (mansion) => mansion.rooms.filter((room) => (
    room.name === 'Bedrooms' || room.name === 'Bathrooms'
  ));

  function listRooms(mansion) {
    return (
      <p className="listing-room">
        {filteredRooms(mansion).map((room) => (
          <>
            <span>
              {room.amount}
              {' '}
              {room.name}
              {' '}
              &bull;
            </span>
          &nbsp;
          </>
        ))}
        <span>
          {mansion.land_area}
          m
          <sup>2</sup>
        </span>
      </p>
    );
  }

  function priceOutput(price) {
    return parseInt(price, 10).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function listMansionDetails(mansion) {
    return (
      <Link to={`/mansions/${mansion.id}`}>
        <div>
          <div
            className="listing-image"
            style={{ background: `url(${mansion.picture}) center / cover` }}
          />
          <div className="info">
            <p className="listing-important">
              $&nbsp;
              {priceOutput(mansion.price)}
            </p>
            <p>{mansion.name}</p>
            {listRooms(mansion)}
          </div>
        </div>
      </Link>
    );
  }

  function listAgent(mansion) {
    return (
      <Link to={`agents/${mansion.agent.id}`} className="listing-agent">
        <p>
          <span>{mansion.agent.first_name}</span>
          &nbsp;
          <span>{mansion.agent.last_name}</span>
        </p>
        <img src={mansion.agent.picture} alt="agent" />
      </Link>
    );
  }

  return (
    <div className="page">
      <h2 data-testid="mansions" className="page-title">Mansions</h2>
      <div data-testid="listings" className="listings">
        {mansions.map((mansion) => (
          <div key={mansion.id}>
            {listMansionDetails(mansion)}
            {listAgent(mansion)}
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  mansions: state.propertiesReducer.properties,
});

MansionsList.propTypes = {
  mansions: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(MansionsList);
