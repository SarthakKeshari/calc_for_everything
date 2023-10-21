import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

const CarrollCaveCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('SI');
  const [result, setResult] = useState('');

  const unitOptions = [
    'yotta', 'zetta', 'exa', 'peta', 'tera', 'giga', 'mega', 'kilo', 'hecto', 'deca',
    'SI', 'deci', 'centi', 'milli', 'micro', 'nano', 'pico', 'femto', 'atto', 'zepto', 'yokto',
  ];

  const handleChange = (e) => {
    setInputValue(e.target.value);
    calculateConversion(e.target.value, selectedUnit);
  };

  const handleUnitChange = (e) => {
    setSelectedUnit(e.target.value);
    calculateConversion(inputValue, e.target.value);
  };

  const calculateConversion = (value, unit) => {
    const unitMap = {
      'yotta': 24, 'zetta': 21, 'exa': 18, 'peta': 15, 'tera': 12, 'giga': 9, 'mega': 6,
      'kilo': 3, 'hecto': 2, 'deca': 1, 'SI': 0, 'deci': -1, 'centi': -2, 'milli': -3,
      'micro': -6, 'nano': -9, 'pico': -12, 'femto': -15, 'atto': -18, 'zepto': -21, 'yokto': -24,
    };

    if (unit in unitMap) {
      const exponent = unitMap[unit];
      const convertedValue = parseFloat(value) * 10 ** exponent;
      setResult(convertedValue);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Carroll's Cave of Knowledge Calculator
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            label="Value"
            type="number"
            fullWidth
            value={inputValue}
            onChange={handleChange}
            margin="normal"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel>Unit</InputLabel>
            <Select
              value={selectedUnit}
              onChange={handleUnitChange}
            >
              {unitOptions.map((unit, index) => (
                <MenuItem key={index} value={unit}>{unit}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Typography variant="h6" style={{ marginTop: '16px' }}>
        Converted Value: {result}
      </Typography>
    </Container>
  );
};

export default CarrollCaveCalculator;
