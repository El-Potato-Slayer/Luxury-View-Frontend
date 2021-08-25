import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function MansionsList({ mansions }) {
  // const [rooms, setRooms] = useState([]);
  useEffect(() => {
    // console.log(mansions[0].rooms);
    // setRooms(mansions.rooms);
    // console.log(rooms);
  }, []);

  const filteredRooms = (mansion) => mansion.rooms.filter((room) => (
    room.name === 'Bedrooms' || room.name === 'Bathrooms'
  ));

  function listRooms(mansion) {
    return (
      <p>
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

  function listMansionDetails(mansion) {
    return (
      <Link to={`/mansions/${mansion.id}`}>
        <img src={mansion.picture} alt="" />
        <p>
          $
          {mansion.price}
        </p>
        <p>{mansion.name}</p>
        {listRooms(mansion)}
      </Link>
    );
  }

  function listAgent(mansion) {
    return (
      <Link to={`agents/${mansion.agent.id}`} className="mansion-list-agent">
        <span>{mansion.agent.first_name}</span>
        &nbsp;
        <span>{mansion.agent.last_name}</span>
        <img src={mansion.agent.picture} alt="agent" />
      </Link>
    );
  }

  return (
    <>
      <h2 data-testid="mansions">Mansions</h2>
      <div data-testid="mansions-listing">
        {mansions.map((mansion) => (
          <div key={mansion.id}>
            {listMansionDetails(mansion)}
            {listAgent(mansion)}
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  mansions: state.propertiesReducer.properties,
});

MansionsList.propTypes = {
  mansions: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(MansionsList);
