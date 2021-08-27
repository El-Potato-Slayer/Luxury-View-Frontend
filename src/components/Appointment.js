import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Swiper styles
// import 'swiper/css';

function Appointment() {
  const { id } = useParams();
  const [appointment, setAppointment] = useState({});
  const [agent, setAgent] = useState({});
  const [mansion, setMansion] = useState({});
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
        setMansion(res.data.property);
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

  function formatDate(date) {
    const d = new Date(date);
    const arr = d.toString().split(' ').splice(0, 4);
    return `Date: ${arr.join(' ')}`;
  }

  function formatTime(date) {
    const d = new Date(date);
    const time = d.toString().split(' ').splice(4, 1);
    return `Time: ${time.join('').split(':').splice(0, 2).join(':')}`;
  }

  function displayAppointmentInformation(error, appointment, mansion) {
    if (!error) {
      return (
        <div className="appointment-info">
          <div className="image-margin">
            <img className="appointment-pic" src={`${mansion.picture}`} alt="" />
          </div>
          <div className="page-margin">
            <div className="details">
              <h3 className="appointment-title">{mansion.name}</h3>
              <p>{formatDate(appointment.date)}</p>
              <p>{formatTime(appointment.date)}</p>
              <p>
                Address:
                {' '}
                {mansion.address}
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }

  function displayAgentInformation(error, agent) {
    if (!error) {
      return (
        <div className="appointment-agent">
          <p className="page-margin">
            If you have any questions, you can contact the property&apos;s agent,
            &nbsp;
            {agent.first_name}
            &nbsp;
            {agent.last_name}
            ,
            by email
            (
            <a href={`mailto:${agent.email}`} className="text-info">
              {agent.email}
            </a>
            )
            or by phone
            (
            <a href={`tel:${agent.number}`} className="text-info">
              {agent.number}
            </a>
            )
          </p>
        </div>
      );
    }
    return null;
  }

  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <div>
      {displayError(fetchError)}
      <div>
        {displayAppointmentInformation(fetchError, appointment, mansion)}
        {/* {displayAgentInformation(fetchError, agent)} */}
        {displayAgentInformation(fetchError, agent)}
      </div>
    </div>
  );
}

export default Appointment;
