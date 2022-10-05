import { NavModalIcon } from "../Icons/Icons"
import {TbArrowsLeftRight} from "react-icons/tb";
import {AiOutlineSetting} from "react-icons/ai"
const NavHomeModal = () => {
    
  return (
    <div className="NavHome__Modal modal-box-shadow">
        <header>
            <div className="NavHome__Modal__icon">
            <NavModalIcon/>
            </div>
            <h3 className="NavHome__Modal__title">
            Latest Tweets show up as they<br/>happen
            </h3>
        </header>
        <ul className="NavHome__Modal__menu">
            <li className="NavHome__Modal__item">
                <a href="#" className="NavHome__Modal__link">
                    <TbArrowsLeftRight className="NavHome__Modal__link__icon"/>
                    <div className="NavHome__Modal__link__details">
                        <p className="title">Go back Home</p>
                        <p className="subtitle">You'll see Tweets show up as they happen.</p>
                    </div>
                </a>
            </li>
            <li className="NavHome__Modal__item">
                <a href="#" className="NavHome__Modal__link">
                    <AiOutlineSetting className="NavHome__Modal__link__icon"/>
                    <div className="NavHome__Modal__link__details">
                        <p className="title">View content preferences</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavHomeModal