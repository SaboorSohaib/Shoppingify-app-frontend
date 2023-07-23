import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import History from '../components/history/History';
import Statistics from '../components/statistics/Statistics';
import Item from '../components/item/Item';
import '../components/sidebar/sidebar.css';

const isAuthenticated = true;
const AuthenticatedRoute = () => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="authenticated__route">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </div>
  );
};

export default AuthenticatedRoute;
