import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function MedicationDispensing() {
  const [records, setRecords] = useState([
    { id: 1, prescriptionId: 1, pharmacistId: 1, date: '2023-06-01', time: '10:00:00' },
    { id: 2, prescriptionId: 2, pharmacistId: 3, date: '2023-06-06', time: '10:45:00' },
    { id: 3, prescriptionId: 3, pharmacistId: 7, date: '2023-06-09', time: '1:30:00' },
    { id: 4, prescriptionId: 4, pharmacistId: 5, date: '2023-06-11', time: '05:00:00' },
    { id: 5, prescriptionId: 5, pharmacistId: 6, date: '2023-06-12', time: '03:00:00' },
    { id: 6, prescriptionId: 6, pharmacistId: 3, date: '2023-06-13', time: '12:00:00' },
    { id: 7, prescriptionId: 7, pharmacistId: 4, date: '2023-06-13', time: '4:00:00' },
  ]);

  const [newRecord, setNewRecord] = useState({ id: '', prescriptionId: '', pharmacistId: '', date: '', time: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    setNewRecord({ ...newRecord, [e.target.name]: e.target.value });
  };

  const addRecord = () => {
    const { id, prescriptionId, pharmacistId, date, time } = newRecord;
    if (!id || !prescriptionId || !pharmacistId || !date || !time) return;
    setRecords([...records, newRecord]);
    setNewRecord({ id: '', prescriptionId: '', pharmacistId: '', date: '', time: '' });
  };

  const deleteRecord = (id) => {
    setRecords(records.filter((record) => record.id !== id));
  };

  const filteredRecords = records.filter((record) => {
    const term = searchTerm.toLowerCase();
    return (
      record.id.toString().includes(term) ||
      record.prescriptionId.toString().includes(term) ||
      record.pharmacistId.toString().includes(term) ||
      record.date.toLowerCase().includes(term) ||
      record.time.toLowerCase().includes(term)
    );
  });

  return (
    <div className="main">
      <h3>Medication Dispensing</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Records:</h4>
          <input
            type="text"
            placeholder="Search by any field"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Medication Dispensing Record:</h4>
          <input
            type="text"
            placeholder="ID"
            name="id"
            value={newRecord.id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Prescription ID"
            name="prescriptionId"
            value={newRecord.prescriptionId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Pharmacist ID"
            name="pharmacistId"
            value={newRecord.pharmacistId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Dispensing Date"
            name="date"
            value={newRecord.date}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Dispensing Time"
            name="time"
            value={newRecord.time}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={addRecord}>
            <i className="fa fa-plus"></i> Add
          </button>
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
          {filteredRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.prescriptionId}</td>
              <td>{record.pharmacistId}</td>
              <td>{record.date}</td>
              <td>{record.time}</td>
              <td>
                <button className="btn" onClick={() => deleteRecord(record.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredRecords.length === 0 && (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default MedicationDispensing;
