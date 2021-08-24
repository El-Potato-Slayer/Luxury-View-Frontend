import PropTypes from 'prop-types';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { setAppointments } from '../store/actions';

function AppointmentsList({ appointments }) {
  const dispatch = useDispatch();
  const [currentAppointments, setCurrentAppointments] = useState(appointments);
  const [success, setSuccess] = useState();
  const [deleteError, setDeleteError] = useState();
  const [fetchError, setFetchError] = useState();
  function fetchAppointments() {
    axios.get('appointments', {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        dispatch(setAppointments(res.data));
        setCurrentAppointments(res.data);
      })
      .catch(() => {
        setFetchError('Appointments could not be fetched. Please try again later');
      });
  }

  const deleteAppointment = (id) => {
    axios.delete(`appointments/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then(() => {
        setCurrentAppointments(
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
        <div>
          <button type="button" onClick={() => deleteAppointment(id)}>Delete</button>
        </div>
      );
    }

    return null;
  }

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <>
      <h1 data-testid="appointments">Appointments</h1>
      {showSuccess(success)}
      {showDeleteError(deleteError)}
      <div>
        {currentAppointments.map((appointment) => (
          <div key={appointment.id}>
            <p>{appointment.property.name}</p>
            <p>{appointment.date}</p>
            <Link to={`appointments/${appointment.id}`}>View</Link>
            {userButtons(fetchError, appointment.id)}
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  appointments: state.appointmentsReducer.appointments,
});

AppointmentsList.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(AppointmentsList);
