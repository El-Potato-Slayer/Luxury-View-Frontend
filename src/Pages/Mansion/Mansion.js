// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { setSelectedGuardRoute } from '../../Redux/actions/userActions';
import { displayAgent, displayAppointmentForm, displayMansionDetails } from './helper';

function Mansion() {
  const { id } = useParams();
  const { data: mansion, error: err } = useFetch(`properties/${id}`, 'Mansion');
  const [rooms, setRooms] = useState([]);
  const [agent, setAgent] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.userReducer);
  const history = useHistory();
  const dispatch = useDispatch();

  const toggleForm = () => {
    if (isLoggedIn) {
      setIsFormOpen(!isFormOpen);
    } else {
      dispatch(setSelectedGuardRoute(`mansions/${id}`));
      history.push('/login');
    }
  };

  useEffect(() => {
    if (mansion) {
      setRooms(mansion.rooms);
      setAgent(mansion.agent);
    }
  }, [mansion]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isLoggedIn) {
      if (isFormOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'scroll';
      }
    }
  }, [isFormOpen]);

  return (
    <div className="page mansion">
      <p>{err}</p>
      {mansion && displayMansionDetails(mansion, rooms)}
      {mansion && displayAgent(agent, mansion)}
      {mansion && displayAppointmentForm(isFormOpen, isLoggedIn, toggleForm)}
    </div>
  );
}

export default Mansion;
