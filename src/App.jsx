import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RateChart from './components/RateChart.jsx';
import PredictionChart from './components/PredictionChart.jsx';
import PredictionTable from "./components/PredictionTable.jsx";

const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        h4: {
            fontWeight: 700,
        },
        body1: {
            fontSize: '1.2rem',
        },
    },

});

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
        <ThemeProvider theme={theme}>
            <Container style={{ paddingTop: 20 }}>
                <Typography variant="h4" align="center" >Exchange Rate Predictions</Typography>
                <Typography variant="body1" align="center" paragraph>
                    This page displays the predicted exchange rates between USD and MKD on a weekly basis.
                    The predictions are made using a Multilayer Perceptron (MLP) regression model.
                    An MLP is a class of feedforward artificial neural network (ANN). It consists of at least three layers of nodes:
                    an input layer, a hidden layer, and an output layer. Each node, or artificial neuron, in the hidden layer uses a
                    nonlinear activation function. MLP utilizes a supervised learning technique called backpropagation for training.
                    The data is sourced from the National Bank of Macedonia and is updated weekly to provide the latest insights
                    into the currency exchange trends. This ensures that the predictions are based on the most recent and relevant data available.
                </Typography>
                {loadingRates || loadingPredictions ? (
                    <Typography variant="h6" align="center">Loading...</Typography>
                ) : (
                    <Grid container spacing={3} >
                        <Grid item xs={12} md={6}>
                            <RateChart rateData={ratesData} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <PredictionChart rateData={predictionsData} />
                        </Grid>
                        <Grid item xs={12}>
                            <PredictionTable rateData={predictionsData} />
                        </Grid>
                    </Grid>
                )}
            </Container>
        </ThemeProvider>
    );
}

export default App;
