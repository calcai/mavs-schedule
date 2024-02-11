import React from 'react';
import { useParams } from "react-router-dom";
import { getLogo, getTeam } from "../dictionary"
import gameData from '../gameData.json';
import { Stack, Typography, Card, Grid } from '@mui/material';
import TeamRanks from '../components/ScoutingReport/TeamRanks';

const ScoutingReport = () => {

    const { team } = useParams();

    const teamRanks = gameData.teamRanks.find((ranks)=> ranks.team === team);
    console.log(teamRanks)

    return (
        <>
            <Stack direction="row" justifyContent="center" alignItems='center' spacing={2}>
                {React.createElement(getLogo(team), {className: "logo", size: "10vh"})}
                <Typography variant = "h4">
                    <b>{getTeam(team)} Scouting Report</b>
                </Typography>
            </Stack>
            <Card className="card" sx = {{width: "95%"}}>
                <Typography>Team Ranks: </Typography>
                <Grid container width="90%">
                    <TeamRanks teamRanks={teamRanks}/>
            </Grid>
            </Card>
        </>
    )
}

export default ScoutingReport;