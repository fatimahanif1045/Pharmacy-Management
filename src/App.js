import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer'; 
import Dashboard from './pages/Dashboard';
import Patient from './pages/Patient';
import Physician from './pages/Physician';
import Pharmacist from './pages/Pharmacist';
import Supplier from './pages/Supplier';
import Inventory from './pages/Inventory';
import Prescription from './pages/Prescription';
import MedicationDispensing from './pages/MedicationDispensing';
import Billing from './pages/Billing';
import InventoryAlert from './pages/InventoryAlert';
import AboutUs from './pages/AboutUs';
import LogIn from './pages/LogIn';

function App() {
  return (
    <Router>
        <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/physician" element={<Physician />} />
            <Route path="/pharmacist" element={<Pharmacist />} />
            <Route path="/supplier" element={<Supplier />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/prescription" element={<Prescription />} />
            <Route path="/medication-dispensing" element={<MedicationDispensing />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/inventory-alert" element={<InventoryAlert />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/logIn" element={<LogIn />} />
            {/* Optional: Default route */}
            <Route path="*" element={<Dashboard />} />
          </Routes>
        <Footer /> 
    </Router>
  );
}

export default App;
