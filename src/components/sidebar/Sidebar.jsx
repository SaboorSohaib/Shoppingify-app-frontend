import React from 'react';
import { FaHome, FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { FcStatistics } from 'react-icons/fc';
import logo from '../../assets/logo.svg';
import './sidebar.css';

const Sidebar = () => (
  <section className="container sidebar__container">
    <div className="sidebar__header">
      <img src={logo} alt="logo" className="sidebar__logo" />
    </div>
    <nav className="sidebar__content">
      <NavLink to="/" exact="true" activeclassname="active" className="nav--link"><FaHome /></NavLink>
      <NavLink to="/history" exact="true" activeclassname="active" className="nav--link"><FaHistory /></NavLink>
      <NavLink to="/statistics" exact="true" activeclassname="active" className="nav--link"><FcStatistics /></NavLink>
    </nav>
    <div className="sidebar__notification">
      <img src={logo} alt="item-avatar" />
    </div>
  </section>
);
export default Sidebar;
