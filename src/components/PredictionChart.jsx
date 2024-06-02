import { LineChart } from '@mui/x-charts/LineChart';
import { Typography } from '@mui/material';

const PredictionChart = ({ rateData }) => {
    const chartStyle = {
        borderRadius: '5px',
        padding: '10px',
    };

    const rates = rateData.map(item => parseFloat(item.rate));
    const dates = rateData.map(item => new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }));


    return (
        <div style={chartStyle}>
            <Typography variant="h6" align="center" style={{ color: '#FFF' }}>Exchange Rate Prediction</Typography>
            <LineChart
                width={500}
                height={500}
                series={[
                    {
                        data: rates, label: 'Rates',
                    }
                ]}
                xAxis={[{ scaleType: 'point', data: dates }]}
            />
        </div>
    );
};

export default PredictionChart;
