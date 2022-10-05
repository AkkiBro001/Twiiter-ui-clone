import TweetMoreOption from './TweetMoreOption';
import {FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa';
import {MdOutlineMoreHoriz} from 'react-icons/md'
import {FiShare} from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { Verified } from '../Icons/Icons';
import TwitterData from '../Data/TwitterData';


const TweetContainer = () => {
   
   const [toggleMore, setToggleMore] = useState(false)
   const [data, setData] = useState([]);
   useEffect(()=>{
      window.addEventListener('mouseup', toggleMoreFn)
      return ()=> {window.removeEventListener('mouseup', toggleMoreFn)}
    },[toggleMore])
    
    useEffect(()=>{
      setData(TwitterData)
    },[])

   
   function toggleMoreFn(e){
        if(!toggleMore) return window.removeEventListener('mouseup', toggleMoreFn)
        const closest = e.target.closest('.tweet-container__tweetMoreOption')
        if(!closest){
            setToggleMore(false)
        }
   }

return (
data.map(result => {
    const {id, tweetAccountName, tweetAccountUserID, tweetCreated, tweetDetails, tweetImageURL, tweetProfileImageURL, tweetComment, tweetRetweet, tweetLike, isVerified} = result
    return <div className="tweet-container" key={id}>
    <div className="tweet-container__profile">
        <img src={tweetProfileImageURL} alt="profile" />
    </div>
    <div className="tweet-container__details">
        <div className="tweet-container__title">
            <span className="title">{tweetAccountName}</span>
            {isVerified && <Verified/>}
            <span className="userID">{tweetAccountUserID} · {tweetCreated}</span>
            <span className={`icon ${toggleMore ? '' : 'hoverModal'}`} onClick={()=>setToggleMore(true)}>
                {toggleMore && <TweetMoreOption isToggle={toggleMore}/>}
                <MdOutlineMoreHoriz/>
            </span>
        </div>
        <div className="tweet-container__detail">
        {tweetDetails}
        </div>
        <div className="tweet-container__img">
            {tweetImageURL && <img src={tweetImageURL} alt="tweet-img" />}
        </div>
        <div className="tweet-container__userInteract">
            <div className="comment">
                <span className='icon'><FaRegComment/></span>
                <span className='text'>{tweetComment}</span>
            </div>
            <div className="retweet">
                <span className="icon"><FaRetweet/></span>
                <span className='text'>{tweetRetweet}</span>
            </div>
            <div className="like">
                <span className="icon"><FaRegHeart/></span>
                <span className='text'>{tweetLike}</span>
            </div>
            <div className="share">
                <span className="icon"><FiShare/></span>
            </div>
        </div>
    </div>
</div>
})

    
    
  )
}

export default TweetContainer