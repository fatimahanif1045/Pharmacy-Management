// pages/Pharmacist.js
import React from 'react';
import '../style/style.css';
import 'font-awesome/css/font-awesome.min.css';

function Pharmacist() {
  const pharmacists = [
    { id: 1, name: 'Sarah Khan', contact: '5551234567' },
    { id: 2, name: 'Alex Turner', contact: '56768456978' },
    { id: 3, name: 'Laura Carter', contact: '42590072834' },
    { id: 4, name: 'Ethan Martinez', contact: '9764560981' },
    { id: 5, name: 'Ava Clark', contact: '782344539' },
    { id: 6, name: 'Olivia Harris', contact: '8234560098' },
    { id: 7, name: 'Matthew Brown', contact: '8573223111' },
  ];

  return (
    <div className="main">
      <h3>Pharmacist</h3>
      <hr />

      <div className="topnav">
        <div className="search-container">
          <h4>Search Pharmacist:</h4>
          <input type="text" placeholder="ID" name="ID" />
          <input type="text" placeholder="Name" name="Name" />
          <input type="text" placeholder="Contact" name="Contact" />
          <button type="submit"><i className="fa fa-search"></i></button>

          <hr />
          <h4><i className="fa fa-plus"></i> Add New Pharmacist:</h4>
          <input type="text" placeholder="ID" />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Contact" />
          <button className="btn"><i className="fa fa-plus"></i> Add</button>
        </div>
      </div>

      <hr />

      <table>
        <thead>
          <tr>
            <th>Pharmacist ID</th>
            <th>Pharmacist Name</th>
            <th>Pharmacist Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {pharmacists.map((pharmacist) => (
            <tr key={pharmacist.id}>
              <td>{pharmacist.id}</td>
              <td>{pharmacist.name}</td>
              <td>{pharmacist.contact}</td>
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

export default Pharmacist;
