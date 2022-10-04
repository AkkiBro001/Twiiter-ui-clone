import React, { useState } from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md';
import {IoEarth} from 'react-icons/io5'
import {AiOutlinePicture} from 'react-icons/ai';
import {RiFileGifLine} from 'react-icons/ri'
import {BiPoll} from 'react-icons/bi';
import {BsEmojiSmile} from 'react-icons/bs'
import {Schedule} from "../Icons/Icons"; 
import {HiOutlineLocationMarker} from 'react-icons/hi';

const PostSection = () => {
  const [showOption, setShowOption] = useState(false)
  const [post, setPost] = useState("")

  return (
    <>
    <div className='post__section' style={{borderBottom: `${showOption ? "1px solid var(--light-dark)": ""}`}}>
      {showOption && <div className="post__section__audience" tabIndex='0'>
        <span>Everyone</span>
        <span><MdKeyboardArrowDown/></span>
      </div>}
      <input type="text" className="post__section__input" placeholder="What's happening?"
        onClick={()=>setShowOption(true)}
        onChange={(e)=>setPost(e.target.value)}
        value={post}
      />
      {showOption && <div className="post__section__reply" tabIndex='0'>
        <span><IoEarth/></span>
        <span>Everyone can reply</span>
      </div>}
    </div>
    <div className='post__section__tweet'>
        <div className='post__section__tweet__icons'>
          <span><AiOutlinePicture/></span>
          <span><RiFileGifLine/></span>
          <span><BiPoll/></span>
          <span><BsEmojiSmile/></span>
          <span><Schedule/></span>
          <span><HiOutlineLocationMarker/></span>
        </div>
        <button className= {`post__section__tweet__btn ${post ? 'activePost' : ""}`}
        
        >
            Tweet
        </button>
    </div>
    </>
    
  )
}

export default PostSection