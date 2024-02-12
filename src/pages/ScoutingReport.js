import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { getLogo, getTeam } from "../dictionary"
import gameData from '../gameData.json';
import { Stack, Typography, Card, Grid, Button } from '@mui/material';
import TeamRanks from '../components/ScoutingReport/TeamRanks';
import AddReport from '../components/ScoutingReport/AddReport';

const ScoutingReport = () => {
    const { team } = useParams();
    const teamRanks = gameData.teamRanks.find((ranks)=> ranks.team === team);

    const [open, setOpen] = useState(false);
    const [reports, setReports] = useState([]);

    const addReport = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleFormSubmission = (formData) => {
        setReports([...reports, formData]);
        setOpen(false);
    };

    return (
        <>
            <Stack direction="row" justifyContent="center" alignItems='center' spacing={2}>
                {React.createElement(getLogo(team), {className: "logo", size: "10vh"})}
                <Typography variant="h4">
                    <b>{getTeam(team)} Scouting Report</b>
                </Typography>
            </Stack>
            <Card className="card" sx={{ width: "95%" }}>
                <Typography>Team Ranks: </Typography>
                <Grid container width="95%">
                    <Grid item xs={12}>
                        <TeamRanks teamRanks={teamRanks}/>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container justifyContent="flex-end" sx={{marginTop:"1vh"}}>
                            <Button variant="contained" onClick={addReport} sx={{ flexDirection: 'row-reverse' }}>Add Report</Button>
                            <AddReport open={open} onClose={handleClose} onSubmit={handleFormSubmission}/>
                        </Grid>
                        <Grid container spacing={0}>
                            {reports.map((report, index) => (
                                <Grid item key={index} sx={{ padding: "1vw", marginLeft: "1vw", width: "100%" }}>
                                    <Card sx={{
                                            padding: "16px",
                                            border: "1px solid #ccc",
                                            borderRadius: "8px",
                                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                        }}>
                                        {report.playerName ? <Typography variant="h6"><b>Player Report</b></Typography>: <Typography variant="h6"><b>Team Report</b></Typography> }
                                        <Typography>Player Name: {report.playerName}</Typography>
                                        <Typography>Number: {report.playerNumber}</Typography>
                                        <Typography>Report: {report.report}</Typography>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}

export default ScoutingReport;
