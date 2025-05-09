import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Billing() {
  const [billings, setBillings] = useState([
    { id: 1, prescriptionId: 1, patientId: 1, medicationId: 1, totalAmount: 50, date: '2023-06-01', time: '15:30:00', paymentMethod: 'Credit Card' },
    { id: 2, prescriptionId: 2, patientId: 3, medicationId: 1, totalAmount: 25.5, date: '2023-06-07', time: '15:30:00', paymentMethod: 'Credit Card' },
    { id: 3, prescriptionId: 3, patientId: 7, medicationId: 1, totalAmount: 500, date: '2023-06-10', time: '14:30:00', paymentMethod: 'Cash' },
    { id: 4, prescriptionId: 4, patientId: 6, medicationId: 2, totalAmount: 400, date: '2023-06-12', time: '13:30:00', paymentMethod: 'Cash' },
    { id: 5, prescriptionId: 5, patientId: 3, medicationId: 4, totalAmount: 200, date: '2023-06-18', time: '10:00:00', paymentMethod: 'Credit Card' },
    { id: 6, prescriptionId: 6, patientId: 2, medicationId: 3, totalAmount: 500, date: '2023-07-13', time: '13:30:00', paymentMethod: 'Cash' },
    { id: 7, prescriptionId: 7, patientId: 4, medicationId: 1, totalAmount: 100, date: '2023-07-14', time: '12:45:00', paymentMethod: 'Credit Card' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newBilling, setNewBilling] = useState({
    id: '',
    prescriptionId: '',
    patientId: '',
    medicationId: '',
    totalAmount: '',
    date: '',
    time: '',
    paymentMethod: '',
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleInputChange = (e) => {
    setNewBilling({ ...newBilling, [e.target.name]: e.target.value });
  };

  const addBilling = () => {
    const { id, prescriptionId, patientId, medicationId, totalAmount, date, time, paymentMethod } = newBilling;
    if (!id || !prescriptionId || !patientId || !medicationId || !totalAmount || !date || !time || !paymentMethod) return;

    setBillings([...billings, {
      id: parseInt(id),
      prescriptionId: parseInt(prescriptionId),
      patientId: parseInt(patientId),
      medicationId: parseInt(medicationId),
      totalAmount: parseFloat(totalAmount),
      date,
      time,
      paymentMethod
    }]);

    setNewBilling({
      id: '',
      prescriptionId: '',
      patientId: '',
      medicationId: '',
      totalAmount: '',
      date: '',
      time: '',
      paymentMethod: '',
    });
  };

  const deleteBilling = (id) => {
    setBillings(billings.filter((billing) => billing.id !== id));
  };

  const filteredBillings = billings.filter((billing) => {
    const values = Object.values(billing).join(' ').toLowerCase();
    return values.includes(searchTerm);
  });

  return (
    <div className="main">
      <h3>Billing</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Billing Records:</h4>
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
          <h4><i className="fa fa-plus"></i> Add New Billing:</h4>
          <input type="text" placeholder="ID" name="id" value={newBilling.id} onChange={handleInputChange} />
          <input type="text" placeholder="Prescription ID" name="prescriptionId" value={newBilling.prescriptionId} onChange={handleInputChange} />
          <input type="text" placeholder="Patient ID" name="patientId" value={newBilling.patientId} onChange={handleInputChange} />
          <input type="text" placeholder="Medication ID" name="medicationId" value={newBilling.medicationId} onChange={handleInputChange} />
          <input type="text" placeholder="Total Amount" name="totalAmount" value={newBilling.totalAmount} onChange={handleInputChange} />
          <input type="text" placeholder="Billing Date" name="date" value={newBilling.date} onChange={handleInputChange} />
          <input type="text" placeholder="Billing Time" name="time" value={newBilling.time} onChange={handleInputChange} />
          <input type="text" placeholder="Payment Method" name="paymentMethod" value={newBilling.paymentMethod} onChange={handleInputChange} />
          <button className="btn" onClick={addBilling}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Billing ID</th>
            <th>Prescription ID</th>
            <th>Patient ID</th>
            <th>Medication ID</th>
            <th>Total Amount</th>
            <th>Billing Date</th>
            <th>Billing Time</th>
            <th>Payment Method</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBillings.map((billing) => (
            <tr key={billing.id}>
              <td>{billing.id}</td>
              <td>{billing.prescriptionId}</td>
              <td>{billing.patientId}</td>
              <td>{billing.medicationId}</td>
              <td>{billing.totalAmount}</td>
              <td>{billing.date}</td>
              <td>{billing.time}</td>
              <td>{billing.paymentMethod}</td>
              <td>
                <button className="btn" onClick={() => deleteBilling(billing.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredBillings.length === 0 && (
            <tr>
              <td colSpan="9" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Billing;
