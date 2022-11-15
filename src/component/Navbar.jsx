import React from 'react';
// import logo from './logo.svg';

function Navbar() {
  return (
    <div id="navbar" style={{backgroundColor:"#211134"}} className="text-light d-flex justify-content-between p-3">
      <div id="cmpName" className='fw-bold'>
        KlUTCHH
      </div>
      <div id="navigation" className='d-flex gap-4' style={{fontSize:"12px"}}>
        <div>Home</div>
        <div>My Matches</div>
        <div>Leaderboard</div>
        <div>Fantasy Point System</div>
        <div>About Us</div>
        <div>FAQs</div>
        <div>Contact Us</div>
      </div>
      <div id="profile" className='d-flex gap-3'>
      <div>Amaan</div>
      <div>Logout</div>
      </div>
    </div>
  );
}

export default Navbar;
