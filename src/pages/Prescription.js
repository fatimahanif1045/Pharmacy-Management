// pages/Prescription.js
import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Prescription() {
  const [prescriptions, setPrescriptions] = useState([
    { id: 1, patientId: 1, physicianId: 1, medicationId: 1, dosage: '500mg', frequency: 'Once a day', date: '2023-06-01', status: 'Active' },
    { id: 2, patientId: 4, physicianId: 3, medicationId: 1, dosage: '100mg', frequency: 'Once daily', date: '2023-06-05', status: 'Active' },
    { id: 3, patientId: 5, physicianId: 3, medicationId: 1, dosage: '500mg', frequency: 'Twice daily', date: '2023-06-08', status: 'Pending' },
    { id: 4, patientId: 3, physicianId: 2, medicationId: 2, dosage: '200mg', frequency: 'Once daily', date: '2023-06-10', status: 'Active' },
    { id: 5, patientId: 6, physicianId: 3, medicationId: 4, dosage: '500mg', frequency: 'Three times daily', date: '2023-06-10', status: 'Pending' },
    { id: 6, patientId: 4, physicianId: 2, medicationId: 3, dosage: '500mg', frequency: 'Once daily', date: '2023-06-12', status: 'Inactive' },
    { id: 7, patientId: 1, physicianId: 4, medicationId: 1, dosage: '100mg', frequency: 'Twice daily', date: '2023-06-12', status: 'Active' },
  ]);

  const [search, setSearch] = useState('');  // Single search field

  const [newPrescription, setNewPrescription] = useState({
    patientId: '', physicianId: '', medicationId: '', dosage: '', frequency: '', date: '', status: ''
  });

  // Handle change in the search box
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleNewPrescriptionChange = (e) => {
    const { name, value } = e.target;
    setNewPrescription(prev => ({ ...prev, [name]: value }));
  };

  const handleAddPrescription = () => {
    const { patientId, physicianId, medicationId, dosage, frequency, date, status } = newPrescription;
    if (!patientId || !physicianId || !medicationId || !dosage || !frequency || !date || !status) return;

    const newId = prescriptions.length ? Math.max(...prescriptions.map(p => p.id)) + 1 : 1;
    const newEntry = { id: newId, patientId, physicianId, medicationId, dosage, frequency, date, status };
    setPrescriptions(prev => [...prev, newEntry]);
    setNewPrescription({ patientId: '', physicianId: '', medicationId: '', dosage: '', frequency: '', date: '', status: '' });
  };

  const handleDeletePrescription = (id) => {
    setPrescriptions(prev => prev.filter(p => p.id !== id));
  };

  // Filter prescriptions based on the search term across all fields
  const filteredPrescriptions = prescriptions.filter(p =>
    p.id.toString().includes(search) ||
    p.patientId.toString().includes(search) ||
    p.physicianId.toString().includes(search) ||
    p.medicationId.toString().includes(search) ||
    p.dosage.includes(search) ||
    p.date.includes(search) ||
    p.frequency.toLowerCase().includes(search.toLowerCase())||
    p.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="main">
      <h3>Prescription</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search:</h4>
          <input
            type="text"
            placeholder="Search ..."
            value={search}
            onChange={handleSearchChange}
          />
          <button type="button"><i className="fa fa-search"></i></button>
          <hr />

          <h4><i className="fa fa-plus"></i> Add New Prescription:</h4>
          <input
            type="text"
            placeholder="Patient ID"
            name="patientId"
            value={newPrescription.patientId}
            onChange={handleNewPrescriptionChange}
          />
          <input
            type="text"
            placeholder="Physician ID"
            name="physicianId"
            value={newPrescription.physicianId}
            onChange={handleNewPrescriptionChange}
          />
          <input
            type="text"
            placeholder="Medication ID"
            name="medicationId"
            value={newPrescription.medicationId}
            onChange={handleNewPrescriptionChange}
          />
          <input
            type="text"
            placeholder="Dosage"
            name="dosage"
            value={newPrescription.dosage}
            onChange={handleNewPrescriptionChange}
          />
          <input
            type="text"
            placeholder="Frequency"
            name="frequency"
            value={newPrescription.frequency}
            onChange={handleNewPrescriptionChange}
          />
          <input
            type="text"
            placeholder="Prescribing Date"
            name="date"
            value={newPrescription.date}
            onChange={handleNewPrescriptionChange}
          />
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={newPrescription.status}
            onChange={handleNewPrescriptionChange}
          />
          <button className="btn" onClick={handleAddPrescription}>
            <i className="fa fa-plus"></i> Add
          </button>
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
          {filteredPrescriptions.map((item) => (
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
                <button className="btn" onClick={() => handleDeletePrescription(item.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}

          {filteredPrescriptions.length === 0 && (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Prescription;
