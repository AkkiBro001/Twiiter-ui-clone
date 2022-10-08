import React from 'react'
import PostSection from './PostSection';
import profile from "../../profiles/profile.jpg"

const PostContainer = () => {
  
  return (
    <>
    <div className="tweet-container post" style={{cursor:'default'}}>
        <div className="tweet-container__profile">
            <img src={profile} alt="profile" />
        </div>
        <div className="tweet-container__details">
        <PostSection/>
        </div>
    </div>
    </>
  )
}

export default PostContainer