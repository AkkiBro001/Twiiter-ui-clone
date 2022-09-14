import "./__Main.css";
import TweetContainer from "./TweetContainer";
import NavHome from "./NavHome";

const Main = () => {
  return (
    <div className="main-container">
        <NavHome/>
        <TweetContainer/>
        <TweetContainer/>
        <TweetContainer/>
        <TweetContainer/>
        <TweetContainer/>
    </div>
  )
}

export default Main