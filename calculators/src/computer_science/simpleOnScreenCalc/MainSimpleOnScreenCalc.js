import React, { useState } from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';

function MainSimpleOnScreenCalc() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else if (value === 'AC') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  const buttonValues = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'AC',
  ];

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: 2 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>Simple On-Screen Calculator</Typography>
      <hr />
      <br />
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <div style={{ backgroundColor: 'white', padding: 10, borderRadius: 10 }}>
            <Typography variant="h6" sx={{ textAlign: "right", marginBottom: 1 }}>{display}</Typography>
            <Typography variant="h4" sx={{ textAlign: "right", marginBottom: 2 }}>{result}</Typography>
            <Grid container spacing={1}>
              {buttonValues.map((value) => (
                <Grid item key={value} xs={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => handleButtonClick(value)}
                  >
                    {value}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainSimpleOnScreenCalc;