import React, {useState, useEffect} from "react";
import "./__Main.css";
import TweetContainer from "./TweetContainer";
import NavHome from "./NavHome";
import PostContainer from "./PostContainer";
import TwitterData from '../Data/TwitterData';

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(TwitterData)
  },[])
  
  return (
    <div className="main-container">
        <NavHome/>
        <PostContainer/>

        {
          data.map(result => {

              return <TweetContainer data={result} key={result.id}/>
          })
        }
        
    </div>
  )
}

export default Main