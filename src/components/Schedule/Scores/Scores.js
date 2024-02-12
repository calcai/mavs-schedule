import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Scores.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import gameData from "../../../gameData.json";

const Scores = (props) => {

    const theme = createTheme({
        spacing: 0
    })

    const navigate = useNavigate()

    const pastGameData = props.gameData;
    
    // eslint-disable-next-line no-unused-vars
    const [selectedGameId, setSelectedGameId] = useState(null);

    useEffect(() => {
      setSelectedGameId(null);
    }, [pastGameData]);


    const clickDetails = (gameID) => {
        setSelectedGameId(gameID)
        navigate(`/game/${gameID}`)
    }

    return (
        <div className="scoreboard">
            <ThemeProvider theme = {theme}>
            {Object.keys(pastGameData).length > 0 ? (
                Object.values(pastGameData).map((game, index) => (
                    <Card className="card" key={index}>
                        <CardContent className="card-content">
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
                        <Button className="button" size="small" onClick={() => clickDetails(game.nbaGameId, game)} sx={{ marginBottom: 0 }}>
                            Details
                        </Button>
                    </Card>
                ))
            ) : (
                <p>No Past Games available</p>
            )}
            </ThemeProvider>
        </div>
    );
};

export default Scores;

const getTeamLogo = (teamAbbreviation) => {
    const team = gameData.teamData.find(team => team.team === teamAbbreviation);
    return team ? team.logo : '';
};
