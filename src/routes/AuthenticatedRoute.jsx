import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/sidebar/Sidebar';
import History from '../components/history/History';
import Statistics from '../components/statistics/Statistics';
import Item from '../components/item/Item';
import ParentComponent from '../components/ParentComponent';
import AddItem from '../components/item/Additem';
import '../components/sidebar/sidebar.css';

const isAuthenticated = true;
const AuthenticatedRoute = () => {
  const [showAddItem, setShowAddItem] = useState(true);
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleItemClick = () => {
    // Set showAddItem to false when an item is clicked
    setShowAddItem(false);
  };

  return (
    <div className="authenticated__route">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route
          path="/categories/:categoryId/items/:itemId"
          element={<ParentComponent onItemClick={handleItemClick} />}
        />
      </Routes>
      {showAddItem && <AddItem />}
    </div>
  );
};

export default AuthenticatedRoute;
