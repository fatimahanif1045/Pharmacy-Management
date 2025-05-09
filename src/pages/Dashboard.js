import React from 'react';
import '../style/style.css'; 

function Dashboard() {
  return (
    <div className="main">
      <h3>DASHBOARD</h3>
      <hr />

      <h5 id="p1">Patient <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf193;</i></h5>
      <h5 id="p2">Physician <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf0f0;</i></h5>
      <h5 id="p3">Pharmacist <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf234;</i></h5>
      <h5 id="p5">Prescription <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf2bc;</i></h5>
      <h5 id="p7">Medication Dispensing <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf0fa;</i></h5>
      <h5 id="p6">Supplier <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf0f9;</i></h5>
      <h5 id="p4">Inventory <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf217;</i></h5>
      <h5 id="p8">Billing <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf09d;</i></h5>
      <h5 id="p9">Inventory Alert <i className="fa" style={{ fontSize: '100px', opacity: 0.5 }}>&#xf071;</i></h5>
    </div>
  );
}

export default Dashboard;
