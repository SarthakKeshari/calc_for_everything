import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
} from '@mui/material';

const RMSValueCalculator = () => {
  const [inputValues, setInputValues] = useState('');
  const [result, setResult] = useState('');

  const calculateRMSValue = () => {
    if (inputValues.trim() !== '') {
      const values = inputValues.split(' ').map(Number);
      const squaredSum = values.reduce((acc, value) => acc + Math.pow(value, 2), 0);
      const rmsValue = Math.sqrt(squaredSum / values.length);
      setResult(rmsValue.toFixed(4)); // Display the result with 4 decimal places.
    }
  };

  const resetValues = () => {
    setInputValues('');
    setResult('');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        RMS Value Calculator
      </Typography>
      <TextField
        label="Enter values separated by spaces"
        fullWidth
        value={inputValues}
        onChange={(e) => setInputValues(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateRMSValue}
        style={{ marginTop: '16px' }}
      >
        Calculate RMS Value
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={resetValues}
        style={{ marginTop: '16px', marginLeft: '10px' }}
      >
        Reset Values
      </Button>
      <Typography variant="h6" style={{ marginTop: '16px' }}>
        {result !== '' ? (
          <Box>
            <strong>RMS Value:</strong> {result}
          </Box>
        ) : (
          ''
        )}
      </Typography>
    </Container>
  );
};

export default RMSValueCalculator;
