import React, { Component } from 'react'
import './css/Login.css/'
export default class Login extends Component {
  render() {
    return (
      <div className='Login'>
        <div className='leftPanel'>
            <h2>Welcome to S201 ERP profile </h2>
            <p>Check all options of ERP here</p>
        </div>
        <div className='rightPanel'>
          <div className='card'>
             <input type='name'placeholder='Enter the username'></input>
             <input type='password'placeholder='Enter the password'></input>
             <button>Login</button>
             <p>Don't have an account? <span> Sign Up</span></p>\
             </div> 
            
        </div>
      </div>
    )
  }
}
