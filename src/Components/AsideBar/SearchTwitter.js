import { useState, useRef, useEffect } from 'react'
import { CgKey } from 'react-icons/cg'
import {FiSearch} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'
const SearchTwitter = () => {
  const [openModal, setModal] = useState(false)
  const [searchValue, setsearchValue] = useState("")

  function handleModal(e){
    
     if(!openModal) return window.removeEventListener('mouseup', handleModal)
     const closest = e.target.closest('.search-twitter-container__input-container')
     if(!closest){
      setModal(false)
     }
  }

  useEffect(()=>{
    window.addEventListener('mouseup', handleModal)
    return ()=> {window.removeEventListener('mouseup', handleModal)}
  },[openModal])

  return (
    <div className="search-twitter-container">
        <div className="search-twitter-container__input-container">
            <input type="text" className={`search-twitter-container__input-container__input ${openModal ? 'search--focus--modal': ''}`} placeholder='Search Twitter' 
            onFocus={()=>setModal(true)}
            onChange={(e)=>{setsearchValue(e.target.value); setModal(true)}}
            value={searchValue}
            
            />
            <FiSearch className={`search-twitter-container__input-container__serchIcon icon ${openModal ? 'search--focus--modal': ''}`} />
            {
              searchValue && <RiCloseCircleFill className="search-twitter-container__input-container__closeIcon icon" 
              onClick={()=>setsearchValue("")}/>
            }
            {openModal && <div className="search-twitter-container__input-container__modal modal-box-shadow">
                <p style={{color: searchValue ? '#fff':'gray'}}>
                  {searchValue ? <><FiSearch style={{fontSize: '2rem'}}/> <span>{searchValue}</span></> :  'Try searching for people, topics, or keywords'}
                </p>
            </div>}
        </div>
    </div>
  )
}

export default SearchTwitter