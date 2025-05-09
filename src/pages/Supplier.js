import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

const Supplier = () => {
  const [suppliers, setSuppliers] = useState([
    { id: 1, name: 'ABC Pharmaceuticals', contact: '1112223333' },
    { id: 2, name: 'MegaMed', contact: '8711133097' },
    { id: 3, name: 'PharmaHealth', contact: '86846853256' },
    { id: 4, name: 'Pharmacare', contact: '8723456710064' },
    { id: 5, name: 'XYZ Medical Supplies', contact: '6655334483' },
    { id: 6, name: 'Medico Suppliers', contact: '82534560098' },
    { id: 7, name: 'Global Pharma', contact: '453658990123' },
  ]);

  const [newSupplier, setNewSupplier] = useState({ id: '', name: '', contact: '' });
  const [search, setSearch] = useState(''); // Single search box

  // Handle change in search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle changes in new supplier input fields
  const handleInputChange = (e) => {
    setNewSupplier({ ...newSupplier, [e.target.name]: e.target.value });
  };

  // Add new supplier
  const addSupplier = () => {
    if (!newSupplier.id || !newSupplier.name || !newSupplier.contact) {
      return; // Prevent adding if any field is empty
    }

    setSuppliers([...suppliers, newSupplier]);
    setNewSupplier({ id: '', name: '', contact: '' }); // Reset input fields
  };

  // Delete a supplier
  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter((s) => s.id !== id));
  };

  // Filter suppliers based on search input across all fields
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.id.toString().includes(search) ||
    supplier.name.toLowerCase().includes(search.toLowerCase()) ||
    supplier.contact.includes(search)
  );
  return (
    <div className="main">
      <h3>Supplier</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Supplier:</h4>
          <input
            type="text"
            placeholder="Search by ID, Name or Contact"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>

          <hr />

          <h4><i className="fa fa-plus"></i> Add New Supplier:</h4>
          <input
            type="text"
            placeholder="ID"
            name="id"
            value={newSupplier.id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newSupplier.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Contact"
            name="contact"
            value={newSupplier.contact}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={addSupplier}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Supplier ID</th>
            <th>Supplier Name</th>
            <th>Supplier Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredSuppliers.map((supplier) => (
            <tr key={supplier.id}>
              <td>{supplier.id}</td>
              <td>{supplier.name}</td>
              <td>{supplier.contact}</td>
              <td>
                <button className="btn" onClick={() => deleteSupplier(supplier.id)}>
                  <i className="fa fa-trash"></i> Delete
                </button>
              </td>
            </tr>
          ))}
          {filteredSuppliers.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No matching records found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Supplier;
