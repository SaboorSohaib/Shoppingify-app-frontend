import React, { useState } from 'react';
import { FaHome, FaHistory } from 'react-icons/fa';
import { FcStatistics } from 'react-icons/fc';
import logo from '../../assets/logo.svg';
import './sidebar.css';

const Sidebar = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <section className="container sidebar__container">
      <div className="sidebar__header">
        <img src={logo} alt="logo" className="sidebar__logo" />
      </div>
      <nav className="sidebar__content">
        <a href="#item" onClick={() => setActiveNav('#item')} className={activeNav === '#item' ? 'active' : ''} aria-label="Item" role="button"><FaHome /></a>
        <a href="#history" onClick={() => setActiveNav('#history')} className={activeNav === '#history' ? 'active' : ''} aria-label="History" role="button"><FaHistory /></a>
        <a href="#statistics" onClick={() => setActiveNav('#statistics')} className={activeNav === '#statistics' ? 'active' : ''} aria-label="Statistics" role="button"><FcStatistics /></a>
      </nav>
      <div className="sidebar__notification">
        <img src={logo} alt="item-avatar" />
      </div>
    </section>
  );
};

export default Sidebar;
