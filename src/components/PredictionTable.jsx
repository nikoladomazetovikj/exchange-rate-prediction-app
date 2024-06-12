import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const PredictionTable = ({ rateData }) => {
    const getDayName = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'long' });
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Day</TableCell>
                        <TableCell align="center">Rate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rateData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{getDayName(row.date)}</TableCell>
                            <TableCell align="center">{row.rate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PredictionTable;

