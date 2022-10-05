import React, {useState, useEffect} from "react";
import WhoToFollowLists from "./WhoToFollowLists"
import {FollowData} from '../Data/TwitterData';

const WhoToFollow = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(FollowData)
  },[])

  return (
    <div className="WhoToFollow-container">
        <header>
            <h3>Who to follow</h3>
        </header>
        <ul className="WhoToFollow-container__followList">
            {
            data.map(result => <WhoToFollowLists data={result} key={result.id}/>)
            
            }
            
            <li><a href="#" className="WhoToFollow-container__followLink" style={{color:'var(--primary-clr)'}}>Show More</a></li>
        </ul>
    </div>
  )
}

export default WhoToFollow