import React from 'react'
import './navbar.css'



function Navbar() {
  return (
    <nav className="navbar" className ="wrapper">
    <div className="flex-container" className ="container-fluid" className="row justify-content-center" className="card-body">
      <div className="card2">
        <a href="#" className='flex-item space font-size1'>[Company Name]</a>
        <a href="#" className='flex-item space '>[Pricing]</a>
        <a href="#" className='flex-item space '>[Reviews]</a>
        <a href="#" className='flex-item space '>[FAQS]</a>
        <button className='btn-primary flex-item '><a href="#" >[Start Now]</a></button>
      </div>
    </div> 
      
    </nav>
  );
}

export default Navbar;
