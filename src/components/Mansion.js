import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Mansion() {
  const { id } = useParams();
  const [mansion, setMansion] = useState({});
  const [rooms, setRooms] = useState([]);
  const [agent, setAgent] = useState({});
  const [err, setErr] = useState('');

  const setMansionId = () => {
    localStorage.setItem('mansionId', id);
  };

  function fetchMansionInformation() {
    axios.get(`properties/${id}`)
      .then((res) => {
        setMansion(res.data);
        setRooms(res.data.rooms);
        setAgent(res.data.agent);
      })
      .catch(() => {
        setErr('Mansion information could not be fetched');
      });
  }

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
        <Link to="/appointments/create" className="info-button" onClick={setMansionId}>Book an appointment</Link>
      </div>
    );
  }

  useEffect(() => {
    fetchMansionInformation();
  }, []);
  return (
    <div className="page">
      <p>{err}</p>
      {displayShowcase(mansion)}
      {displayAgent(agent, mansion)}
      {displayAppointment()}
    </div>
  );
}

export default Mansion;
