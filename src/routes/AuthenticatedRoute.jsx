import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import History from '../components/history/History';
import Statistics from '../components/statistics/Statistics';
import Item from '../components/item/Item';

const AuthenticatedRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Item />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Route>
    </Routes>
  </>
);

export default AuthenticatedRoute;
