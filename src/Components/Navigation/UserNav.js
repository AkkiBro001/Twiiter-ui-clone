import { useEffect, useRef, useState } from 'react';
import {MdMoreHoriz, MdCheck} from 'react-icons/md';

const UserNav = ({userName, userID, clsName}) => {
  
  const [openModal, setModal] = useState(false)
  
  const modelElement = useRef()
  const userProfile = useRef()

  function handleModal(e){
    
    setModal(preVal => !preVal)
  }

  function handleMouse(e){
      if(!openModal) return window.removeEventListener('mouseup', handleMouse)
      if(!e.target.closest('.navigation-container__modal')){
        setModal(false)
      }
  }
  
 useEffect(()=>{
    window.addEventListener('mouseup', handleMouse, {capture: true})
    return ()=>{window.removeEventListener('mouseup', handleMouse)}
 },[openModal])
  

  function UserProfile({clsName, moreIcon}){
return (
      <a href='#' className={`navigation-container__userContainer ${clsName} ${!openModal ? 'navlink--hover' : null} `} ref={userProfile}>
        <div className="navigation-container__userContainer__userIcon"><img src="./profiles/profile.jpg" alt="profile" /></div>
        <div className="navigation-container__userContainer__userDetails">
            <span className="navigation-container__userContainer__userName">{userName}</span>
            <span className="navigation-container__userContainer__userID">{userID}</span>
        </div>
        <div className="navigation-container__userContainer__more">{moreIcon}</div>
    </a>
    )
  }

  return (
    <section className='navigation-container__userMain'>
    {openModal && <div className="navigation-container__modal modal-box-shadow" ref={modelElement}>
      <header>
        <UserProfile clsName='userHeader' moreIcon={<MdCheck style={{color:'var(--primary-clr)'}}/>}/>
      </header>
      <ul className='navigation-container__modal__list'>
          <li className='navigation-container__modal__listItem'>
          <a href = "#" className="navigation-container__modal__listLink">Add an existing account</a>
          </li>
          <li className='navigation-container__modal__listItem'>
          <a href = "#" className="navigation-container__modal__listLink">Log out {userID}</a>
          </li>
      </ul>
    </div>}
      <section className='navigation-container__profile' onClick={handleModal}>
        <UserProfile clsName={clsName} moreIcon={<MdMoreHoriz/>}/>
      </section>
    
    </section>
  )
  
}

export default UserNav