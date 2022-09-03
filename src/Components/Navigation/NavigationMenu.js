import React from 'react'

const NavigationMenu = ({icon, text, clsName}) => {
  return (
    <li className={`navigation-container__menuItem nav-${clsName}`}>
    <a href="/" className={`navigation-container__menuItem__link ${clsName}`}>
        <span className="navigation-container__menuItem__icon">{icon}</span>
        {text && <span className='navigation-container__menuItem__text'>{text}</span>}
     </a>   
    </li>
  )
}

export default NavigationMenu