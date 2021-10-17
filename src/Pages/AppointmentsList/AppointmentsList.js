import axios from 'axios';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showDeleteError, showSuccess } from '../../Helpers';
import { removeAppointment } from '../../Redux/actions/appointmentActions';
import SkeletonListAgent from '../../Skeletons/SkeletonListAgent/SkeletonListAgent';
import { displayAppointment } from './helper';

function AppointmentsList() {
  const {
    appointments: currentAppointments,
    loading,
    // error: fetchError,
  } = useSelector((state) => state.appointmentsReducer);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState();
  const [deleteError, setDeleteError] = useState();
  const deleteAppointment = (id) => {
    axios.delete(`appointments/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then(() => {
        dispatch(removeAppointment(id));
        setSuccess('Appointment successfully canceled');
      })
      .catch(() => {
        setDeleteError('An error occurred with the cancelation of the appointment. Please try again later or contact your agent');
      });
  };

  return (
    <div className="page">
      <h1 data-testid="appointments" className="page-title">Appointments</h1>
      {showSuccess(success)}
      {showDeleteError(deleteError)}
      <div className="listings">
        {loading && (
          <>
            <SkeletonListAgent />
            <SkeletonListAgent />
            <SkeletonListAgent />
          </>
        )}
        {currentAppointments && currentAppointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            {displayAppointment(appointment, deleteAppointment)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsList;
