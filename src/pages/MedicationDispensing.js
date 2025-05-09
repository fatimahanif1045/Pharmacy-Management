// pages/MedicationDispensing.js
import React from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function MedicationDispensing() {
  const records = [
    { id: 1, prescriptionId: 1, pharmacistId: 1, date: '2023-06-01', time: '10:00:00' },
    { id: 2, prescriptionId: 2, pharmacistId: 3, date: '2023-06-06', time: '10:45:00' },
    { id: 3, prescriptionId: 3, pharmacistId: 7, date: '2023-06-09', time: '1:30:00' },
    { id: 4, prescriptionId: 4, pharmacistId: 5, date: '2023-06-11', time: '05:00:00' },
    { id: 5, prescriptionId: 5, pharmacistId: 6, date: '2023-06-12', time: '03:00:00' },
    { id: 6, prescriptionId: 6, pharmacistId: 3, date: '2023-06-13', time: '12:00:00' },
    { id: 7, prescriptionId: 7, pharmacistId: 4, date: '2023-06-13', time: '4:00:00' },
  ];

  return (
    <div className="main">
      <h3>Medication Dispensing</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Prescription ID" name="PrescriptionID" />
          <input type="text" placeholder="Pharmacist ID" name="PharmacistID" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Medication Dispensing Record:</h4>
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="Prescription ID" />
          <input type="text" placeholder="Pharmacist ID" />
          <input type="text" placeholder="Dispensing Date" />
          <input type="text" placeholder="Dispensing Time" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Dispensing ID</th>
            <th>Prescription ID</th>
            <th>Pharmacist ID</th>
            <th>Dispensing Date</th>
            <th>Dispensing Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.prescriptionId}</td>
              <td>{record.pharmacistId}</td>
              <td>{record.date}</td>
              <td>{record.time}</td>
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

export default MedicationDispensing;
