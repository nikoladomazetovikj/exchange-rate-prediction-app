import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const PredictionTable = ({ rateData }) => {
    return (
        <TableContainer component={Paper} style={{ marginTop: 20 }}>
            <Typography variant="h6" align="center" gutterBottom>
                Prediction Data Table
            </Typography>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Date</TableCell>
                        <TableCell align="center">Rate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rateData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{row.date}</TableCell>
                            <TableCell align="center">{row.rate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PredictionTable;
