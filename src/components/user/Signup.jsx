import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/user/authentication';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmedPassword, setConfirmedPassword] = useState('');
  const success = useSelector((state) => state.auth.success);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handelSubmit = async (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    if (password !== confirmedPassword) {
      toast.error("Passwords don't match");
      return;
    }

    const reqBody = {
      name,
      email,
      password,
    };
    await dispatch(signup(reqBody));
  };

  useEffect(() => {
    if (success) {
      navigate('/login');
    }
  }, [success, navigate]);

  return (
    <div className="container">
      <form onSubmit={handelSubmit}>
        <h2>Create Your Account Here!</h2>
        <div className="form-group">
          <input
            type="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            value={confirmedPassword}
            onChange={(e) => setConfirmedPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="sign-up">
          Signup
        </button>

        <div>
          <p>Already have an account? Click here to login</p>
          <button type="button" onClick={() => navigate('/')}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
