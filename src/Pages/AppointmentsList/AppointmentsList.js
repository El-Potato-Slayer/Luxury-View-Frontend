import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AppointmentsList() {
  const {
    appointments: currentAppointments,
    error: fetchError,
  } = useSelector((state) => state.appointmentsReducer);
  const [success, setSuccess] = useState();
  const [deleteError, setDeleteError] = useState();

  const deleteAppointment = (id) => {
    axios.delete(`appointments/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then(() => {
        currentAppointments(
          (currentAppointments) => currentAppointments.filter(
            (appointment) => id !== appointment.id,
          ),
        );
        setSuccess('Appointment successfully deleted');
      })
      .catch(() => {
        setDeleteError('An error occurred with the removal of the appointment. Please try again later or contact your agent');
      });
  };

  function showSuccess(success) {
    if (success) {
      return (
        <p>{success}</p>
      );
    }
    return null;
  }

  function showDeleteError(error) {
    if (error) {
      return (
        <p>{error}</p>
      );
    }
    return null;
  }

  function userButtons(error, id) {
    if (!error) {
      return (
        <button type="button" onClick={() => deleteAppointment(id)}>Cancel</button>
      );
    }

    return null;
  }

  function formatDate(date) {
    const d = new Date(date);
    let arr = d.toString().split(' ').splice(0, 5);
    const time = arr[4].split(':').splice(0, 2).join(':');
    arr = arr.splice(0, 4);
    return `Date: ${arr.join(' ').concat(` ${time}`)}`;
  }

  function displayAppointment(appointment) {
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
          {userButtons(fetchError, appointment.id)}
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 data-testid="appointments" className="page-title">Appointments</h1>
      {showSuccess(success)}
      {showDeleteError(deleteError)}
      <div className="listings">
        {currentAppointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            {displayAppointment(appointment)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsList;
