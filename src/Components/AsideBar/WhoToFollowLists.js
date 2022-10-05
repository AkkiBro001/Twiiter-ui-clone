
import {BsPatchCheckFill} from 'react-icons/bs';






const WhoToFollowLists = (props) => {
    
    const {id, tweetAccountName, tweetAccountUserID, tweetProfileImageURL, isVerified} = props.data;
      
    return (
        
            
            <li className="WhoToFollow-container__followItem" key={id}>
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
     
        
    )
}

export default WhoToFollowLists