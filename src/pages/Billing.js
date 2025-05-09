// pages/Billing.js
import React from 'react';
import '../style/style.css'; // Your existing stylesheet
import 'font-awesome/css/font-awesome.min.css';

function Billing() {
  return (
    <div className="main">
      <h3>Billing</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search a Billing:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Patient ID" name="Patient ID" />
          <input type="text" placeholder="Medication ID" name="Medication ID" />
          <input type="text" placeholder="Billing Date" name="Billing Date" />
          <input type="text" placeholder="Billing Time" name="Billing Time" />
          <input type="text" placeholder="Payment Method" name="Payment Method" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Billing:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Prescription ID" name="Prescription ID" />
          <input type="text" placeholder="Patient ID" name="Patient ID" />
          <input type="text" placeholder="Medication ID" name="Medication ID" />
          <input type="text" placeholder="Total Amount" name="Total Amount" />
          <input type="text" placeholder="Billing Date" name="Billing Date" />
          <input type="text" placeholder="Billing Time" name="Billing Time" />
          <input type="text" placeholder="Payment Method" name="Payment Method" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
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
          {[
            [1, 1, 1, 1, 50, '2023-06-01', '15:30:00', 'Credit Card'],
            [2, 2, 3, 1, 25.5, '2023-06-07', '15:30:00', 'Credit Card'],
            [3, 3, 7, 1, 500, '2023-06-10', '14:30:00', 'Cash'],
            [4, 4, 6, 2, 400, '2023-06-12', '13:30:00', 'Cash'],
            [5, 5, 3, 4, 200, '2023-06-18', '10:00:00', 'Credit Card'],
            [6, 6, 2, 3, 500, '2023-07-13', '13:30:00', 'Cash'],
            [7, 7, 4, 1, 100, '2023-07-14', '12:45:00', 'Credit Card'],
          ].map(([id, pid, patid, medid, amount, date, time, method]) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{pid}</td>
              <td>{patid}</td>
              <td>{medid}</td>
              <td>{amount.toFixed(2)}</td>
              <td>{date}</td>
              <td>{time}</td>
              <td>{method}</td>
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

export default Billing;
