import gameData from '../../gameData.json';
import Scores from './Scores/Scores';


const FutureGames = () => {

    const futureGameData = gameData.games.reduce((acc, game) => {
        if (game.gameStatus === 1) {
            acc[game.nbaGameId] = game;
          }
        return acc;
      }, {});

    return (
        <div>
            <Scores gameData = {futureGameData} home = {true}/>
        </div>
    )
}

export default FutureGames;