import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { priceOutput } from '../helpers';

function MansionsList({ mansions }) {
  const filteredRooms = (mansion) => mansion.rooms.filter((room) => (
    room.name === 'Bedrooms' || room.name === 'Bathrooms'
  ));

  function sortMansionByNewest(mansions) {
    return mansions.sort((a, b) => b.id - a.id);
  }

  function listRooms(mansion) {
    return (
      <p className="listing-room">
        {filteredRooms(mansion).map((room) => (
          <Fragment key={room.id}>
            <span>
              {room.amount}
              {' '}
              {room.name}
              {' '}
              &bull;
            </span>
          &nbsp;
          </Fragment>
        ))}
        <span>
          {mansion.land_area}
          m
          <sup>2</sup>
        </span>
      </p>
    );
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
    <div data-testid="mansions" className="page">
      <h2 className="page-title">Mansions</h2>
      <div data-testid="listings" className="listings">
        {sortMansionByNewest(mansions).map((mansion) => (
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
