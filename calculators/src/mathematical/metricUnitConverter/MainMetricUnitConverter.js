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
    temperature: {
      celsius: 'Celsius (°C)',
      fahrenheit: 'Fahrenheit (°F)',
      kelvin: 'Kelvin (K)',
      rankine: 'Rankine (°R)',
    },
    time: {
      ms: 1,
      s: 1000,
      min: 60*1000,
      hr: 60*60*1000,
      μs: 0.001,
      ns: 0.000001,
    },
    speed: {
      miles_per_hr: 1.60934,
      kilometer_per_hr: 1,
      meter_per_sec: 3.6,
    },
    pressure: {
      pascal: 1,
      bar: 0.00001,
      techAtm: 0.0000098692,
      stdAtm: 0.00000980665,
      pounds_per_square_inch: 0.00014503773773375,
      torr: 0.007500616827042,
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
    console.log(unitType)

    if (unitType === "length" || unitType==="weight") {
      const resultValue = (inputValueFloat * toFactor) / fromFactor;
      setResult(resultValue.toFixed(4));
    }else if(unitType === "temperature"){
      let resultValue = inputValue;

    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        resultValue = (inputValue * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        resultValue = parseFloat(inputValue) + 273.15;
      } else if (toUnit === 'rankine') {
        resultValue = (inputValue * 9/5) + 491.67;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        resultValue = (inputValue - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        resultValue = ((inputValue - 32) * 5/9) + 273.15;
      } else if (toUnit === 'rankine') {
        resultValue = inputValue + 459.67;
      }
    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        resultValue = parseFloat(inputValue) - 273.15;
      } else if (toUnit === 'fahrenheit') {
        resultValue = ((inputValue - 273.15) * 9/5) + 32;
      } else if (toUnit === 'rankine') {
        resultValue = (inputValue * 9/5);
      }
    } else if (fromUnit === 'rankine') {
      if (toUnit === 'celsius') {
        resultValue = (inputValue - 491.67) * 5/9;
      } else if (toUnit === 'fahrenheit') {
        resultValue = inputValue - 459.67;
      } else if (toUnit === 'kelvin') {
        resultValue = (inputValue - 491.67) * 5/9 + 273.15;
      }
    }
    setResult(resultValue.toFixed(4));
    } else if(unitType === "time"){
      const resultValue = (inputValue * fromFactor) / toFactor;
      setResult(resultValue.toFixed(4));
    }
    else if (unitType === 'speed') {
      const resultValue = (inputValueFloat * fromFactor) / toFactor;
      setResult(resultValue.toFixed(5));
    } else if (unitType === 'pressure') {
      const resultValue = (inputValueFloat * toFactor) / fromFactor;
      setResult(resultValue.toFixed(9));
    }
    else {
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
          <MenuItem value="temperature">Temperature</MenuItem>
          <MenuItem value="time">Time</MenuItem>
          <MenuItem value="speed">Speed</MenuItem>
          <MenuItem value="pressure">Pressure</MenuItem>
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