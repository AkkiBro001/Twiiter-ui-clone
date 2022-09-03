const UserNav = ({icon, userName, userID}) => {
  return (
    <div className="navigation-container__userContainer">
        <div className="navigation-container__userContainer__user">{icon}</div>
        <div className="navigation-container__userContainer__userDetails">
            <span className="navigation-container__userContainer__userName">{userName}</span>
            <span className="navigation-container__userContainer__userID">{userID}</span>
        </div>
    </div>
  )
}

export default UserNav