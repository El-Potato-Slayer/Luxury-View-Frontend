import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function AppointmentsForm() {
  const id = localStorage.getItem('mansionId');
  const [startDate, setStartDate] = useState(new Date());
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const [mansion, setMansion] = useState({});
  const [agent, setAgent] = useState({});
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const createAppointment = () => {
    const data = {
      property_id: id,
      date: startDate,
    };
    axios.post('appointments', data,
      {
        headers: {
          Authorization: `token ${localStorage.getItem('token')}`,
        },
      })
      .then(() => {
        setSuccess(`Appointment was made. ${agent.first_name} will get in touch with you shortly`);
      })
      .catch(() => {
        setError('Appointment could not be made. Please try again later.');
      });
  };

  function getMansionData() {
    axios.get(`properties/${id}`, {
      headers: {
        Authorization: `token ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        setMansion(res.data);
        setAgent(res.data.agent);
      })
      .catch(() => {
        setError('Mansion information could not be fetched');
      });
  }

  function displaySuccess(success) {
    if (success) {
      return (
        <p>{success}</p>
      );
    }
    return null;
  }

  function displayError(error) {
    if (error) {
      return (<p>{error}</p>);
    }
    return null;
  }

  function displayMansionInformation(error, mansion) {
    if (!error) {
      return (
        <section>
          <h3>Property</h3>
          <p>{mansion.name}</p>
          <p>{mansion.Price}</p>
        </section>
      );
    }
    return null;
  }

  function displayAgentInformation(error, agent) {
    if (!error) {
      return (
        <section>
          <h3>Agent</h3>
          <p>
            {agent.first_name}
            &nbsp;
            {agent.last_name}
          </p>
          <p>{agent.email}</p>
        </section>
      );
    }
    return null;
  }

  function displayDate(error) {
    if (!error) {
      return (
        <>
          <fieldset>
            <p>
              Please choose a time between 9am and 4pm, and
              {' '}
              {agent.first_name}
              {' '}
              will get in touch
            </p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              filterDate={isWeekday}
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </fieldset>
          <button type="submit" onClick={createAppointment}>Submit</button>
        </>
      );
    }
    return null;
  }

  useEffect(() => {
    getMansionData();
  }, []);

  return (
    <>
      <h2>Create an appointment</h2>
      {displaySuccess(success)}
      {displayError(error)}
      {displayMansionInformation(error, mansion)}
      {displayAgentInformation(error, agent)}
      {displayDate(error)}
    </>
  );
}

export default AppointmentsForm;
