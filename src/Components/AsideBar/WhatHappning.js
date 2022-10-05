import React, { useEffect, useState } from 'react'
import WhatHappningLists from './WhatHappningLists'
import TwitterData from "../Data/TwitterData"
const LIST_LENGTH = 3;
const SKIP_LIST = [10]

const WhatHappning = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    setData(()=>{
      
     
      const randomData = []
      for(let i=0;i<LIST_LENGTH; i++){
        const randomIndex = Math.floor(Math.random() * TwitterData.length)
        console.log(randomIndex, !SKIP_LIST.includes(randomIndex))
        if(!SKIP_LIST.includes(TwitterData[randomIndex].id)){
          randomData.push(TwitterData[randomIndex])
        }else{
          i--;
        }
      }

      return [...new Set(randomData)]
    })
  },[])

  console.log(data)

  return (
    <div className="WhatHappning-container">
        <header>
            <h3>What's happening</h3>
        </header>
        <ul className="WhatHappning-container__topList">
            {
              data.map(result => <WhatHappningLists data={result} key={result.id}/>)
              
            }

        
            
            
            <li><a href="#" className="WhatHappning-container__topItemLink" style={{color:'var(--primary-clr)'}}>Show More</a></li>
        </ul>
    </div>
  )
}

export default WhatHappning