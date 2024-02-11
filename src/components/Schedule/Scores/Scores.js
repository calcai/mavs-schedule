import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Scores.css';
import * as NBAIcons from 'react-nba-logos';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getLogo } from '../../../dictionary';

const Scores = (props) => {

    const theme = createTheme({
        spacing: 0
    })

    const navigate = useNavigate()

    const pastGameData = props.gameData;

    const home = props.home;

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
                            {React.createElement(getLogo(game.awayTeam), {className: "logo", size: "10vh", margin: 0})} 
                            <Typography className="team" variant="body1" color="textPrimary">
                                {game.awayTeam}
                            </Typography>
                            <Typography className="scores" variant="h5" color="textSecondary">
                                {game.awayPts} - {game.homePts}
                            </Typography>
                            <Typography className="team" variant="body1" color="textPrimary">
                                {game.homeTeam}
                            </Typography>
                            {React.createElement(getLogo(game.homeTeam), {className: "logo", size: "10vh", margin: 0})}
                        </CardContent>
                        <Typography className = "time">
                            {game.timeEst}
                        </Typography>
                        {home ? (
                            <Button className="button" size="small" onClick={() => clickDetails(game.nbaGameId, game)} sx = {{ marginBottom: 0 }}>
                            Details
                            </Button>
                        ) : (null)}
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
