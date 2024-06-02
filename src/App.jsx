import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import RateChart from './components/RateChart.jsx';

function App() {
    const [ratesData, setRatesData] = useState([]);
    const [predictionsData, setPredictionsData] = useState([]);
    const [loadingRates, setLoadingRates] = useState(true);
    const [loadingPredictions, setLoadingPredictions] = useState(true);

    useEffect(() => {
        fetchRatesData();
        fetchPredictionsData();
    }, []);

    const fetchRatesData = async () => {
        try {
            const response = await axios.get('http://localhost/api/rates');
            setRatesData(response.data.data);
        } catch (error) {
            console.error('Error fetching rates data:', error);
        } finally {
            setLoadingRates(false);
        }
    };

    const fetchPredictionsData = async () => {
        try {
            const response = await axios.get('http://localhost/api/predictions');
            setPredictionsData(response.data.data);
        } catch (error) {
            console.error('Error fetching predictions data:', error);
        } finally {
            setLoadingPredictions(false);
        }
    };

    return (
        <Container style={{ paddingTop: 20 }}>
            <Typography variant="h4" align="center" gutterBottom>Exchange Rate Analysis</Typography>
            {loadingRates || loadingPredictions ? (
                <Typography variant="h6" align="center">Loading...</Typography>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <RateChart rateData={ratesData} />
                    </Grid>
                    <Grid item xs={6}>
                        <RateChart rateData={predictionsData} />
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default App;
