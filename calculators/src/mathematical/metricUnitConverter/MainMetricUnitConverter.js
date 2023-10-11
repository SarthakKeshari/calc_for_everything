import React, { useState } from 'react';
import { Container, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

function MetricUnitConverter() {
  const [unitType, setUnitType] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const unitData = {
    length: {
      meter: 1,
      centimeter: 100,
      millimeter: 1000,
      kilometer: 0.001,
      inch: 39.3701,
      foot: 3.28084,
      mile: 0.000621371,
    },
    weight: {
      kilogram: 1,
      gram: 1000,
      milligram: 1000000,
      pound: 2.20462,
      ounce: 35.274,
      tonne: 0.001,
    },
  };

  const handleUnitTypeChange = (event) => {
    setUnitType(event.target.value);
  };

  const handleFromUnitChange = (event) => {
    setFromUnit(event.target.value);
  };

  const handleToUnitChange = (event) => {
    setToUnit(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const convertUnits = () => {
    const fromFactor = unitData[unitType][fromUnit];
    const toFactor = unitData[unitType][toUnit];
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      const resultValue = (inputValueFloat * toFactor) / fromFactor;
      setResult(resultValue.toFixed(4));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Metric Unit Converter
      </Typography>
      <br />
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
        <InputLabel>Select Unit Type</InputLabel>
        <Select value={unitType} onChange={handleUnitTypeChange}>
          <MenuItem value="length">Length</MenuItem>
          <MenuItem value="weight">Weight</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
        <InputLabel>From Unit</InputLabel>
        <Select value={fromUnit} onChange={handleFromUnitChange}>
          {Object.keys(unitData[unitType]).map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth variant="outlined" sx={{ marginBottom: '1rem' }}>
        <InputLabel>To Unit</InputLabel>
        <Select value={toUnit} onChange={handleToUnitChange}>
          {Object.keys(unitData[unitType]).map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Enter Value"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        sx={{ marginBottom: '1rem' }}
      />
      <Button variant="contained" onClick={convertUnits}>
        Convert
      </Button>
      <Typography variant="h6" sx={{ marginTop: '1rem' }}>
        Result: {result}
      </Typography>
    </Container>
  );
}

export default MetricUnitConverter;