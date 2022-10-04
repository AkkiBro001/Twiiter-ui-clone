import TweetMoreOption from './TweetMoreOption';
import {FaRegComment, FaRetweet, FaRegHeart} from 'react-icons/fa';
import {MdOutlineMoreHoriz} from 'react-icons/md'
import {FiShare} from 'react-icons/fi';
import Liz from '../../img/Ukrain-War.jpg';
import { useState, useEffect } from 'react';

const TweetContainer = () => {

   const [toggleMore, setToggleMore] = useState(false)

   function toggleMoreFn(e){
        if(!toggleMore) return window.removeEventListener('mouseup', toggleMoreFn)
        const closest = e.target.closest('.tweet-container__tweetMoreOption')
        if(!closest){
            setToggleMore(false)
        }
   }

   useEffect(()=>{
    window.addEventListener('mouseup', toggleMoreFn)
    return ()=> {window.removeEventListener('mouseup', toggleMoreFn)}
  },[toggleMore])

  return (
    <div className="tweet-container">
        <div className="tweet-container__profile">
            <img src={Liz} alt="profile" />
        </div>
        <div className="tweet-container__details">
            <div className="tweet-container__title">
                <span className="title">ICC</span>
                <span className="userID">@ICC · 1h</span>
                <span className={`icon ${toggleMore ? '' : 'hoverModal'}`} onClick={()=>setToggleMore(true)}>
                    {toggleMore && <TweetMoreOption isToggle={toggleMore}/>}
                    <MdOutlineMoreHoriz/>
                </span>
            </div>
            <div className="tweet-container__detail">
            Another close match in Dubai and it is Sri Lanka who win by 6 wickets.
            <br/>Scorecard - http://bit.ly/AsiaCup2022-INDvSL-Super4 #INDvSL #AsiaCup2022
            </div>
            <div className="tweet-container__img">
                <img src={Liz} alt="tweet-img" />
            </div>
            <div className="tweet-container__userInteract">
                <div className="comment">
                    <span className='icon'><FaRegComment/></span>
                    <span className='text'>7660</span>
                </div>
                <div className="retweet">
                    <span className="icon"><FaRetweet/></span>
                    <span className='text'>660</span>
                </div>
                <div className="like">
                    <span className="icon"><FaRegHeart/></span>
                    <span className='text'>660</span>
                </div>
                <div className="share">
                    <span className="icon"><FiShare/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TweetContainer