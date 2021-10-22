import axios from 'axios';
import {
  postAppointmentFailure,
  postAppointmentRequest,
  postAppointmentSuccess, setAppointmentSuccessMessage,
} from '../../Redux/actions/appointmentActions';

export const createAppointment = (id, date, dispatch) => {
  const data = {
    property_id: id,
    date,
  };
  dispatch(postAppointmentRequest);

  axios.post('appointments', data,
    {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
    .then((res) => {
      dispatch(postAppointmentSuccess(res.data));
      dispatch(setAppointmentSuccessMessage('Appointment was successfully created'));
    })
    .catch(() => {
      dispatch(postAppointmentFailure('Appointment could not be made. Please try again later'));
    });
};

export function displayMansionInformation(mansion) {
  return (
    <section>
      <h3 className="sub-title">Property</h3>
      <p>{mansion.name}</p>
      <p>{mansion.Price}</p>
    </section>
  );
}

export function displayAgentInformation(agent) {
  return (
    <section>
      <h3 className="sub-title">Agent</h3>
      <p>
        {agent.first_name}
          &nbsp;
        {agent.last_name}
      </p>
      <p>{agent.email}</p>
    </section>
  );
}
