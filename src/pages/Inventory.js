// pages/Inventory.js
import React from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Inventory() {
  const inventoryItems = [
    { id: 1, name: 'Panadol', dosage: '500mg', expiry: '2023-12-31', supplierId: 1, quantity: 100 },
    { id: 2, name: 'Ibuprofen', dosage: '200mg', expiry: '2023-08-15', supplierId: 4, quantity: 25 },
    { id: 3, name: 'Amoxicillin', dosage: '500mg', expiry: '2024-07-31', supplierId: 5, quantity: 73 },
    { id: 4, name: 'Aspirin', dosage: '100mg', expiry: '2023-06-30', supplierId: 2, quantity: 50 },
    { id: 5, name: 'Ventolin', dosage: '100mcg', expiry: '2026-11-15', supplierId: 3, quantity: 50 },
    { id: 6, name: 'Paracetamol', dosage: '500mg', expiry: '2025-09-20', supplierId: 7, quantity: 200 },
    { id: 7, name: 'Lipitor', dosage: '10mg', expiry: '2024-10-05', supplierId: 6, quantity: 300 },
  ];

  return (
    <div className="main">
      <h3>Inventory</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Name" name="Name" />
          <input type="text" placeholder="Expiry Date" name="ExpiryDate" />
          <input type="text" placeholder="Supplier ID" name="SupplierID" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Medication:</h4>
          <input type="text" placeholder="Medication ID" name="ID" />
          <input type="text" placeholder="Medication Name" name="Name" />
          <input type="text" placeholder="Dosage" name="Dosage" />
          <input type="text" placeholder="Expiry Date" name="ExpiryDate" />
          <input type="text" placeholder="Supplier ID" name="SupplierID" />
          <input type="text" placeholder="Quantity" name="Quantity" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Medication ID</th>
            <th>Medication Name</th>
            <th>Dosage</th>
            <th>Expiry Date</th>
            <th>Supplier ID</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.dosage}</td>
              <td>{item.expiry}</td>
              <td>{item.supplierId}</td>
              <td>{item.quantity}</td>
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

export default Inventory;
