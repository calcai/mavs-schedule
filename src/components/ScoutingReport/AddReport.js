import { useEffect, useState } from "react";
import { Modal, Typography, Box, TextField, Button, Grid, Stack } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddReport = (props) => {
    const [playerName, setPlayerName] = useState("");
    const [playerNumber, setPlayerNumber] = useState("");
    const [report, setreport] = useState("");
    const [reportError, setreportError] = useState(false);

    useEffect(() => {
        if (props.open) {
            setPlayerName("");
            setPlayerNumber("");
            setreport("");
            setreportError(false);
        }
    }, [props.open]);

    const handleClose = () => {
        props.onClose();
    };

    const handleCancel = () => {
        handleClose();
    };

    const handleSubmit = () => {
        if (report.trim() !== "") {

            const formData = {
                playerName: playerName,
                playerNumber: playerNumber,
                report: report
            };

            props.onSubmit(formData);

            handleClose();
        } else {
            setreportError(true);
        }
    };

    return (
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add Report
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <TextField
                            label="Player Name (Optional)"
                            fullWidth
                            value={playerName}
                            onChange={(e) => setPlayerName(e.target.value)}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <TextField
                            label="Number"
                            fullWidth
                            value={playerNumber}
                            onChange={(e) => setPlayerNumber(e.target.value)}
                            margin="normal"
                        />
                    </Grid>
                </Grid>
                <TextField
                    label="Report Text"
                    fullWidth
                    multiline
                    rows={4}
                    value={report}
                    onChange={(e) => setreport(e.target.value)}
                    margin="normal"
                    required
                    error={reportError}
                    helperText={reportError ? "Report text cannot be empty" : ""}
                />
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                </Stack>
            </Box>
        </Modal>
    );
};

export default AddReport;
