import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Inventory() {
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Panadol', dosage: '500mg', expiry: '2023-12-31', supplierId: 1, quantity: 100 },
    { id: 2, name: 'Ibuprofen', dosage: '200mg', expiry: '2023-08-15', supplierId: 4, quantity: 25 },
    { id: 3, name: 'Amoxicillin', dosage: '500mg', expiry: '2024-07-31', supplierId: 5, quantity: 73 },
    { id: 4, name: 'Aspirin', dosage: '100mg', expiry: '2023-06-30', supplierId: 2, quantity: 50 },
    { id: 5, name: 'Ventolin', dosage: '100mcg', expiry: '2026-11-15', supplierId: 3, quantity: 50 },
    { id: 6, name: 'Paracetamol', dosage: '500mg', expiry: '2025-09-20', supplierId: 7, quantity: 200 },
    { id: 7, name: 'Lipitor', dosage: '10mg', expiry: '2024-10-05', supplierId: 6, quantity: 300 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [newMed, setNewMed] = useState({
    name: '',
    dosage: '',
    expiry: '',
    supplierId: '',
    quantity: '',
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleNewMedChange = (e) => {
    const { name, value } = e.target;
    setNewMed((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddMedication = () => {
    const { name, dosage, expiry, supplierId, quantity } = newMed;
    if (!name || !dosage || !expiry || !supplierId || !quantity) return;

    const newId = inventory.length ? Math.max(...inventory.map((i) => i.id)) + 1 : 1;
    const medication = {
      id: newId,
      name,
      dosage,
      expiry,
      supplierId: parseInt(supplierId),
      quantity: parseInt(quantity),
    };

    setInventory((prev) => [...prev, medication]);
    setNewMed({ name: '', dosage: '', expiry: '', supplierId: '', quantity: '' });
  };

  const handleDelete = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredInventory = inventory.filter((item) => {
    const term = searchTerm.toLowerCase();
    return (
      item.id.toString().includes(term) ||
      item.name.toLowerCase().includes(term) ||
      item.dosage.toLowerCase().includes(term) ||
      item.expiry.includes(term) ||
      item.supplierId.toString().includes(term) ||
      item.quantity.toString().includes(term)
    );
  });

  return (
    <div className="main">
      <h3>Inventory</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Inventory:</h4>
          <input
            type="text"
            placeholder="Search by any field"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="button"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Medication:</h4>
          <input type="text" placeholder="Name" name="name" value={newMed.name} onChange={handleNewMedChange} />
          <input type="text" placeholder="Dosage" name="dosage" value={newMed.dosage} onChange={handleNewMedChange} />
          <input type="text" placeholder="Expiry Date" name="expiry" value={newMed.expiry} onChange={handleNewMedChange} />
          <input type="text" placeholder="Supplier ID" name="supplierId" value={newMed.supplierId} onChange={handleNewMedChange} />
          <input type="text" placeholder="Quantity" name="quantity" value={newMed.quantity} onChange={handleNewMedChange} />
          <button className="btn" onClick={handleAddMedication}>
            <i className="fa fa-plus"></i> Add
          </button>
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
          {filteredInventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.dosage}</td>
              <td>{item.expiry}</td>
              <td>{item.supplierId}</td>
              <td>{item.quantity}</td>
              <td>
                <button className="btn" onClick={() => handleDelete(item.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredInventory.length === 0 && (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
