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




const PostSection = () => {
  const [showOption, setShowOption] = useState(false)
  const [post, setPost] = useState("")
  const [audience, setAudience] = useState("Everyone")
  const [openAudienceModal, setOpenAudienceModal] = useState(false)
  const audienceSetion = useRef()

  function handleToggle(value){
    setAudience(value)
  }
  

  function handleModal(e){
    
    
    let targetElem = ""
    let mainList = ""
    if(openAudienceModal){
      targetElem = '.post__section__audience'
      mainList = `.${audience.replace(/(\s\s|\s)/g, "")}`
      if(!e.target.closest(targetElem) || e.target.closest(mainList)){
        setOpenAudienceModal(false)
      }
      
    }else{

    }
    //e.target.closest(targetElem)
    
  }

  useEffect(()=>{
    if(!audienceSetion) return
    if(openAudienceModal){
     
      setOpenAudienceModal(false)
    window.addEventListener('mouseup', handleModal)
    return ()=> window.removeEventListener('mouseup', handleModal)
    }
  }, [audience])

  return (
    <>
    <div className='post__section' style={{borderBottom: `${showOption ? "1px solid var(--light-dark)": ""}`}}>
      {showOption && <div className={`post__section__audience ${audience !== "Everyone" ? "greenTheme" : ""}`} tabIndex='0'
        onClick={()=>setOpenAudienceModal(true)}
        ref={audienceSetion}
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
        />}
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