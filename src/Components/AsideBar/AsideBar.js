import './__AsideBar.css';

import SearchTwitter from "./SearchTwitter"
import WhoToFollow from './WhoToFollow';
import Footer from './Footer';
import WhatHappning from './WhatHappning';

const AsideBar = () => {
  return (
    <div className="aside-container">
        <SearchTwitter/>
        <WhatHappning/>
        <WhoToFollow/>
        <Footer/>
    </div>
  )
}

export default AsideBar