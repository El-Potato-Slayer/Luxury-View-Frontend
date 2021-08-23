import PropTypes from 'prop-types';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAppointments } from '../store/actions';

function AppointmentsList({ appointments, isAuth }) {
  const dispatch = useDispatch();
  useEffect(() => {
    if (isAuth) {
      axios.get('appointments', {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
          // Authorization: `token ${user.token}`,
        },
      }).then(
        (res) => {
          // console.log(res);
          dispatch(setAppointments(res.data));
        },
      );
    }
  }, []);

  return (
    <>
      <h1 data-testid="appointments">Appointments</h1>
      <div>
        {appointments.map((appointment) => (
          <p key={appointment.id}>{appointment.date}</p>
        ))}
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  appointments: state.appointmentsReducer.appointments,
  isAuth: state.authReducer.isAuth,
});

AppointmentsList.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
  isAuth: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(AppointmentsList);
