import gameData from '../../gameData.json';
import Scores from './Scores/Scores';

const OngoingGames = () => {

    const ongoingGameData = gameData.games.reduce((acc, game) => {
        if (game.gameStatus === 2) {
            acc[game.nbaGameId] = game;
          }
        return acc;
      }, {});

    return (
        <div>
            <Scores gameData = {ongoingGameData} home = {true}/>
        </div>
    )
}

export default OngoingGames