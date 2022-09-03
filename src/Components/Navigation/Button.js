import { useEffect, useState } from 'react';
import {GiFeather} from 'react-icons/gi';



const Button = () => {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  function resizeWindow(){
    setInnerWidth(window.innerWidth)
  }

  useEffect(()=>{
      window.addEventListener('resize', resizeWindow)

      return ()=>{
        window.removeEventListener('resize', resizeWindow)
      }
  },[innerWidth])

  return (
    <button className='navigation-container__menu__btn'>

    {innerWidth > 1100 ? 'Tweet' : <GiFeather className='featherIcon'/>}
    </button>
  )
}

export default Button