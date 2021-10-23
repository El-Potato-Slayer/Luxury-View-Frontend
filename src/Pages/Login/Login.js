import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSelectedGuardRoute, setUser } from '../../Redux/actions/userActions';

function Login() {
  const history = useHistory();
  const { isLoggedIn, selectedGuardRoute } = useSelector((state) => state.userReducer);
  const [loginInfo, setloginInfo] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    // Record path unatauthorized user tried to access before being asked to login
    if (!isLoggedIn && history.location.state) {
      dispatch(setSelectedGuardRoute(history.location.state.from.pathname));
    }
  }, [selectedGuardRoute]);

  const submitHandler = (e) => {
    setloginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  function postLogin() {
    axios.post('login', loginInfo)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(setUser(res.data));
        if (selectedGuardRoute) {
          history.push(selectedGuardRoute);
        } else {
          history.push('/');
        }
      })
      .catch(() => {
        setError('Username or password is incorrect');
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postLogin();
  };

  return (
    <div className="form-wrapper" data-testid="login">
      <form className="form" onSubmit={handleSubmit}>
        {error}
        <h2 className="page-title">Login</h2>
        <fieldset>
          <input className="input-field" type="text" name="username" placeholder="Username" onChange={submitHandler} />
        </fieldset>
        <fieldset>
          <input className="input-field" type="password" name="password" placeholder="Password" onChange={submitHandler} />
        </fieldset>
        <button className="button info" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
