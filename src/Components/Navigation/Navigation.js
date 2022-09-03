import React from 'react'
import NavigationMenu from './NavigationMenu'
import Button from '../Button/Button';

import {AiOutlineTwitter, AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiHash} from 'react-icons/bi'
import {MdNotifications} from 'react-icons/md'
import {RiFileList2Line} from 'react-icons/ri'
import {BsBookmarks} from 'react-icons/bs'
import {HiOutlineUser, HiUser} from 'react-icons/hi'
import {CgMoreO} from 'react-icons/cg'
import UserNav from './UserNav';

const Navigation = () => {
  return (
    <div className='navigation-container'>
        <ul className="navigation-container__menu">
            <NavigationMenu icon={<AiOutlineTwitter/>} text={""}/>
            <NavigationMenu icon={<AiOutlineHome/>} text={"Home"}/>
            <NavigationMenu icon={<BiHash/>} text={"Explore"}/>
            <NavigationMenu icon={<MdNotifications/>} text={"Notifications"}/>
            <NavigationMenu icon={<AiOutlineMail/>} text={"Messages"}/>
            <NavigationMenu icon={<BsBookmarks/>} text={"Bookmarks"}/>
            <NavigationMenu icon={<RiFileList2Line/>} text={"Lists"}/>
            <NavigationMenu icon={<HiOutlineUser/>} text={"Profile"}/>
            <NavigationMenu icon={<CgMoreO/>} text={"More"}/>
            <Button/>
            <UserNav icon={<HiUser/>} userName={'Akshay Tambe'} userID={'@AkshayTambe007T'}/>
        </ul>
    </div>
  )
}

export default Navigation
