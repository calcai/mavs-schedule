import React from 'react';
import FutureGames from '../components/Schedule/FutureGames.js';
import OngoingGames from '../components/Schedule/OngoingGames.js';
import PastGames from '../components/Schedule/PastGames.js';
import './Home.css'
import { getLogo } from '../dictionary.js';

const Home = () => {
    return (
        <>
          <div className='header'>
            {React.createElement(getLogo("DAL"), {className: "logo", size: "10vh"})} 
            <h2>Dallas Mavericks Schedule</h2>
          </div>
          <h3>
              Past Games
          </h3>
          <PastGames/>
          <h3>
              Ongoing Games
          </h3>
          <OngoingGames/>
          <h3>
              Future Games
          </h3>
          <FutureGames/>
    </>
    )
}

export default Home;