import {HiOutlineEmojiSad, HiOutlineUserAdd} from 'react-icons/hi'
import {MdPostAdd, MdOutlineBlock} from 'react-icons/md'
import {IoVolumeMuteOutline, IoCodeSlashOutline} from 'react-icons/io5';
import {FiFlag} from 'react-icons/fi'
import { useLayoutEffect, useRef, useState } from 'react';

const TweetMoreOption = ({isToggle}) => {
    
   const [positionModal, setPositionModal] = useState({top:'0', right:'-10px'})

   let toggleModal = useRef()

   useLayoutEffect(()=>{
    if(isToggle && toggleModal.current){
        const {bottom} = toggleModal.current.getBoundingClientRect();
        if(bottom > window.innerHeight){
            setPositionModal({bottom:'0', right:'-10px'})
        }
    }
   },[isToggle])

  return (
    <ul ref={toggleModal} className="tweet-container__tweetMoreOption modal-box-shadow" style={positionModal}>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <HiOutlineEmojiSad className="moreIcon"/>
                <span className="text">Not Interested in this Tweet</span>
            </a>
        </li>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <HiOutlineUserAdd className="moreIcon"/>
                <span className="text">Follow@ICC</span>
            </a>
        </li>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <MdPostAdd className="moreIcon"/>
                <span className="text">Add/remove @ICC from Lists</span>
            </a>
        </li>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <IoVolumeMuteOutline className="moreIcon"/>
                <span className="text">Mute @ICC</span>
            </a>
        </li>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <MdOutlineBlock className="moreIcon"/>
                <span className="text">Block @ICC</span>
            </a>
        </li>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <IoCodeSlashOutline className="moreIcon"/>
                <span className="text">Embed Tweet</span>
            </a>
        </li>
        <li className="tweet-container__tweetMoreItems">
            <a href="#" className="tweet-container__tweetMoreLink">
                <FiFlag className="moreIcon"/>
                <span className="text">Report Tweet</span>
            </a>
        </li>
    </ul>
    
  )
}

export default TweetMoreOption