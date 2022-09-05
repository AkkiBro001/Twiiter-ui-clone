import React, { useId } from 'react'


const WhatHappningLists = ({subtitle, title, img, link}) => {

    const id = useId()

    return (
        <li className="WhatHappning-container__topItem">
            <a href="#" className="WhatHappning-container__topItemLink">
                <div className="WhatHappning-container__details">
                <p className="WhatHappning-container__subtitle grayText">{subtitle}</p>
                <p className="WhatHappning-container__title">{title}</p>
                <p className="WhatHappning-container__tranding">
                
                   
                {link && <span className='grayText'>Trending with </span>}
                {link && link.map((link, i) => <span className="trandingLink" key={id+i}>{link}</span>)}
                
                </p>
                </div>
                <div className="WhatHappning-container__thumb">
                    <img src={img} alt="img"/>
                </div>
            </a>
        </li>
    )
}

export default WhatHappningLists