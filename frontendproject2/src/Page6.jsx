import React, { Component } from 'react'
import'./css/Page6.css'
export default class Page6 extends Component {
  render() {
    return (
    <>
      <div id="header">
        <div className="logo">
          LUXURY BRANDS
        </div>
      </div>

      <div id="section">
        <div className="card">
          <img src="images/2.jpeg" alt="image1" />
          <label>CELINE</label>
        </div>
        <div className="card">
          <img src="/images/3.jpeg" alt="image2" />
          <label>PRADA</label>
        </div>
        <div className="card">
          <img src="/images/5.jpeg" alt="image3" />
          <label>LOUIS VUITTON</label>
        </div>
      </div>

      <div id="footer">
        Copyright @ 2025.All rights reserved.
      </div>
    </>
  );
}
}


    
