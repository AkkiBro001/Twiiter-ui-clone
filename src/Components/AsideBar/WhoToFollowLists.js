import React, {useState, useEffect} from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';
import TwitterData from '../Data/TwitterData';





const WhoToFollowLists = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        let filterArr = []
        setData(TwitterData.filter(data => {
            if(!filterArr.includes(data.tweetAccountUserID)){

                filterArr.push(data.tweetAccountUserID)
                return data;
            }
        }))
      },[])
      
    return (
        data.map(result => {
            const {id, tweetAccountName, tweetAccountUserID, tweetProfileImageURL, isVerified} = result
            return <li className="WhoToFollow-container__followItem" key={id}>
            <a href="#" className="WhoToFollow-container__followLink">
                <div className="WhoToFollow-container__profile">
                    <img src={tweetProfileImageURL} alt="img" />
                </div>
                <div className="WhoToFollow-container__profileDetails">
                    <span className="WhoToFollow-container__profileName">{tweetAccountName} <span className="verified">{isVerified && <BsPatchCheckFill/>}</span></span>
                    <p className="WhoToFollow-container__profileUserID">{tweetAccountUserID}</p>
                </div>
                <button className="WhoToFollow-container__followBtn">Follow</button>
            </a>
        </li>
        })
        
    )
}

export default WhoToFollowLists