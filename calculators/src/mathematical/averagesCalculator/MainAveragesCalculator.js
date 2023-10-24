import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from '@mui/material';

function MainAveragesCalculator() {
  const [values, setValues] = useState('');
  const [results, setResults] = useState({
    arithmeticMean: 0,
    geometricMean: 0,
    harmonicMean: 0,
  });

  // Handle input change
  const handleChange = (event) => {
    setValues(event.target.value);
  };

  // Calculate averages when the button is clicked
  const calculateAverages = () => {
    if (!values) {
        setResults({
            arithmeticMean: 0,
            geometricMean: 0,
            harmonicMean: 0,
          });
        return
    }; // Check if there's any input

    const numbers = values.split(',').map((num) => parseFloat(num.trim()));

    // Calculate arithmetic mean
    const arithmeticMean = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    
    // Calculate geometric mean
    let geometricMean = 1;
    for (const num of numbers) {
      geometricMean *= num;
    }
    geometricMean = Math.pow(geometricMean, 1 / numbers.length);
    
    // Calculate harmonic mean
    const harmonicMean = numbers.length / numbers.reduce((sum, num) => sum + (1 / num), 0);

    setResults({
      arithmeticMean,
      geometricMean,
      harmonicMean,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h4" sx={{ textAlign: 'center' }}>
        Averages Calculator
      </Typography>
      <hr />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="values-input"
            label="Enter comma-separated values:"
            value={values}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={calculateAverages}>
            Calculate Averages
          </Button>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ textAlign: 'center' }}>
            Results
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1">Arithmetic Mean:</Typography>
          <Typography variant="h5">{results.arithmeticMean}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1">Geometric Mean:</Typography>
          <Typography variant="h5">{results.geometricMean}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1">Harmonic Mean:</Typography>
          <Typography variant="h5">{results.harmonicMean}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainAveragesCalculator;