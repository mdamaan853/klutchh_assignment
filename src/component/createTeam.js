import React,{useEffect,useState} from 'react';
import VS from "../assest/images/VS.jpg"
import substitute_img from "../assest/images/demo_player.jfif"
import axios from "axios"
function CreateTeam() {

   const [Team1,setTeam1]=useState([])
   const [selectedCredit,setselectedCredit]=useState([])
   const [sumCredit,setsumCredit]=useState(0)
   const [Team2,setTeam2]=useState([])

   const handleClick=(e)=>{
    console.log(e.target.value)
    var val=parseInt(e.target.value)
    setselectedCredit( arr => [...arr,val])
    setsumCredit(sumCredit+val)
    console.log(selectedCredit)
   }

useEffect(()=>{
    // getTeams()
    axios.get('https://api.klutchh.in/v1/rosters/128622/129859?game_type=false').then((res)=>{
    if(res.data.status == 'SUCCESS'){
        console.log(res.data.data)
        let team1=res.data.data
        setTeam1(res.data.data.roster1)
        setTeam2(res.data.data.roster2)
    }
}).catch(err => console.log(err))
    // console.log(Team2)
},[])

  return (
    <div id="createTeam">
        <div className='card border-primary shadow text-light' style={{backgroundColor:"#211134"}}>
        <div className='card-header'style={{backgroundColor:"rgba(255, 254, 255, 0.2)"}} >Create team</div>
            <div id="selected players" className="text-light d-flex justify-content-center my-4">
                <div className=' d-flex border-info border-1 px-2  mx-2 fw-bold text-light   bg-danger'>?</div>
                <div className='d-flex border-info border-1 px-2  mx-2 fw-bold text-light   bg-danger'>?</div>
                <div className=' d-flex border-info border-1 px-2  mx-2 fw-bold text-light  bg-danger'>?</div>
                <div className='d-flex border-info border-1 px-2  mx-2 fw-bold text-light   bg-danger'>?</div>
                <div className='d-flex border-info border-1 px-2  mx-2 fw-bold text-light   bg-danger'>?</div>
            </div>
            <p className='text-center'>Choose five players to join your team</p>
            <div id="credits" style={{borderRadius:"20px",border:"1px solid white"}} className='text-center mx-auto px-2 py-1'>Credits left :{sumCredit}/15</div>
            <div id="battel" className='d-flex justify-content-between my-4 mx-2'>
                <div className='text-light p-2 bg-warning' style={{borderRadius:"10px"}}>Team Liquid</div>
                <img src={VS} height="30px" className=''/>
                <div className='text-light p-2 bg-danger'style={{borderRadius:"10px"}}>Sentinels</div>
            </div>
            <div id="teams" className='row'>
                <div id="team1" className='col'>
               {Team1.map((team,id)=>{
                return(
                    <div key={id} className="card d-flex flex-row my-2">
                        <input type="checkbox" value={team.credit} className="" onClick={handleClick}/>
                        <div className='p-0'>
                        {team.image_url?<>
                        <img src={team.image_url} height="70px" width="70px"/>
                        </>:<>
                        <img src={substitute_img} height="70px" width="70px"/>
                        </>}
                        </div>
                        <div className='text-dark mx-2'> 
                    {team.name}
                    <p className='text-danger'>{team.credit} : credit</p>
                        </div>
                    </div>
                )
               })}
                </div>
                <div id="team2" className='col'>
                {Team2.map((team,id)=>{
                return(
                    <div key={id} className="card d-flex flex-row my-2">
                        <input type="checkbox" value={team.credit} className="" onClick={handleClick}/>
                        <div className='p-0'>
                        {team.image_url?<>
                        <img src={team.image_url} height="70px" width="70px"/>
                        </>:<>
                        <img src={substitute_img} height="70px" width="70px"/>
                        </>}
                        </div>
                        <div className='text-dark mx-2'> 
                    {team.name}
                    <p className='text-danger'>{team.credit} : credit</p>
                        </div>
                    </div>
                )
               })}
                </div>
            </div>
            <div className='border-2 border-danger px-4'>
                <button disabled={sumCredit >= 13 ?false:true} className='btn w-100 text-center my-2' style={{backgroundColor:"#FF326A"}}>Preview Selection</button>
            </div>
        </div>
    </div>
  );
}

export default CreateTeam;
