import { useState } from 'react'

import './App.css'
import{Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1> WELCOME TO FRONTEND CLASS</h1>
    <h2>INTRODUCTION TO REACT</h2>
    <h3>G.gagana sai reshma</h3>
    <h4>2400032057</h4>
    
      
      
      <div id='header1'>
        

        
      </div>
      <div id='section1'>

      
      <div className='card'>
        <img src='/images/one.jpeg' alt="image2"></img>
      <label><Link to="/Page1">Go to Page1</Link></label>
      </div>
      
      <div className='card'>
        <img src='/images/two.jpeg' alt="image2"></img>
      <label><Link to="/Page2">Go to Page2</Link></label>
      </div>
        
        <div className='card'>
        <img src='/images/three.jpeg' alt="image2"></img>
       <label> <Link to="/Page3">Go to Page3</Link></label>
       </div>
        
        <div className='card'>
        <img src='/images/fpur.jpeg' alt="image2"></img>
      <label><Link to="/Page4">Go to Page4</Link></label>
      </div>
     
      <div className='card'>
        <img src='/images/five.jpeg' alt="image2"></img>
      <label><Link to="/Page5">Go to Page5</Link></label>
      </div>
      
      <div className='card'>
        <img src='/images/six.jpeg' alt="image2"></img>
      <label><Link to="/Page6">Go to Page6</Link></label>
      </div>
      
     </div>
     <div id='footer1'>
      Copyright @2025.All rights reserved.
     </div> 

    </>
  )
}

export default App



