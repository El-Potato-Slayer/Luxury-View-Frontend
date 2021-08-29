import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setAuth, setUser } from '../store/actions';

function Login() {
  const history = useHistory();

  if (history.location.state) {
    localStorage.setItem('redirectedLocation', history.location.state.from.pathname);
  }
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  function postLogin() {
    axios.post('login', input)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(setUser(res.data));
        dispatch(setAuth(true));
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
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit}>
        {error}
        <h2 className="page-title">Login</h2>
        <fieldset>
          <input className="input-field" type="text" name="username" placeholder="username" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input className="input-field" type="password" name="password" placeholder="password" onChange={inputHandler} />
        </fieldset>
        <button className="info-button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
