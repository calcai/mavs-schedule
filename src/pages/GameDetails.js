import React from 'react';
import { useParams } from 'react-router-dom'
import gameData from '../gameData.json'
import { Card, CardContent, Typography } from '@mui/material';
import * as NBAIcons from 'react-nba-logos';
import './GameDetails.css'
import Stats from '../components/Stats/Stats';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const GameDetails = () => {

  const [format, setFormat] = useState(false);

  let { gameId } = useParams();

  const game = gameData.games.find((game) => game.nbaGameId === gameId);

  const handleSwitch = () => {
    setFormat(!format)
    console.log(format)
  }

  return (
    <div className = "game-details">
        {game ? (
        <>
          <Card className="card" sx = {{width: "90%"}}>
            <CardContent className="card-content" sx = {{ paddingLeft: 2, paddingRight: 2, paddingBottom:0 }}>
                {React.createElement(getLogo(game.homeTeam), {className: "logo", size: "10vh"})} 
                <Typography className="team" variant="body1" color="textPrimary">
                    {game.awayTeam}
                </Typography>
                <Typography className="scores" variant="h5" color="textSecondary">
                    {game.awayPts} - {game.homePts}
                </Typography>
                <Typography className="team" variant="body1" color="textPrimary">
                    {game.homeTeam}
                </Typography>
                {React.createElement(getLogo(game.awayTeam), {className: "logo", size: "10vh"})}
            </CardContent>
            <Typography className = "time">
                {game.timeEst}
            </Typography>
            <Stack direction="row" spacing={0.2} alignItems="center" justifyContent="flex-end" sx={{ ml: 'auto', paddingRight: "4%" }}>
                <Typography variant="body2">Game Stats</Typography>
                <Switch onChange = {handleSwitch}/>
                <Typography variant="body2">Per 36</Typography>
            </Stack>
            <Stats gameId = {gameId}/>
        </Card>
        </>
      ) : (
        <p>Game not found</p>
      )}
    </div>
  );
};


const getLogo = (team) => {
    const dictionary = {
        "ATL": NBAIcons.ATL,
        "BKN": NBAIcons.BKN,
        "BOS": NBAIcons.BOS,
        "CHA": NBAIcons.CHA,
        "CHI": NBAIcons.BKN,
        "CLE": NBAIcons.CLE,
        "DAL": NBAIcons.DAL,
        "DEN": NBAIcons.DEN,
        "DET": NBAIcons.DET,
        "GSW": NBAIcons.GSW,
        "HOU": NBAIcons.HOU,
        "IND": NBAIcons.IND,
        "LAC": NBAIcons.LAC,
        "LAL": NBAIcons.LAL,
        "MEM": NBAIcons.MEM,
        "MIA": NBAIcons.MIA,
        "MIL": NBAIcons.MIL,
        "MIN": NBAIcons.MIN,
        "NOP": NBAIcons.NOP,
        "NYK": NBAIcons.NYK,
        "OKC": NBAIcons.OKC,
        "ORL": NBAIcons.ORL,
        "PHI": NBAIcons.PHI,
        "PHX": NBAIcons.PHX,
        "POR": NBAIcons.POR,
        "SAC": NBAIcons.SAC,
        "SAS": NBAIcons.SAS,
        "TOR": NBAIcons.TOR,
        "UTA": NBAIcons.UTA,
        "WAS": NBAIcons.WAS,
    };

    return dictionary[team]
}

export default GameDetails;
