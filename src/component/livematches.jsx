import React,{useEffect,useState} from 'react';
import VS from "../assest/images/VS.jpg"
import substitute_img from "../assest/images/demo_player.jfif"
import mtchimg from "../assest/images/matchImg.png"
import axios from "axios"
function LiveMatch() {
    const news=[
        {text:"Riot underestimated interest for first international Game Changers event",
        color:"info"
    },
        {text:"Riot underestimated interest for first international Game Changers event",
        color:"danger"
    },
        {text:"Riot underestimated interest for first international Game Changers event",
        color:"primary"
    },
        {text:"Riot underestimated interest for first international Game Changers event",
        color:"warning"
    },
        {text:"Riot underestimated interest for first international Game Changers event",
        color:"success"
    },
    ]

  return (
    <div id="createTeam">
        <div className='w-auto'> 
            <img src={mtchimg} style={{width:"-webkit-fill-available"}}/>
        </div>
        <div className='card border-primary shadow mt-3' style={{backgroundColor:"#211134"}}>
        <div className='card-header'  style={{backgroundColor:"rgba(255, 254, 255, 0.2)"}}>Live Matches</div>
            <div id="selected players" className="d-flex flex-column">
                {news.map((data,id)=>{
                    return(
                        <div key={id} className={`m-2 card`} style={{backgroundColor:"rgba(255, 254, 255, 0.2)",height:"100px"}}>
                            <div className='card-header'>
                           <small>{data.text}</small>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default LiveMatch;
