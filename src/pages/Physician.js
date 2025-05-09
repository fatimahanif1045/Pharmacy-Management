// pages/Physician.js
import React from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Physician() {
  const physicians = [
    { id: 1, name: 'Dr.Umar', specialty: 'Cardiology', phone: '9876543210' },
    { id: 2, name: 'Dr. Lisa Roberts', specialty: 'Orthopedics', phone: '32658999' },
    { id: 3, name: 'Dr. Sarah Lee', specialty: 'Neurology', phone: '2348345089' },
    { id: 4, name: 'Dr. Mark Johnson', specialty: 'Pediatrics', phone: '227561136' },
    { id: 5, name: 'Dr. James Thompson', specialty: 'Internal Medicine', phone: '4769723434' },
    { id: 6, name: 'Dr. Emily Davis', specialty: 'Dermatology', phone: '7813478245' },
    { id: 7, name: 'Dr. David Anderson', specialty: 'Cardiology', phone: '7852413490' },
  ];

  return (
    <div className="main">
      <h3>Physician</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Physician:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Name" name="Name" />
          <input type="text" placeholder="Specialty" name="Specialty" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Physician:</h4>
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Specialty" />
          <input type="text" placeholder="Phone No" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
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
          {physicians.map((physician) => (
            <tr key={physician.id}>
              <td>{physician.id}</td>
              <td>{physician.name}</td>
              <td>{physician.specialty}</td>
              <td>{physician.phone}</td>
              <td><button className="btn"><i className="fa fa-trash"></i> Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Physician;
