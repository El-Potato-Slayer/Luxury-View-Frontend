import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth, setUser } from '../store/actions';

function Register() {
  const dispatch = useDispatch();

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
    console.log(input);
  };

  function displayError(error) {
    if (error) {
      return (
        <p>{Error}</p>
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
        dispatch(setAuth(true));
        console.log(res.data);
      })
      .catch(() => {
        setError('Username or password is incorrect');
      });
  };

  return (
    <>
      <h2>Register</h2>
      {displayError(error)}
      <form action="">
        <fieldset>
          <input type="text" placeholder="First Name" name="first_name" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Last Name" name="last_name" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Username" name="username" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Email" name="email" onChange={inputHandler} />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Password" name="password" onChange={inputHandler} />
        </fieldset>
        <button type="submit" onClick={registerUser}>Submit</button>
      </form>
    </>
  );
}

export default Register;
