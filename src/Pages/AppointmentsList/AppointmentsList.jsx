import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Notification from '../../Components/Notification/Notification';
import {
  fetchAppointmentsFailure, fetchAppointmentsRequest, fetchAppointmentsSuccess, filterAppointment,
} from '../../Redux/actions/appointmentActions';
import SkeletonListAgent from '../../Skeletons/SkeletonListAgent/SkeletonListAgent';
import { displayAppointment } from './helper';
import ConfirmationForm from '../../Components/ConfirmationForm/ConfirmationForm';
import Backdrop from '../../Components/Backdrop/Backdrop';

function AppointmentsList() {
  const {
    appointments,
    loading,
  } = useSelector((state) => state.appointmentsReducer);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState();
  const [deleteError, setDeleteError] = useState();
  const [selectedId, setSelectedId] = useState();
  const [isConfirmOpen, setisConfirmOpen] = useState(false);

  const toggleConfirmation = () => {
    setisConfirmOpen(!isConfirmOpen);
  };

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
    toggleConfirmation();
  };

  useEffect(() => {
    if (!appointments.length) {
      dispatch(fetchAppointmentsRequest());
      axios.get('appointments', {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
        },
      })
        .then((res) => {
          dispatch(fetchAppointmentsSuccess(res.data));
        })
        .catch(() => {
          dispatch(fetchAppointmentsFailure('Appointments could not be fetched'));
        });
    }
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isConfirmOpen) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'auto';
    }
  }, [isConfirmOpen]);

  return (
    <>
      {success && <Notification type="success" message={success} />}
      {deleteError && <Notification type="error" message={deleteError} />}
      <div className="page">
        <h1 data-testid="appointments" className="page-title">Appointments</h1>

        {!appointments.length && !loading && (
        <p className="appointments__empty-notification">You dont have any appointments scheduled</p>
        )}
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
              {displayAppointment(appointment, setSelectedId, toggleConfirmation)}
            </div>
          ))}
        </div>
        <Backdrop isOpen={isConfirmOpen} formToggler={toggleConfirmation} />
        <ConfirmationForm
          message="Are you sure you want to cancel this appointment?"
          isOpen={isConfirmOpen}
          confirmHandler={() => deleteAppointment(selectedId)}
          rejectHandler={toggleConfirmation}
        />
      </div>
    </>
  );
}

export default AppointmentsList;
