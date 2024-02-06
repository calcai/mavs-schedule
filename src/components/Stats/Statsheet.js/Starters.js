import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';


const Starters = (props) => {

    const rows = props.playerList
    
    return(
        <TableContainer component={Paper} sx = {{ width: "95%"}}>
            <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow hover>
                <TableCell sx = {{
                        position: "sticky",
                        width: 180,
                        background: "white",
                        left: 0,
                        zIndex: "9999 !important"}}><Typography><b>{rows[0].team} Starters</b></Typography></TableCell>
                    <TableCell align="right">Min</TableCell>
                    <TableCell align="right">FGM</TableCell>
                    <TableCell align="right">FGA</TableCell>
                    <TableCell align="right">FTM</TableCell>
                    <TableCell align="right">FTA</TableCell>
                    <TableCell align="right">3PM</TableCell>
                    <TableCell align="right">3PA</TableCell>
                    <TableCell align="right">REB</TableCell>
                    <TableCell align="right">AST</TableCell>
                    <TableCell align="right">STL</TableCell>
                    <TableCell align="right">BLK</TableCell>
                    <TableCell align="right">PF</TableCell>
                    <TableCell align="right">+/-</TableCell>
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
                        width: 180,
                        background: "white",
                        left: 0,
                        zIndex: "9999 !important"}}>
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.min}</TableCell>
                    <TableCell align="right">{row.fgm}</TableCell>
                    <TableCell align="right">{row.fga}</TableCell>
                    <TableCell align="right">{row.ftm}</TableCell>
                    <TableCell align="right">{row.fta}</TableCell>
                    <TableCell align="right">{row.tpm}</TableCell>
                    <TableCell align="right">{row.tpa}</TableCell>
                    <TableCell align="right">{row.reb}</TableCell>
                    <TableCell align="right">{row.ast}</TableCell>
                    <TableCell align="right">{row.stl}</TableCell>
                    <TableCell align="right">{row.blk}</TableCell>
                    <TableCell align="right">{row.pf}</TableCell>
                    <TableCell align="right">{row.plusMinus}</TableCell>
                    <TableCell align="right"
                        sx = {{
                            position: "sticky",
                            right: 0,
                            background: "white",
                            boxShadow: "5px 2px 5px grey",
                            zIndex: "9999 !important"
                        }}
                        >
                            {row.pts}
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Starters;