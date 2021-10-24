import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import ListingFeature from '../../Components/ListingFeature/ListingFeature';
import Notification from '../../Components/Notification/Notification';
import { mainRooms, priceOutput } from '../../Helpers/index';
import useFetch from '../../Hooks/useFetch';
import { setAppointmentErrorMessage, setAppointmentSuccessMessage } from '../../Redux/actions/appointmentActions';
import { setSelectedGuardRoute } from '../../Redux/actions/userActions';
import AppointmentsForm from '../../Components/AppointmentsForm/AppointmentsForm';
import Backdrop from '../../Components/Backdrop/Backdrop';
import ModalCloseButton from '../../Components/ModalCloseButton/ModalCloseButton';
import Button from '../../Components/Button/Button';
import AgentContactForm from '../../Components/AgentContactForm/AgentContactForm';

function Mansion() {
  const { id } = useParams();
  const { data: mansion, error: err } = useFetch(`properties/${id}`, 'Mansion');
  const [agent, setAgent] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { isLoggedIn, user } = useSelector((state) => state.userReducer);
  const { success, error } = useSelector((state) => state.appointmentsReducer);
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
      setAgent(mansion.agent);
    }
  }, [mansion]);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isLoggedIn) {
      if (isFormOpen) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
    return function cleanUp() {
      dispatch(setAppointmentSuccessMessage(''));
      dispatch(setAppointmentErrorMessage(''));
    };
  }, [isFormOpen]);

  return (
    <>
      {success && success.length && <Notification type="success" message={success} />}
      {error && error.length && <Notification type="error" message={error} />}
      <div className="">
        <p>{err}</p>
        {mansion && (
          <>
            <div className="listing-page">
              <img src={mansion.picture} className="listing-page__image" alt="" />
              <section className="">
                <div className="listing-page__main">
                  <p className="listing-page-type">Real Estate</p>
                  <h1 className="listing-page__main__title">{mansion.name}</h1>
                  <h1 className="listing-page__price listing-page__main__title">
                    $
                    {' '}
                    {priceOutput(mansion.price)}
                  </h1>
                  <div className="listing-page__features">
                    <ListingFeature image="/assets/bed.svg" name={mainRooms(mansion)[0].name} amount={mainRooms(mansion)[0].amount} />
                    <ListingFeature image="/assets/bath.svg" name={mainRooms(mansion)[1].name} amount={mainRooms(mansion)[1].amount} />
                    <ListingFeature image="/assets/house.svg" name="M" superScript="2" amount={mansion.floor_area} />
                    <ListingFeature image="/assets/trees.svg" name="M" superScript="2" amount={mansion.land_area} />
                  </div>
                  <div className="listing-page__main__buttons">
                    <Button type="info" name="Book Appointment" onClick={toggleForm} />
                  </div>
                </div>
              </section>
            </div>
            <section className="listing-page__extra">
              <div>
                <h2 className="listing-page__extra__title">Description</h2>
                <p className="listing-description">
                  {mansion.description}
                </p>
              </div>
              <div>
                <h2 className="listing-page__extra__title">Contact agent</h2>
                {agent && (
                <AgentContactForm
                  agent={agent}
                  name={user.first_name}
                  email={user.email}
                />
                )}
              </div>
            </section>
          </>
        )}
      </div>

      {isLoggedIn
        && (
          <>
            <Backdrop isOpen={isFormOpen} formToggler={toggleForm} />
            <div className={`appointment-form-wrapper ${isFormOpen ? 'open' : ''}`}>
              <ModalCloseButton formToggler={toggleForm} />
              <AppointmentsForm toggleForm={toggleForm} />
            </div>
          </>
        )}
    </>
  );
}

export default Mansion;
