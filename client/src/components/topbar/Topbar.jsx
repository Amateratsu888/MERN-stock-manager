import React from "react";
import "./topbar.css";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">LIMEX</span>
        </div>
        <div className="topRight">
        <button className='btn btn-primary' href="#text-buttons">Logout</button>
        </div>
      </div>
    </div>
  );
}
