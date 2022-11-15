import React from 'react';
import Navbar from '../component/Navbar';
import CreateTeam from "../component/createTeam"
import News from "../component/news"
import LiveMatch from "../component/livematches"
import bg from "../assest/images/bg2.png"

function Dashboard() {
  return (
    <div className="App" style={{ backgroundImage: 
      `url(${bg})`,filter: `blur("1.5px")`,
      backgroundRepeat:"no-repeat",backgroundColor: "#211134"}}>
      <Navbar/>
        <div className='row pr-0 m-4'>
      <div className='col-3'>
        <News/>
      </div>
      <div className='col-6'> 
       <CreateTeam/>
    </div> 
    <div className='col-3'>
    <LiveMatch/>
    </div>
        </div>
    </div>
  );
}

export default Dashboard;
