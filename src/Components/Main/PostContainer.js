import React from 'react'
import Liz from '../../img/Ukrain-War.jpg';
import PostSection from './PostSection';

const PostContainer = () => {
  
  return (
    <>
    <div className="tweet-container post" style={{cursor:'default'}}>
        <div className="tweet-container__profile">
            <img src={Liz} alt="profile" />
        </div>
        <div className="tweet-container__details">
        <PostSection/>
        </div>
    </div>
    </>
  )
}

export default PostContainer