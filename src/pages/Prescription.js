// pages/Prescription.js
import React from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Prescription() {
  const prescriptions = [
    { id: 1, patientId: 1, physicianId: 1, medicationId: 1, dosage: '500mg', frequency: 'Once a day', date: '2023-06-01', status: 'Active' },
    { id: 2, patientId: 4, physicianId: 3, medicationId: 1, dosage: '100mg', frequency: 'Once daily', date: '2023-06-05', status: 'Active' },
    { id: 3, patientId: 5, physicianId: 3, medicationId: 1, dosage: '500mg', frequency: 'Twice daily', date: '2023-06-08', status: 'Pending' },
    { id: 4, patientId: 3, physicianId: 2, medicationId: 2, dosage: '200mg', frequency: 'Once daily', date: '2023-06-10', status: 'Active' },
    { id: 5, patientId: 6, physicianId: 3, medicationId: 4, dosage: '500mg', frequency: 'Three times daily', date: '2023-06-10', status: 'Pending' },
    { id: 6, patientId: 4, physicianId: 2, medicationId: 3, dosage: '500mg', frequency: 'Once daily', date: '2023-06-12', status: 'Inactive' },
    { id: 7, patientId: 1, physicianId: 4, medicationId: 1, dosage: '100mg', frequency: 'Twice daily', date: '2023-06-12', status: 'Active' },
  ];

  return (
    <div className="main">
      <h3>Prescription</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Patient ID" name="PatientID" />
          <input type="text" placeholder="Physician ID" name="PhysicianID" />
          <input type="text" placeholder="Medication ID" name="MedicationID" />
          <input type="text" placeholder="Date" name="Date" />
          <input type="text" placeholder="Status" name="Status" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Prescription:</h4>
          <input type="text" placeholder="Prescription ID" />
          <input type="text" placeholder="Patient ID" />
          <input type="text" placeholder="Physician ID" />
          <input type="text" placeholder="Medication ID" />
          <input type="text" placeholder="Dosage" />
          <input type="text" placeholder="Frequency" />
          <input type="text" placeholder="Prescribing Date" />
          <input type="text" placeholder="Status" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Prescription ID</th>
            <th>Patient ID</th>
            <th>Physician ID</th>
            <th>Medication ID</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Prescribing Date</th>
            <th>Prescription Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.patientId}</td>
              <td>{item.physicianId}</td>
              <td>{item.medicationId}</td>
              <td>{item.dosage}</td>
              <td>{item.frequency}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
              <td>
                <button className="btn"><i className="fa fa-trash"></i> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Prescription;
