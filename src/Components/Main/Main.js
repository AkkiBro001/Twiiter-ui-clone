import "./__Main.css";
import TweetContainer from "./TweetContainer";
import NavHome from "./NavHome";
import PostContainer from "./PostContainer";

const Main = () => {
  
  return (
    <div className="main-container">
        <NavHome/>
        <PostContainer/>
        <TweetContainer/>
        
    </div>
  )
}

export default Main