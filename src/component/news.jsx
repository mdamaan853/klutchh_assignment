import React,{useEffect,useState} from 'react';
import VS from "../assest/images/VS.jpg"
import substitute_img from "../assest/images/demo_player.jfif"
import axios from "axios"
function News() {

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
        <div className='card border-primary shadow' style={{backgroundColor:"#211134"}}>
        <div className='card-header' style={{backgroundColor:"rgba(255, 254, 255, 0.2)"}}>News</div>
            <div id="selected players" className="d-flex flex-column">
                {news.map((data,id)=>{
                    return(
                        <div key={id} className={`bg-${data.color} m-2`} style={{height:"100px",borderRadius:"10px"}}>
                           <small className='text-bottom p-2' style={{fontSize:"10px"}}>{data.text}</small>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default News;
