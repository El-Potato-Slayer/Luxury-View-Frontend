import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Appointment() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  const [agent, setAgent] = useState({});
  const [fetchError, setFetchError] = useState();

  function fetchAppointment() {
    axios.get(`appointments/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        setAppointment(res.data);
        setAgent(res.data.agent);
      })
      .catch(() => {
        setFetchError('Appointment information could not be fetched. Please try again later.');
      });
  }

  function displayError(error) {
    if (error) {
      return (
        <p>{error}</p>
      );
    }
    return null;
  }

  function displayAppointmentInformation(error, appointment) {
    if (!error) {
      return (
        <>
          <h2>Appointment</h2>
          <p>{appointment.date}</p>
        </>
      );
    }
    return null;
  }

  function displayAgentInformation(error, agent) {
    if (!error) {
      return (
        <>
          <h2>Agent</h2>
          <p>
            {agent.first_name}
            &nbsp;
            {agent.last_name}
          </p>
          <p>
            {agent.email}
          </p>
          <p>
            {agent.number}
          </p>
        </>
      );
    }
    return null;
  }

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <>
      {displayError(fetchError)}
      {displayAppointmentInformation(fetchError, appointment)}
      {displayAgentInformation(fetchError, agent)}
    </>
  );
}

export default Appointment;
