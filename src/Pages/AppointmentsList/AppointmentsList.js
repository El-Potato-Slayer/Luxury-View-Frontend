import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../../Components/Notification/Notification';
import { filterAppointment } from '../../Redux/actions/appointmentActions';
import SkeletonListAgent from '../../Skeletons/SkeletonListAgent/SkeletonListAgent';
import { displayAppointment } from './helper';

function AppointmentsList() {
  const {
    appointments,
    loading,
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
        dispatch(filterAppointment(id));
        setSuccess('Appointment successfully canceled');
      })
      .catch(() => {
        setDeleteError('An error occurred with the cancelation of the appointment. Please try again later or contact your agent');
      });
  };

  useEffect(() => {
    console.log(appointments);
  }, [appointments]);

  return (
    <div className="page">
      <h1 data-testid="appointments" className="page-title">Appointments</h1>
      {success && <Notification type="success" message={success} />}
      {deleteError && <Notification type="error" message={deleteError} />}

      <div className="listings">
        {loading && (
          <>
            <SkeletonListAgent />
            <SkeletonListAgent />
            <SkeletonListAgent />
          </>
        )}
        {appointments && appointments.map((appointment) => (
          <div key={appointment.id} className="appointment-card">
            {displayAppointment(appointment, deleteAppointment)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AppointmentsList;
