// pages/Patient.js
import React from 'react';
import '../style/style.css'; // Make sure this CSS file includes .main, .btn, .topnav, etc.
import 'font-awesome/css/font-awesome.min.css';

function Patient() {
  const patientData = [
    { id: 1, name: 'Amna Imran', dob: '1990-05-15', phone: '1234567890' },
    { id: 2, name: 'John Smith', dob: '1990-03-15', phone: '4556567888' },
    { id: 3, name: 'Emily Johnson', dob: '1985-07-10', phone: '555561234' },
    { id: 4, name: 'Michael Brown', dob: '1978-11-25', phone: '8765728575' },
    { id: 5, name: 'Sarah Davis', dob: '1982-09-03', phone: '246867890' },
    { id: 6, name: 'Robert Wilson', dob: '1995-02-18', phone: '1357567890' },
    { id: 7, name: 'Jennifer Miller', dob: '1989-06-22', phone: '55537890' },
  ];

  return (
    <div className="main">
      <h3>Patient</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Patient:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Name" name="Name" />
          <input type="text" placeholder="DOB" name="DOB" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Patient:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Name" name="Name" />
          <input type="text" placeholder="DOB" name="DOB" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
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
          {patientData.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.dob}</td>
              <td>{patient.phone}</td>
              <td>
                <button className="btn">
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Patient;
