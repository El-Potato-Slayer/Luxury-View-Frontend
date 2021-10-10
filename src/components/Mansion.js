// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Mansion() {
  const { id } = useParams();
  const { data: mansion, error: err } = useFetch(`properties/${id}`, 'Mansion');
  const [rooms, setRooms] = useState([]);
  const [agent, setAgent] = useState({});

  const setMansionId = () => {
    localStorage.setItem('mansionId', id);
  };

  function displayShowcase(mansion) {
    return (
      <div className="mansion-header">
        <img src={mansion.picture} alt="mansion" />
        <div>
          <div className="mansion-features">
            <h3 className="mansion-title">{mansion.name}</h3>
            {rooms.map((room) => (
              <div className="room-features" key={room.id}>
                <p>{room.name}</p>
                <p>{room.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  function displayAgent(agent, mansion) {
    return (
      <section className="mansion-details">
        <p className="mansion-description">{mansion.description}</p>
        <div className="mansion-agent">
          <h3 className="mansion-title">Agent</h3>
          <Link
            to={`/agents/${agent.id}`}
            className="mansion-agent-details text-info"
          >
            <p>
              <span>{agent.first_name}</span>
            &nbsp;
              <span>{agent.last_name}</span>
            </p>
            <img src={agent.picture} alt="agent" />
          </Link>
          <div className="contact">
            <a href={`mailto:${agent.email}`} className="email">
              {agent.email}
            </a>
            <a href={`tel:${agent.number}`}>
              {agent.number}
            </a>
          </div>
        </div>
      </section>
    );
  }

  function displayAppointment() {
    return (
      <div className="mansion-apt-wrapper">
        <Link
          to="/appointments/create"
          className="info-button"
          onClick={setMansionId}
        >
          Book an appointment

        </Link>
      </div>
    );
  }

  useEffect(() => {
    if (mansion) {
      setRooms(mansion.rooms);
      setAgent(mansion.agent);
    }
  }, [mansion]);
  return (
    <div className="page">
      <p>{err}</p>
      {mansion && displayShowcase(mansion)}
      {mansion && displayAgent(agent, mansion)}
      {mansion && displayAppointment()}
    </div>
  );
}

export default Mansion;
