import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/user/authentication';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelSubmit = async (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    const reqBody = {
      email,
      password,
    };
    await dispatch(login(reqBody));
  };

  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <h2>Login Here!</h2>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login">
          Login
        </button>

        <div>
          <h3>Do not have account!</h3>
          <button type="button" onClick={() => navigate('/signup')}>
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
