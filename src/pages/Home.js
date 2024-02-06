import FutureGames from '../components/Schedule/FutureGames.js';
import OngoingGames from '../components/Schedule/OngoingGames.js';
import PastGames from '../components/Schedule/PastGames.js';
import './Home.css'

const Home = () => {
    return (
        <>
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