import React, { useState } from 'react'
import { AiOutlineCheck } from 'react-icons/ai'
import {BiWorld} from 'react-icons/bi';
import { UserWithHeart } from '../Icons/Icons';
// import {BiUserCheck} from 'react-icons/bi';
import { PeopleFollow } from '../Icons/Icons';
import {MdOutlineAlternateEmail} from 'react-icons/md';

const PostModal = ({ header, items, headerSub, handleToggle, type}) => {

    
    
    return (
        <div className='Post__Modal modal-box-shadow'>

            <header>
                <h3>{header}</h3>
                {
                    headerSub && <p className='subtitle' style={{marginTop: '0.25em'}}>Choose who can reply to this Tweet. Anyone mentioned can always reply.</p>
                }
            </header>
            <ul className='Post__Modal__Section'>
                {
                    items.map((item, i) => {
                        const {itemName, itemSub, itemIconColor, isChecked} = item;
                        return (
                            <li key={i}>
                                <input type="radio" name={`postModal_${type}`} value={itemName} id={itemName} onChange={(e)=>handleToggle(e.target.value, type)}/>
                                <label htmlFor={itemName} className={itemName.replace(/(\s\s|\s)/g, "")}>
                                    <span className='icons' style={{ backgroundColor: itemIconColor }}>{
                                        itemName === "Everyone" ? <BiWorld/> : itemName === "Twitter Circle" ? <UserWithHeart/> : itemName === "People you follow" ? <PeopleFollow/> : <MdOutlineAlternateEmail/>
                                    }</span>
                                    <span><p>{itemName}</p>
                                        {itemSub && <p style={{ marginTop: '0.35em' }}>
                                            <span>0 </span>
                                            <span style={{
                                                color: 'grey',
                                                fontWeight: 'normal'
                                            }}>people </span>
                                            <a href='#'
                                                style={{
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    letterSpacing: '0.5px'
                                                }}
                                            > Edit</a>
                                        </p>}
                                    </span>
                                    {isChecked && <span className='checkIcon'
                                        style={{
                                            color: 'var(--primary-clr)',
                                            fontSize: '1.2rem'
                                        }}
                                    ><AiOutlineCheck /></span>}
                                </label>
                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}

export default PostModal