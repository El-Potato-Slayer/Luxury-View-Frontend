import { Link } from 'react-router-dom';
import AppointmentsForm from '../../Components/AppointmentsForm/AppointmentsForm';
import Backdrop from '../../Components/Backdrop/Backdrop';
import ModalCloseButton from '../../Components/ModalCloseButton/ModalCloseButton';

export function displayMansionDetails(mansion, rooms) {
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

export function displayAgent(agent, mansion) {
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

export function displayAppointmentForm(isFormOpen, isLoggedIn, toggleForm) {
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
