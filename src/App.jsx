import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import RateChart from './components/RateChart.jsx';

function App() {
    const [ratesData, setRatesData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost/api/rates');
            setRatesData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Container style={{ paddingTop: 20 }}>
            <Typography variant="h4" align="center" gutterBottom>Exchange Rate Analysis</Typography>
            {loading ? (
                <Typography variant="h6" align="center">Loading...</Typography>
            ) : (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <RateChart rateData={ratesData}/>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
}

export default App;
