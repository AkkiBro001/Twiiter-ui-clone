
const WhatHappningLists = (props) => {

    const {tweetAccountUserID, tweetCreated, tweetDetails, tweetImageURL} = props.data;

    return (
        <li className="WhatHappning-container__topItem">
            <a href="#" className="WhatHappning-container__topItemLink">
                <div className="WhatHappning-container__details">
                <p className="WhatHappning-container__subtitle grayText">{tweetAccountUserID} . {tweetCreated}</p>
                <p className="WhatHappning-container__title">{
                    tweetDetails.slice(0,60)
                    }{tweetDetails.length > 60 ? '...' : ""}</p>
                
                </div>
                {
                    tweetImageURL && <div className="WhatHappning-container__thumb">
                    <img src={tweetImageURL} alt="img"/>
                </div>
                }
            </a>
        </li>
    )
}

export default WhatHappningLists