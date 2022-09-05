import React from 'react'
import WhatHappningLists from './WhatHappningLists'
import Liz from '../../img/Liz-Truss.webp';
import Cyrus from '../../img/Cyrus-Mistry.webp';
import War from '../../img/Ukrain-War.jpg';

const WhatHappning = () => {
  return (
    <div className="WhatHappning-container">
        <header>
            <h3>What's happening</h3>
        </header>
        <ul className="WhatHappning-container__topList">
            <WhatHappningLists img={Cyrus} 
            title="Businessman Cyrus Mistry dies in a car accident near Mumbai"
            subtitle="India national news · Yesterday"
            link={["#CyrusMistryDeath"]}
            />

            <WhatHappningLists img={Liz} 
            title="Liz Truss wins Conservative Party leadership election and will be the next UK prime minister"
            subtitle="2022 Conservative Party leadership election . LIVE"
            link={["#RishiSunak", "#PrimeMinister"]}
            />

            <WhatHappningLists img={War} 
            title="Latest updates on the war in Ukraine"
            subtitle="War in Ukraine · LIVE"
            
            />
            
            
            <li><a href="#" className="WhatHappning-container__topItemLink" style={{color:'var(--primary-clr)'}}>Show More</a></li>
        </ul>
    </div>
  )
}

export default WhatHappning