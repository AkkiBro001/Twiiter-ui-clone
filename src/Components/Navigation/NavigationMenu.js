import React from 'react'

const NavigationMenu = ({icon, text}) => {
  return (
    <li className="navigation-container__menuItem">
        <span className="navigation-container__menuItem__icon">{icon}</span>
        {text && <a href="/" className="navigation-container__link">{text}</a>}
    </li>
  )
}

export default NavigationMenu