import gameData from '../../gameData.json'
import Starters from './Statsheet.js/Starters';
import Bench from './Statsheet.js/Bench';

const Stats = (props) => {

    const home = gameData.games.find((game) => game.nbaGameId === props.gameId).homeTeam;
    const away = gameData.games.find((game) => game.nbaGameId === props.gameId).awayTeam;

    function createData(name, min, fgm, fga, ftm, fta, tpm, tpa, reb, ast, stl, blk, pf, pts, plusMinus, boxScoreOrder, team) {
        return { name, min, fgm, fga, ftm, fta, tpm, tpa, reb, ast, stl, blk, pf, pts, plusMinus, boxScoreOrder, team };
    }

    const homeStarterRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos !== "" && data.team === home).map(player => createData(
        player.name, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, player.boxScoreOrder, home))
    
    const homeBenchRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos === "" && data.team === home).map(player => createData(
        player.name, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, null, home))

    const awayStarterRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos !== "" && data.team === away).map(player => createData(
        player.name, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, player.boxScoreOrder, away))

    const awayBenchRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos === "" && data.team === away).map(player => createData(
        player.name, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, null, away))

    return(
    <>
        <Starters playerList = {awayStarterRows}/><br/>
        <Starters playerList = {homeStarterRows}/><br/>
        <Bench playerList = {awayBenchRows}/><br/>
        <Bench playerList = {homeBenchRows}/><br/>
    </>
    )
}

export default Stats;