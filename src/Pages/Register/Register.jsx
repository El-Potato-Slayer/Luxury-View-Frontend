import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setUser } from '../../Redux/actions/userActions';

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
  });
  const [error, setError] = useState('');

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  function displayError(error) {
    if (error) {
      return (
        <p>{error}</p>
      );
    }
    return null;
  }

  const registerUser = (e) => {
    e.preventDefault();
    const user = { user: { ...input } };
    axios.post('register', user)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(setUser(res.data));
        history.push('/');
      })
      .catch(() => {
        setError('An error occurred. Please try again later');
      });
  };

  return (
    <div data-testid="register" className="form-wrapper">
      {displayError(error)}
      <form className="form">
        <h2 className="page-title">Register</h2>
        <fieldset>
          <input className="input-field" type="text" placeholder="First Name" name="first_name" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input className="input-field" type="text" placeholder="Last Name" name="last_name" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input className="input-field" type="text" placeholder="Username" name="username" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input className="input-field" type="text" placeholder="Email" name="email" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input className="input-field" type="password" placeholder="Password" name="password" onChange={inputHandler} />
        </fieldset>
        <button className="button info" type="submit" onClick={registerUser}>Submit</button>
      </form>
    </div>
  );
}

export default Register;
