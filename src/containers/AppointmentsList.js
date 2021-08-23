import PropTypes from 'prop-types';
import axios from 'axios';
import { connect, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAppointments } from '../store/actions';

function AppointmentsList({ appointments }) {
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get('appointments', {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    }).then(
      (res) => {
        // console.log(res);
        dispatch(setAppointments(res.data));
      },
    );
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
});

AppointmentsList.propTypes = {
  appointments: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps)(AppointmentsList);
