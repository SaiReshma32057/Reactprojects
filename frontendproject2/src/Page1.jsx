import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Page1 extends Component{
  render() {
    return (
      <div>
        <h1> India is my Country 
        <br/><br/>
        <Link to="/page2">Go To Page2</Link>
        <br></br>
               
        <Link to="/page3">Go To Page3</Link>
        <br></br>
        <Link to="/page4">Go To Page4</Link>
                <br></br>
        <Link to="/page5">Go To Page5</Link>
                <br></br>

         <Link to="/">Go To HomePage</Link>
        </h1>
        </div>
    )
  }
}