import WhoToFollowLists from "./WhoToFollowLists"


const WhoToFollow = () => {
  return (
    <div className="WhoToFollow-container">
        <header>
            <h3>Who to follow</h3>
        </header>
        <ul className="WhoToFollow-container__followList">
            <WhoToFollowLists/>
            <WhoToFollowLists/>
            <WhoToFollowLists/>
            <WhoToFollowLists/>
            <li><a href="#" className="WhoToFollow-container__followLink" style={{color:'var(--primary-clr)'}}>Show More</a></li>
        </ul>
    </div>
  )
}

export default WhoToFollow