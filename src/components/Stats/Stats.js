import gameData from '../../gameData.json'
import Starters from './Statsheet/Starters';
import Bench from './Statsheet/Bench';
import StartersAverage from './Statsheet/StartersAverage';
import BenchAverage from './Statsheet/BenchAverage';

const Stats = (props) => {

    const totals = props.gameStats

    console.log(totals)

    const home = gameData.games.find((game) => game.nbaGameId === props.gameId).homeTeam;
    const away = gameData.games.find((game) => game.nbaGameId === props.gameId).awayTeam;

    function createData(name, pos, min, fgm, fga, ftm, fta, tpm, tpa, reb, ast, stl, blk, pf, pts, plusMinus, tov, boxScoreOrder, team) {
        return { name, pos,  min, fgm, fga, ftm, fta, tpm, tpa, reb, ast, stl, blk, pf, pts, plusMinus, tov, boxScoreOrder, team };
    }

    const homeStarterRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos !== "" && data.team === home).map(player => createData(
        player.name, player.startPos, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, player.tov, player.boxScoreOrder, home))
        .sort((a, b) => a.boxScoreOrder - b.boxScoreOrder)

    
    const homeBenchRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos === "" && data.team === home).map(player => createData(
        player.name, player.startPos, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, player.tov, null, home))
        .sort((a, b) => a.boxScoreOrder - b.boxScoreOrder)

    const awayStarterRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos !== "" && data.team === away).map(player => createData(
        player.name, player.startPos, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, player.tov, player.boxScoreOrder, away))
        .sort((a, b) => a.boxScoreOrder - b.boxScoreOrder)

    const awayBenchRows = gameData.playerBoxScores.filter((data) => data.nbaGameId === props.gameId && data.startPos === "" && data.team === away).map(player => createData(
        player.name, player.startPos, player.min, player.fgm, player.fga,player.ftm, player.fta, player.tpm, player.tpa, player.reb, 
        player.ast, player.stl, player.blk, player.pf, player.pts, player.plusMinus, player.tov, null, away))
        .sort((a, b) => a.boxScoreOrder - b.boxScoreOrder)

    return(
        totals ? (
            <>
                <StartersAverage playerList = {awayStarterRows}/><br/>
                <StartersAverage playerList = {homeStarterRows}/><br/>
                <BenchAverage playerList = {awayBenchRows}/><br/>
                <BenchAverage playerList = {homeBenchRows}/><br/>
            </>
        ) : (
            <>
                <Starters playerList = {awayStarterRows}/><br/>
                <Starters playerList = {homeStarterRows}/><br/>
                <Bench playerList = {awayBenchRows}/><br/>
                <Bench playerList = {homeBenchRows}/><br/>
            </>
        )
    )
}

export default Stats;