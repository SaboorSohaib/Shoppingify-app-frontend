import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/user/Login';
import Signup from '../components/user/Signup';

const UnAuthenticatedRoute = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
  </Routes>
);

export default UnAuthenticatedRoute;
