import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Box,
} from '@mui/material';

function MainMetricUnitConverter() {
  const [unitType, setUnitType] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('kilometer');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [isReverse, setIsReverse] = useState(false); // Define isReverse state

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

  const handleToggleReverse = () => {
    setIsReverse(!isReverse); // Toggle between forward and reverse conversions
  };

  const convertUnits = () => {
    const fromFactor = unitData[unitType][fromUnit];
    const toFactor = unitData[unitType][toUnit];
    const inputValueFloat = parseFloat(inputValue);

    if (!isNaN(inputValueFloat)) {
      let resultValue;
      if (!isReverse) {
        resultValue = (inputValueFloat * fromFactor) / toFactor; // Forward conversion
      } else {
        resultValue = (inputValueFloat * toFactor) / fromFactor; // Reverse conversion
      }
      setResult(resultValue.toFixed(4));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Metric Unit Converter
      </Typography>
      <hr />
      <br />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="h6">Unit Type:</Typography>
          <Select value={unitType} onChange={handleUnitTypeChange}>
            <MenuItem value="length">Length</MenuItem>
            <MenuItem value="weight">Weight</MenuItem>
          </Select>
        </div>
        <div>
          <Typography variant="h6">From Unit:</Typography>
          <Select value={fromUnit} onChange={handleFromUnitChange}>
            {Object.keys(unitData[unitType]).map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </div>
        <div>
          <Typography variant="h6">To Unit:</Typography>
          <Select value={toUnit} onChange={handleToUnitChange}>
            {Object.keys(unitData[unitType]).map((unit) => (
              <MenuItem key={unit} value={unit}>
                {unit}
              </MenuItem>
            ))}
          </Select>
        </div>
      </Box>
      <TextField
        label="Enter Value"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
        sx={{ marginTop: '1rem' }}
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <Button variant="contained" onClick={convertUnits}>
          {isReverse ? 'Reverse Convert' : 'Convert'}
        </Button>
        <Button variant="outlined" onClick={handleToggleReverse}>
          Toggle Reverse
        </Button>
      </Box>
      <Typography variant="h6" sx={{ marginTop: '1rem' }}>
        Result: {result}
      </Typography>
    </Container>
  );
}

export default MainMetricUnitConverter;
