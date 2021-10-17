import { Link } from 'react-router-dom';

function userButtons(id, deleteFunc) {
  return (
    <button type="button" onClick={() => deleteFunc(id)}>Cancel</button>
  );
}

export function formatDate(date) {
  const d = new Date(date);
  let arr = d.toString().split(' ').splice(0, 5);
  const time = arr[4].split(':').splice(0, 2).join(':');
  arr = arr.splice(0, 4);
  return `Date: ${arr.join(' ').concat(` ${time}`)}`;
}

export function displayAppointment(appointment, deleteFunc) {
  return (
    <div>
      <div className="listing-image" style={{ background: `url(${appointment.property.picture}) center / cover` }} />
      <div className="info">
        <p className="listing-important">{formatDate(appointment.date)}</p>
        <p>
          Property:
          {' '}
          <Link
            to={`mansions/${appointment.property.id}`}
            className="text-info"
          >
            {appointment.property.name}
          </Link>
        </p>
      </div>
      <div className="user-buttons">
        <Link
          to={`appointments/${appointment.id}`}
        >
          Appointment Details
        </Link>
        {userButtons(appointment.id, deleteFunc)}
      </div>
    </div>
  );
}
