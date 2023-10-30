import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';

function MainFuelCostCalc() {

    const [distance, setDistance] = useState('');
    const [fuelEfficiency, setFuelEfficiency] = useState('');
    const [fuelPrice, setFuelPrice] = useState('');
    const [totalCost, setTotalCost] = useState(null);

    const calculateCost = () => {
        const distanceValue = parseFloat(distance);
        const efficiencyValue = parseFloat(fuelEfficiency);
        const priceValue = parseFloat(fuelPrice);

        if (!isNaN(distanceValue) && !isNaN(efficiencyValue) && !isNaN(priceValue)) {
            const cost = (distanceValue / efficiencyValue) * priceValue;
            setTotalCost(cost.toFixed(2));
        } else {
            setTotalCost(null);
        }
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Fuel Cost Calculator</Typography>
            <hr />
            <br />
            {/* Write your code here */}

            <Card>
                <CardContent>
                    <Typography variant="h5">Fuel Cost Calculator</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Distance (km)"
                                variant="outlined"
                                fullWidth
                                value={distance}
                                onChange={(e) => setDistance(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Fuel Efficiency (km per litre)"
                                variant="outlined"
                                fullWidth
                                value={fuelEfficiency}
                                onChange={(e) => setFuelEfficiency(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Fuel Price (₹ per litre)"
                                variant="outlined"
                                fullWidth
                                value={fuelPrice}
                                onChange={(e) => setFuelPrice(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" onClick={calculateCost}>
                                Calculate
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            {totalCost !== null && (
                                <Typography variant="h6">
                                    Total Fuel Cost: ₹{totalCost}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            {/* End your code here */}
        </Container>
    )
}

export default MainFuelCostCalc;