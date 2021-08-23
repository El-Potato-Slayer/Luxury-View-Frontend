import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAuth } from '../store/actions';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../store/actions';

function Login() {
  const [input, setInput] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('login', input)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch(setAuth(true));
        // handleAuth(true);
        // dispatch(setUser(res.data));
      })
      .catch(() => {
        setError('Username or password is incorrect');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error}
      <fieldset>
        <input type="text" name="username" placeholder="username" onChange={inputHandler} />
      </fieldset>
      <fieldset>
        <input type="password" name="password" placeholder="password" onChange={inputHandler} />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;
