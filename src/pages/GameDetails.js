import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import gameData from '../gameData.json';
import { Card, CardContent, Typography, Button } from '@mui/material';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import IconButton from '@mui/material/IconButton';
import './GameDetails.css';
import Stats from '../components/Stats/Stats';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

const GameDetails = () => {
  
  const navigate = useNavigate();
  const [averages, setAverages] = useState(false);
  const { gameId } = useParams();
  const game = gameData.games.find((game) => game.nbaGameId === gameId);
  const team = game && game.homeTeam === "DAL" ? game.awayTeam : game && game.homeTeam;

  const handleSwitch = () => {
    setAverages(!averages);
  }

  const handleScoutingClick = (team) => {
    navigate(`/scoutingreport/${team}`);
  }

  return (
    <div className="game-details">
      {game && game.gameStatus > 1 ? (
        <>
          <Card className="card" sx={{ width: "95%" }}>
            <CardContent className="card-content" sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 0, paddingTop:0 }}>
              <img src={getTeamLogo(game.awayTeam)} alt={`${game.awayTeam} Logo`} className="logo" />
              <Typography className="team" variant="body1" color="textPrimary">
                {game.awayTeam}
              </Typography>
              <Typography className="scores" variant="h5" color="textSecondary">
                {game.awayPts} - {game.homePts}
              </Typography>
              <Typography className="team" variant="body1" color="textPrimary">
                {game.homeTeam}
              </Typography>
              <img src={getTeamLogo(game.homeTeam)} alt={`${game.homeTeam} Logo`} className="logo" />
            </CardContent>
            <Typography className="time">
              {game.timeEst}
            </Typography>
            <Stack direction="row" alignItems="flex-end" display="flex" justifyContent="space-between" sx={{ width: "95%", mb: 0.5 }}>
              <Stack direction="row" alignItems="center">
                <Typography variant="body2">Totals</Typography>
                <Switch onChange={handleSwitch} />
                <Typography variant="body2">Averages</Typography>
              </Stack>
              <Button variant="contained" alignItems="flex-end" onClick={() => handleScoutingClick(team)}>Scouting Report</Button>
            </Stack>
            <Stats gameId={gameId} gameStats={averages} />
          </Card>
        </>
      ) : (
        game ? (
          <>
            <Card className="card" sx={{ width: "95%" }}>
            <IconButton aria-label="back">
                <ArrowBackRoundedIcon />
            </IconButton>
              <CardContent className="card-content" sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 0 }}>
                <img src={getTeamLogo(game.awayTeam)} alt={`${game.awayTeam} Logo`} className="logo" />
                <Typography className="team" variant="body1" color="textPrimary">
                  {game.awayTeam}
                </Typography>
                <Typography className="scores" variant="h5" color="textSecondary">
                  {game.awayPts} - {game.homePts}
                </Typography>
                <Typography className="team" variant="body1" color="textPrimary">
                  {game.homeTeam}
                </Typography>
                <img src={getTeamLogo(game.homeTeam)} alt={`${game.homeTeam} Logo`} className="logo" />
              </CardContent>
              <Typography className="time">
                {game.timeEst}
              </Typography>
            </Card>
            <Button variant="contained" alignItems="flex-end" onClick={() => handleScoutingClick(team)}>Scouting Report</Button>
            <p>Lineups not set</p>
          </>
        ) : (
          <p>No game available</p>
        )
      )}
    </div>
  );
};

export default GameDetails;

const getTeamLogo = (teamAbbreviation) => {
  const team = gameData.teamData.find(team => team.team === teamAbbreviation);
  return team ? team.logo : ''; 
};
