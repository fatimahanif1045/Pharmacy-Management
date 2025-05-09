// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/style.css';

function Sidebar() {
  return (
    <div className="sidenav">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/patient">Patient</Link>
      <Link to="/physician">Physician</Link>
      <Link to="/pharmacist">Pharmacist</Link>
      <Link to="/supplier">Supplier</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/prescription">Prescription</Link>
      <Link to="/medication-dispensing">Medication Dispensing</Link>
      <Link to="/billing">Billing</Link>
      <Link to="/inventory-alert">Inventory Alert</Link>
      <Link to="/about">About Us</Link>
      <Link to="/logIn">Log out</Link>
    </div>
  );
}

export default Sidebar;
