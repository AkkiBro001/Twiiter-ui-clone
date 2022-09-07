import React from 'react'
import NavigationMenu from './NavigationMenu'
import Button from './Button';
import './__Navigation.css';

import {AiOutlineTwitter, AiOutlineMail} from 'react-icons/ai';
import {BiHash} from 'react-icons/bi'
import {IoNotificationsOutline} from 'react-icons/io5'
import {RiFileList2Line, RiHome7Fill} from 'react-icons/ri'
import {BsBookmarks} from 'react-icons/bs'
import {HiOutlineUser, HiUser} from 'react-icons/hi'
import {CgMoreO} from 'react-icons/cg'
import UserNav from './UserNav';

const Navigation = () => {
  return (
    <div className='navigation-container'>
        <ul className="navigation-container__menu">
            <NavigationMenu icon={<AiOutlineTwitter/>} text={""} clsName={"logo"}/>
            <NavigationMenu icon={<RiHome7Fill/>} text={"Home"} clsName={"Home"}/>
            <NavigationMenu icon={<BiHash/>} text={"Explore"} clsName={"Explore"}/>
            <NavigationMenu icon={<IoNotificationsOutline/>} text={"Notifications"} clsName={"Notifications"}/>
            <NavigationMenu icon={<AiOutlineMail/>} text={"Messages"} clsName={"Messages"}/>
            <NavigationMenu icon={<BsBookmarks/>} text={"Bookmarks"} clsName={"Bookmarks"}/>
            <NavigationMenu icon={<RiFileList2Line/>} text={"Lists"} clsName={"Lists"}/>
            <NavigationMenu icon={<HiOutlineUser/>} text={"Profile"} clsName={"Profile"}/>
            <NavigationMenu icon={<CgMoreO/>} text={"More"} clsName={"More"}/>
            <Button/>
            <UserNav icon={<HiUser/>} userName={'Akshay Tambe'} userID={'@AkshayTambe007T'} clsName="userProfile"/>
        </ul>
    </div>
  )
}

export default Navigation
