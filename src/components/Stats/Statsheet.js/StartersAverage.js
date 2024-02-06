import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

const StartersAverage = (props) => {

    const rows = props.playerList

    const trueShooting = (pts, fga, fta) => {
        return (fga > 0 || fta > 0) ? (Math.round(1000 * (pts) / (2 * (fga + (0.44*fta))))/10) + "%" : "0%"
    }
    
    const per36 = (stat, min) => {
        return min !== 0 ? (Math.round(10*((stat/min) * 36))/10) : (0)
    }

    const eFG = (fgm, tpm, fga) => {
        return(fga > 0) ? (Math.round(1000 * (fgm + 0.5 * tpm) / (fga))/10) + "%" : "0%"
    }

    return(
        <TableContainer component={Paper} sx = {{width: "95%", border: 1}}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow hover>
                <TableCell sx = {{
                        position: "sticky",
                        width: 180,
                        left: 0,
                        background: "white",
                        zIndex: "9999 !important"}}><Typography><b>{rows[0].team} Starters</b></Typography></TableCell>
                    <TableCell align="right">Pos</TableCell>
                    <TableCell align="right">FG%</TableCell>
                    <TableCell align="right">3P%</TableCell>
                    <TableCell align="right">FT%</TableCell>
                    <TableCell align="right">TS%</TableCell>
                    <TableCell align="right">eFG%</TableCell>
                    <TableCell align="right">P/36</TableCell>
                    <TableCell align="right">R/36</TableCell>
                    <TableCell align="right">A/36</TableCell>
                    <TableCell align="right"
                        sx = {{
                            position: "sticky",
                            right: 0,
                            background: "white",
                            boxShadow: "5px 2px 5px grey",
                            zIndex: "9999 !important"
                        }}
                    >PTS</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    hover
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row" sx = {{
                        position: "sticky",
                        background: "white",
                        width: 180,
                        left: 0,
                        zIndex: "9999 !important"}}>
                            {row.name}
                    </TableCell>
                    <TableCell align="right">{row.pos}</TableCell>
                    <TableCell align="right">{row.fga > 0 ? (Math.round(1000 * row.fgm / row.fga)/10 + "%") : "0%"}</TableCell>
                    <TableCell align="right">{row.tpa > 0 ? (Math.round(1000 * row.tpm / row.tpa)/10 + "%") : "0%"}</TableCell>
                    <TableCell align="right">{row.fta > 0 ? (Math.round(1000 * row.ftm / row.fta)/10 + "%") : "0%"}</TableCell>
                    <TableCell align="right">{trueShooting(row.pts, row.fga, row.fta)}</TableCell>
                    <TableCell align="right">{eFG(row.fgm, row.tpm, row.fga)}</TableCell>
                    <TableCell align="right">{per36(row.pts, row.min)}</TableCell>
                    <TableCell align="right">{per36(row.reb, row.min)}</TableCell>
                    <TableCell align="right">{per36(row.ast, row.min)}</TableCell>
                    <TableCell align="right"
                        sx = {{
                            position: "sticky",
                            right: 0,
                            background: "white",
                            boxShadow: "5px 2px 5px grey",
                            zIndex: "9999 !important"
                        }}
                        >
                            <b>{row.pts}</b>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default StartersAverage