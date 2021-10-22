import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { createAppointment, displayAgentInformation, displayMansionInformation } from './helper';

function AppointmentsForm({ toggleForm }) {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  const [mansion, setMansion] = useState({});
  const [agent, setAgent] = useState({});
  const dispatch = useDispatch();

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
      .catch((err) => {
        console.error(err.message);
      });
  }

  function displayDatePicker() {
    return (
      <>
        <fieldset className="date-input">
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
        <button type="submit" className="info-button" onClick={() => { createAppointment(id, startDate, dispatch); toggleForm(); }}>Submit</button>
      </>
    );
  }

  useEffect(() => {
    getMansionData();
  }, []);

  return (
    <div className="appointments-form">
      <h2 className="page-title">Create an appointment</h2>
      <>
        {displayMansionInformation(mansion)}
        {displayAgentInformation(agent)}
        {displayDatePicker()}
      </>
    </div>
  );
}

AppointmentsForm.propTypes = {
  toggleForm: PropTypes.func.isRequired,
};

export default AppointmentsForm;
