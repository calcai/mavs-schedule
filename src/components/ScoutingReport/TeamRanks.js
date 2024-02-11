import { Table } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const TeamRanks = (props) => {

    const teamRanks = props.teamRanks

    return(
        <TableContainer>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow hover>
                        <TableCell align="center">Metric</TableCell>
                        <TableCell align="center">Value</TableCell>
                        <TableCell align="center">League Rank</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="center">Offensive Rating</TableCell>
                        <TableCell align="center">{teamRanks["OFF RTG"]}</TableCell>
                        <TableCell align="center">{teamRanks["OFF RTG_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">eFG%</TableCell>
                        <TableCell align="center">{teamRanks["EFG%"]}%</TableCell>
                        <TableCell align="center">{teamRanks["EFG%_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Turnovers</TableCell>
                        <TableCell align="center">{teamRanks["TURNOVERS"]}</TableCell>
                        <TableCell align="center">{teamRanks["TURNOVERS_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Offensive Rebound %</TableCell>
                        <TableCell align="center">{teamRanks["OFF REB%"]}%</TableCell>
                        <TableCell align="center">{teamRanks["OFF REB%_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Free Throw Attempts</TableCell>
                        <TableCell align="center">{teamRanks["FTA"]}</TableCell>
                        <TableCell align="center">{teamRanks["FTA_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Defensive Rating</TableCell>
                        <TableCell align="center">{teamRanks["DEF RTG"]}</TableCell>
                        <TableCell align="center">{teamRanks["DEF RTG_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Opponent eFG%</TableCell>
                        <TableCell align="center">{teamRanks["TURNOVERS"]}</TableCell>
                        <TableCell align="center">{teamRanks["TURNOVERS_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Turnovers Forced</TableCell>
                        <TableCell align="center">{teamRanks["TURNOVERS FORCED"]}</TableCell>
                        <TableCell align="center">{teamRanks["TURNOVERS FORCED_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Defensive Rebound %</TableCell>
                        <TableCell align="center">{teamRanks["DEF REB%"]}%</TableCell>
                        <TableCell align="center">{teamRanks["DEF REB_rank"]}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Free Throws Allowed Per Game</TableCell>
                        <TableCell align="center">{teamRanks["FTA ALLOWED"]}</TableCell>
                        <TableCell align="center">{teamRanks["FTA ALLOWED_rank"]}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TeamRanks