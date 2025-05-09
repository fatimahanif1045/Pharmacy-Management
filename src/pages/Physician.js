import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Physician() {
  const [physicians, setPhysicians] = useState([
    { id: 1, name: 'Dr.Umar', specialty: 'Cardiology', phone: '9876543210' },
    { id: 2, name: 'Dr. Lisa Roberts', specialty: 'Orthopedics', phone: '32658999' },
    { id: 3, name: 'Dr. Sarah Lee', specialty: 'Neurology', phone: '2348345089' },
    { id: 4, name: 'Dr. Mark Johnson', specialty: 'Pediatrics', phone: '227561136' },
    { id: 5, name: 'Dr. James Thompson', specialty: 'Internal Medicine', phone: '4769723434' },
    { id: 6, name: 'Dr. Emily Davis', specialty: 'Dermatology', phone: '7813478245' },
    { id: 7, name: 'Dr. David Anderson', specialty: 'Cardiology', phone: '7852413490' },
  ]);

  const [searchTerm, setSearchTerm] = useState(''); // Single search field
  const [newPhysician, setNewPhysician] = useState({ name: '', specialty: '', phone: '' });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewPhysicianChange = (e) => {
    const { name, value } = e.target;
    setNewPhysician(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPhysician = () => {
    const { name, specialty, phone } = newPhysician;
    if (!name || !specialty || !phone) return;

    const newId = physicians.length ? Math.max(...physicians.map(p => p.id)) + 1 : 1;
    const newEntry = { id: newId, name, specialty, phone };
    setPhysicians(prev => [...prev, newEntry]);
    setNewPhysician({ name: '', specialty: '', phone: '' });
  };

  const handleDeletePhysician = (id) => {
    setPhysicians(prev => prev.filter(p => p.id !== id));
  };

  const filteredPhysicians = physicians.filter(p =>
    p.id.toString().includes(searchTerm) ||
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.phone.includes(searchTerm)
  );

  return (
    <div className="main">
      <h3>Physician</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Physician:</h4>
          <input
            type="text"
            placeholder="Search by ID, Name, Specialty, or Phone"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Physician:</h4>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newPhysician.name}
            onChange={handleNewPhysicianChange}
          />
          <input
            type="text"
            placeholder="Specialty"
            name="specialty"
            value={newPhysician.specialty}
            onChange={handleNewPhysicianChange}
          />
          <input
            type="text"
            placeholder="Phone No"
            name="phone"
            value={newPhysician.phone}
            onChange={handleNewPhysicianChange}
          />
          <button className="btn" onClick={handleAddPhysician}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Physician ID</th>
            <th>Physician Name</th>
            <th>Specialty</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPhysicians.map((physician) => (
            <tr key={physician.id}>
              <td>{physician.id}</td>
              <td>{physician.name}</td>
              <td>{physician.specialty}</td>
              <td>{physician.phone}</td>
              <td>
                <button className="btn" onClick={() => handleDeletePhysician(physician.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredPhysicians.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Physician;
