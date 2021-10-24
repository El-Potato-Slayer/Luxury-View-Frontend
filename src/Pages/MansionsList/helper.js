import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { mainRooms, priceOutput } from '../../Helpers/helper';

function listRooms(mansion) {
  return (
    <p className="listing-room">
      {mainRooms(mansion).map((room) => (
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

export function listMansionDetails(mansion) {
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

export function listAgent(mansion) {
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
