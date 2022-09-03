import {MdMoreHoriz} from 'react-icons/md'
const UserNav = ({icon, userName, userID, clsName}) => {
  return (
    <a href='/' className={`navigation-container__userContainer ${clsName}`}>
        <div className="navigation-container__userContainer__userIcon">{icon}</div>
        <div className="navigation-container__userContainer__userDetails">
            <span className="navigation-container__userContainer__userName">{userName}</span>
            <span className="navigation-container__userContainer__userID">{userID}</span>
        </div>
        <div className="navigation-container__userContainer__more"><MdMoreHoriz/></div>
    </a>
  )
}

export default UserNav