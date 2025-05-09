import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Pharmacist() {
  const [pharmacists, setPharmacists] = useState([
    { id: 1, name: 'Sarah Khan', contact: '5551234567' },
    { id: 2, name: 'Alex Turner', contact: '56768456978' },
    { id: 3, name: 'Laura Carter', contact: '42590072834' },
    { id: 4, name: 'Ethan Martinez', contact: '9764560981' },
    { id: 5, name: 'Ava Clark', contact: '782344539' },
    { id: 6, name: 'Olivia Harris', contact: '8234560098' },
    { id: 7, name: 'Matthew Brown', contact: '8573223111' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newPharmacist, setNewPharmacist] = useState({ name: '', contact: '' });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewChange = (e) => {
    const { name, value } = e.target;
    setNewPharmacist(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPharmacist = () => {
    const { name, contact } = newPharmacist;
    if (!name || !contact) return;

    const newId = pharmacists.length ? Math.max(...pharmacists.map(p => p.id)) + 1 : 1;
    const newEntry = { id: newId, name, contact };
    setPharmacists(prev => [...prev, newEntry]);
    setNewPharmacist({ name: '', contact: '' });
  };

  const handleDeletePharmacist = (id) => {
    setPharmacists(prev => prev.filter(p => p.id !== id));
  };

  const filteredPharmacists = pharmacists.filter(p =>
    p.id.toString().includes(searchTerm) ||
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.contact.includes(searchTerm)
  );

  return (
    <div className="main">
      <h3>Pharmacist</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Pharmacist:</h4>
          <input
            type="text"
            placeholder="Search by ID, Name, or Contact"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Pharmacist:</h4>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newPharmacist.name}
            onChange={handleNewChange}
          />
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            value={newPharmacist.contact}
            onChange={handleNewChange}
          />
          <button className="btn" onClick={handleAddPharmacist}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Pharmacist ID</th>
            <th>Pharmacist Name</th>
            <th>Pharmacist Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPharmacists.map((pharmacist) => (
            <tr key={pharmacist.id}>
              <td>{pharmacist.id}</td>
              <td>{pharmacist.name}</td>
              <td>{pharmacist.contact}</td>
              <td>
                <button className="btn" onClick={() => handleDeletePharmacist(pharmacist.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredPharmacists.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Pharmacist;
