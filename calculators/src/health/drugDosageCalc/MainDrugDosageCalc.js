import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';

function MainDrugDosageCalc() {
    const [weight, setWeight] = useState('');
    const [dosePerKg, setDosePerKg] = useState('');
    const [medicationConcentration, setMedicationConcentration] = useState('');
    const [result, setResult] = useState(null);

    const calculateDosage = () => {
        const patientWeight = parseFloat(weight);
        const dosePerKgValue = parseFloat(dosePerKg);
        const concentrationValue = parseFloat(medicationConcentration);

        if (!isNaN(patientWeight) && !isNaN(dosePerKgValue) && !isNaN(concentrationValue)) {
            const calculatedDosage = (patientWeight * dosePerKgValue) / concentrationValue;
            setResult(calculatedDosage.toFixed(2)); // Display result with 2 decimal places
        } else {
            setResult('Invalid input. Please enter valid numbers.');
        }
    };

    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#f0f0f0', minHeight: '90vh', paddingY: "2rem" }}>
            <Typography variant='h4' sx={{ textAlign: "center", marginBottom: "1rem" }}>Drug Dosage Calculator</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Patient's Weight (in kg)"
                        variant="outlined"
                        fullWidth
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Dose per kg (mg/kg)"
                        variant="outlined"
                        fullWidth
                        value={dosePerKg}
                        onChange={(e) => setDosePerKg(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label="Medication Concentration (mg/mL)"
                        variant="outlined"
                        fullWidth
                        value={medicationConcentration}
                        onChange={(e) => setMedicationConcentration(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="primary" fullWidth onClick={calculateDosage}>
                        Calculate Dosage
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Box textAlign="center">
                        <Typography variant='h6' sx={{ marginTop: '1rem' }}>Dosage Result:</Typography>
                        <Typography variant='h5'>{result !== null ? result : 'N/A'}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default MainDrugDosageCalc;