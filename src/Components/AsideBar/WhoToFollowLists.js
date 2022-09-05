import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs';

const WhoToFollowLists = () => {
    return (
        <li className="WhoToFollow-container__followItem">
            <a href="#" className="WhoToFollow-container__followLink">
                <div className="WhoToFollow-container__profile">
                    <img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="img" />
                </div>
                <div className="WhoToFollow-container__profileDetails">
                    <span className="WhoToFollow-container__profileName">TypeScript <span className="verified">{<BsPatchCheckFill/>}</span></span>
                    <p className="WhoToFollow-container__profileUserID">@typescript</p>
                </div>
                <button className="WhoToFollow-container__followBtn">Follow</button>
            </a>
        </li>
    )
}

export default WhoToFollowLists