import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';

const RateChart = ({ xAxis, series }) => {
    const chartStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Set chart background color
        borderRadius: '5px', // Add border radius for aesthetics
        padding: '10px', // Add padding for spacing
    };

    // Convert date strings to Date objects
    const parsedXAxis = xAxis.map(item => ({
        data: item.data.map(dateString => new Date(dateString))
    }));

    return (
        <div style={chartStyle}>
            <Typography variant="h6" align="center" style={{ color: '#FFF' }}>Exchange Rate</Typography>
            <LineChart
                xAxis={parsedXAxis}
                series={series}
                width={500}
                height={300}
            />
        </div>
    );
};

export default RateChart;
