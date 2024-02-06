import gameData from '../../gameData.json';
import Scores from './Scores/Scores';

const PastGames = () => {
  const pastGameData = gameData.games.reduce((acc, game) => {
    if (game.timeEst === 'Final') {
        acc[game.nbaGameId] = game;
      }
    return acc;
  }, {});

  return (
    <div>
      <Scores gameData = {pastGameData} home = {true}/>
    </div>
  );
};

export default PastGames;
