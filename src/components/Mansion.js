// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import AppointmentsForm from './AppointmentsForm';
import Backdrop from './Backdrop';
import ModalCloseButton from './ModalCloseButton';

function Mansion() {
  const { id } = useParams();
  const { data: mansion, error: err } = useFetch(`properties/${id}`, 'Mansion');
  const [rooms, setRooms] = useState([]);
  const [agent, setAgent] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const history = useHistory();

  const toggleForm = () => {
    if (isLoggedIn) {
      setIsFormOpen(!isFormOpen);
    } else {
      history.push('/login');
    }
  };

  function displayMansionDetails(mansion) {
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

  function displayAppointmentForm() {
    return (
      <div className="mansion-apt-wrapper">
        {isFormOpen && isLoggedIn
          && (
            <>
              <Backdrop formToggler={toggleForm} />
              <div className="appointment-form-wrapper" style={{ top: `calc(${window.scrollY}px + 50%)`, transform: 'translateY(-50%)' }}>
                <ModalCloseButton formToggler={toggleForm} />
                <AppointmentsForm />
              </div>
            </>
          )}
        <button className="info-button" type="button" onClick={toggleForm}>
          Book appointment
        </button>
      </div>
    );
  }

  useEffect(() => {
    if (mansion) {
      setRooms(mansion.rooms);
      setAgent(mansion.agent);
    }
  }, [mansion]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isLoggedIn) {
      if (isFormOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'scroll';
      }
    }
  }, [isFormOpen]);
  return (
    <div className="page mansion">
      <p>{err}</p>
      {mansion && displayMansionDetails(mansion)}
      {mansion && displayAgent(agent, mansion)}
      {mansion && displayAppointmentForm()}
    </div>
  );
}

export default Mansion;
