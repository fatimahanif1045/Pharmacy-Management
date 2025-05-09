import React, { useState } from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function InventoryAlert() {
  const [alerts, setAlerts] = useState([
    { id: 1, medicationId: 1, type: 'Low Stock', date: '2023-06-01', description: 'Only 10 units left' },
    { id: 2, medicationId: 2, type: 'Expiry Date', date: '2023-06-30', description: 'Medication is expiring soon.' },
    { id: 3, medicationId: 3, type: 'Low Stock', date: '2023-06-09', description: 'Only 3 units left' },
    { id: 4, medicationId: 4, type: 'Low Stock', date: '2023-06-11', description: 'Only 10 units left' },
    { id: 5, medicationId: 5, type: 'Expiry Date', date: '2023-09-15', description: 'Medication is expiring soon.' },
    { id: 6, medicationId: 6, type: 'Low Stock', date: '2023-06-28', description: 'Only 10 units left' },
    { id: 7, medicationId: 7, type: 'Expiry Date', date: '2023-09-15', description: 'Medication is expiring soon.' },
  ]);

  const [newAlert, setNewAlert] = useState({
    type: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAlert(prev => ({ ...prev, [name]: value }));
  };

  const handleAddAlert = () => {
    if (!newAlert.type || !newAlert.description) return;
    const newId = alerts.length ? Math.max(...alerts.map(a => a.id)) + 1 : 1;
    const alertToAdd = {
      id: newId,
      medicationId: Math.floor(Math.random() * 10) + 1, // Just a random example
      type: newAlert.type,
      date: new Date().toISOString().split('T')[0],
      description: newAlert.description
    };
    setAlerts(prev => [...prev, alertToAdd]);
    setNewAlert({ type: '', description: '' });
  };

  const handleDeleteAlert = (id) => {
    setAlerts(prev => prev.filter(alert => alert.id !== id));
  };

  return (
    
    <div className="main">
      <h3>Inventory Alert</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Medication ID" name="MedicationID" />
          <input type="text" placeholder="Type" name="Type" />
          <input type="text" placeholder="Alert Date" name="AlertDate" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Alert Type:</h4>
          <input
            type="text"
            placeholder="Type"
            name="type"
            value={newAlert.type}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Description"
            name="description"
            value={newAlert.description}
            onChange={handleInputChange}
          />
          <button className="btn" onClick={handleAddAlert}>
            <i className="fa fa-plus"></i> Add
          </button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Alert ID</th>
            <th>Medication ID</th>
            <th>Alert Type</th>
            <th>Alert Date</th>
            <th>Alert Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map(alert => (
            <tr key={alert.id}>
              <td>{alert.id}</td>
              <td>{alert.medicationId}</td>
              <td>{alert.type}</td>
              <td>{alert.date}</td>
              <td>{alert.description}</td>
              <td>
                <button className="btn" onClick={() => handleDeleteAlert(alert.id)}>
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

export default InventoryAlert;
