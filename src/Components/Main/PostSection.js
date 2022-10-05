import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import {MdKeyboardArrowDown} from 'react-icons/md';
import {IoEarth} from 'react-icons/io5'
import {AiOutlinePicture} from 'react-icons/ai';
import {RiFileGifLine} from 'react-icons/ri'
import {BiPoll} from 'react-icons/bi';
import {BsEmojiSmile} from 'react-icons/bs'
import {Schedule} from "../Icons/Icons"; 
import {HiOutlineLocationMarker} from 'react-icons/hi';
import PostModal from './PostModal';
// import {BiUserCheck} from 'react-icons/bi';
import { PeopleFollow } from '../Icons/Icons';
import {MdOutlineAlternateEmail} from 'react-icons/md';




const PostSection = () => {
  const [showOption, setShowOption] = useState(false)
  const [post, setPost] = useState("")
  const [audience, setAudience] = useState("Everyone")
  const [openAudienceModal, setOpenAudienceModal] = useState(false)
  const [reply, setReply] = useState("Everyone")
  const [openReplyModal, setOpenReplyModal] = useState(false)
  const audienceSection = useRef()
  const replySection = useRef()

  function handleToggle(value, type){
    if(openAudienceModal && type === 'audience'){

      setAudience(value)
    }else{
      setReply(value)
    }
  }
  
  if(audienceSection.current && replySection.current){
    audienceSection.current.onblur = function(){
      setOpenAudienceModal(false)
    }
  
    replySection.current.onblur = function(){
      setOpenReplyModal(false)
    }
  }
  

  useEffect(()=>{
    
  

    if(openAudienceModal){
     
      setOpenAudienceModal(false)
    
    }else if(openReplyModal){
      setOpenReplyModal(false)
    }

    
  }, [audience, reply])
  
  return (
    <>
    <div className='post__section' style={{borderBottom: `${showOption ? "1px solid var(--light-dark)": ""}`}}>
      {showOption && <div className={`post__section__audience ${audience !== "Everyone" ? "greenTheme" : ""}`} tabIndex='0'
        onClick={()=>{setOpenAudienceModal(true); setOpenReplyModal(false)}}
        ref={audienceSection}
      >
        <span>{audience}</span>
        <span><MdKeyboardArrowDown/></span>
        {openAudienceModal && <PostModal header="Choose audience" items={
          [
            {itemName:"Everyone", itemSub:false, itemIconColor: '#1d9bf0', isChecked: audience === "Everyone"},
            {itemName:"Twitter Circle", itemSub:true, itemIconColor: '#00ba7c', isChecked: audience === "Twitter Circle"}
          ]
        } 
        headerSub={false}
        handleToggle = {handleToggle}
        type="audience"
        />}
      </div>}
      <input type="text" className="post__section__input" placeholder="What's happening?"
        onClick={()=>setShowOption(true)}
        onChange={(e)=>setPost(e.target.value)}
        value={post}
      />
      {showOption && <div className="post__section__reply" tabIndex='0' 
      onClick={()=>{setOpenReplyModal(true); setOpenAudienceModal(false)}}
      ref={replySection}
      >
        <span>{reply === "Everyone" ? <IoEarth/> : reply === "People you follow" ? <PeopleFollow fill="#1d9bf0"/> : <MdOutlineAlternateEmail/>}</span>
        <span>{reply} can reply</span>
        {openReplyModal && <PostModal header="Who can reply?" items={
          [
            {itemName:"Everyone", itemSub:false, itemIconColor: '#1d9bf0', isChecked: reply === "Everyone"},
            {itemName:"People you follow", itemSub:false, itemIconColor: '#1d9bf0', isChecked: reply === "People you follow"},
            {itemName:"Only people you mention", itemSub:false, itemIconColor: '#1d9bf0', isChecked: reply === "Only people you mention"},
          ]
        } 
        headerSub={true}
        handleToggle = {handleToggle}
        type="reply"
        />}
      </div>}
    </div>
    <div className='post__section__tweet'>
        <div className='post__section__tweet__icons'>
          <span tabIndex="0"><AiOutlinePicture/></span>
          <span tabIndex="0"><RiFileGifLine/></span>
          <span tabIndex="0"><BiPoll/></span>
          <span tabIndex="0"><BsEmojiSmile/></span>
          <span tabIndex="0"><Schedule/></span>
          <span tabIndex="0"><HiOutlineLocationMarker/></span>
        </div>
        <button className= {`post__section__tweet__btn ${post ? 'activePost' : ""}`}
        tabIndex= {`${post ? '0' : '-1'}`}
        >
            Tweet
        </button>
    </div>
    </>
    
  )
}

export default PostSection