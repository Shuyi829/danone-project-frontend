import React from 'react';
import './PlantManagementSystem.css';
import logo from './assets/danonelogohorizontal-1.png';
import Sidebar from './Sidebar';

function PlantManagementSystem() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Company Logo" className="logo" />
        <h1 className="title">Plant Management System</h1>
        <div className="buttons">
          <button className="profile-button">Profile</button>
          <button className="logout-button">Logout</button>
        </div>
      </header>
      <main className="main">
        <Sidebar />
        <div className="content">{}</div>
      </main>
    </div>
  );
}

export default PlantManagementSystem;
