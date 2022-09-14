import { useEffect, useState } from 'react'
import {NavHomeIcon} from '../Icons/Icons'
import NavHomeModal from './NavHomeModal'
const NavHome = () => {

  const [openModal, setModal] = useState(false)

  function handleModal(e){
    if(!openModal) return window.removeEventListener('mouseup', handleModal)
    const closest = e.target.closest('.NavHome__Modal')
    if(!closest) setModal(false);
  }

  useEffect(()=>{
    window.addEventListener('mouseup', handleModal)
    return ()=> {window.removeEventListener('mouseup', handleModal)}
  },[openModal])

  return (
    <div className="NavHome">
        <a href="#" className="NavHome__link">
            <h3>Home</h3>
        </a>


        <span className="NavHome__right" onClick={()=>setModal(true)}>
          {openModal && <NavHomeModal/>}
          <NavHomeIcon/>
        </span>
        
    </div>
  )
}

export default NavHome