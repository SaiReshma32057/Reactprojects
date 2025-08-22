import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Page2 extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to second page</h1>
        <br />
        <Link to="/page1">Go To Page1</Link>
        <br /><br />
        <Link to="/">Go to HomePage</Link>
      </div>
    );
  }
}
