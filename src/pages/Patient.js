import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Patient() {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Amna Imran', dob: '1990-05-15', phone: '1234567890' },
    { id: 2, name: 'John Smith', dob: '1990-03-15', phone: '4556567888' },
    { id: 3, name: 'Emily Johnson', dob: '1985-07-10', phone: '555561234' },
    { id: 4, name: 'Michael Brown', dob: '1978-11-25', phone: '8765728575' },
    { id: 5, name: 'Sarah Davis', dob: '1982-09-03', phone: '246867890' },
    { id: 6, name: 'Robert Wilson', dob: '1995-02-18', phone: '1357567890' },
    { id: 7, name: 'Jennifer Miller', dob: '1989-06-22', phone: '55537890' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newPatient, setNewPatient] = useState({ name: '', dob: '', phone: '' });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewPatientChange = (e) => {
    const { name, value } = e.target;
    setNewPatient(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPatient = () => {
    const { name, dob, phone } = newPatient;
    if (!name || !dob || !phone) return;

    const newId = patients.length ? Math.max(...patients.map(p => p.id)) + 1 : 1;
    const patient = { id: newId, name, dob, phone };
    setPatients(prev => [...prev, patient]);
    setNewPatient({ name: '', dob: '', phone: '' });
  };

  const handleDeletePatient = (id) => {
    setPatients(prev => prev.filter(p => p.id !== id));
  };

  const filteredPatients = patients.filter(p =>
    p.id.toString().includes(searchTerm) ||
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.dob.includes(searchTerm) ||
    p.phone.includes(searchTerm)
  );

  return (
    <div className="main">
      <h3>Patient</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Patient:</h4>
          <input
            type="text"
            placeholder="Search by ID, Name, DOB, or Phone"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Patient:</h4>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newPatient.name}
            onChange={handleNewPatientChange}
          />
          <input
            type="text"
            placeholder="DOB"
            name="dob"
            value={newPatient.dob}
            onChange={handleNewPatientChange}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={newPatient.phone}
            onChange={handleNewPatientChange}
          />
          <button className="btn" onClick={handleAddPatient}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Patient ID</th>
            <th>Patient Name</th>
            <th>DOB</th>
            <th>Phone</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.dob}</td>
              <td>{patient.phone}</td>
              <td>
                <button className="btn" onClick={() => handleDeletePatient(patient.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredPatients.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Patient;
