import React from 'react';
import FutureGames from '../components/Schedule/FutureGames.js';
import OngoingGames from '../components/Schedule/OngoingGames.js';
import PastGames from '../components/Schedule/PastGames.js';
import './Home.css'
import gameData from "../gameData.json";

const Home = () => {
    const mavsLogo = gameData.teamData.find(team => team.team === "DAL")?.logo;
    
    return (
        <>
          <div className='header'>
          <img src={mavsLogo} alt="Dallas Mavericks Logo" />
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
