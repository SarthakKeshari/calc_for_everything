import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@mui/material';

function TimeConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('ms');
  const [toUnit, setToUnit] = useState('s');
  const [convertedValue, setConvertedValue] = useState('');

  const timeUnits = ['Millisecound', 'Secound', 'Minute', 'Hour', 'Microsecound', 'Nanosecound'];

  const convertTime = () => {
    if (isNaN(inputValue)) {
      setConvertedValue('Please enter a valid number.');
      return;
    }

    const timeUnitsInMilliseconds = {
      ms: 1,
      s: 1000,
      min: 60 * 1000,
      hr: 60 * 60 * 1000,
      μs: 0.001,
      ns: 0.000001,
    };

    const result = (inputValue * timeUnitsInMilliseconds[fromUnit]) / timeUnitsInMilliseconds[toUnit];

    setConvertedValue(`Converted time: ${result.toFixed(2)} ${toUnit}`);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h5">Time Converter</Typography>
        <TextField
          label="Enter time"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          From:
        </Typography>
        <Select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          fullWidth
          margin="normal"
        >
          {timeUnits.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          To:
        </Typography>
        <Select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          fullWidth
          margin="normal"
        >
          {timeUnits.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
        
        <Button
          variant="contained"
          color="primary"
          onClick={convertTime}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Convert Time
        </Button>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {convertedValue}
        </Typography>
      </Paper>
    </Container>
  );
}

function TemperatureConverter() {
  const [inputValue, setInputValue] = useState('');
  const [fromUnit, setFromUnit] = useState('celsius');
  const [toUnit, setToUnit] = useState('fahrenheit');
  const [convertedValue, setConvertedValue] = useState('');

  const temperatureUnits = ['Celsius (°C)', 'Fahrenheit (°F)', 'Kelvin (K)', 'Rankine (°R)'];

  const convertTemperature = () => {
    if (isNaN(inputValue)) {
      setConvertedValue('Please enter a valid number.');
      return;
    }

    let convertedValue = inputValue;

    if (fromUnit === 'celsius') {
      if (toUnit === 'fahrenheit') {
        convertedValue = (inputValue * 9/5) + 32;
      } else if (toUnit === 'kelvin') {
        convertedValue = parseFloat(inputValue) + 273.15;
      } else if (toUnit === 'rankine') {
        convertedValue = (inputValue * 9/5) + 491.67;
      }
    } else if (fromUnit === 'fahrenheit') {
      if (toUnit === 'celsius') {
        convertedValue = (inputValue - 32) * 5/9;
      } else if (toUnit === 'kelvin') {
        convertedValue = ((inputValue - 32) * 5/9) + 273.15;
      } else if (toUnit === 'rankine') {
        convertedValue = inputValue + 459.67;
      }
    } else if (fromUnit === 'kelvin') {
      if (toUnit === 'celsius') {
        convertedValue = parseFloat(inputValue) - 273.15;
      } else if (toUnit === 'fahrenheit') {
        convertedValue = ((inputValue - 273.15) * 9/5) + 32;
      } else if (toUnit === 'rankine') {
        convertedValue = (inputValue * 9/5);
      }
    } else if (fromUnit === 'rankine') {
      if (toUnit === 'celsius') {
        convertedValue = (inputValue - 491.67) * 5/9;
      } else if (toUnit === 'fahrenheit') {
        convertedValue = inputValue - 459.67;
      } else if (toUnit === 'kelvin') {
        convertedValue = (inputValue - 491.67) * 5/9 + 273.15;
      }
    }

    setConvertedValue(`Converted value: ${convertedValue.toFixed(2)} ${toUnit}`);
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
        <Typography variant="h5">Temperature Converter</Typography>
        <TextField
          label="Enter value"
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          From:
        </Typography>
        <Select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          fullWidth
          margin="normal"
        >
          {temperatureUnits.map((unit) => (
            <MenuItem key={unit} value={unit.split(' ')[0].toLowerCase()}>
              {unit}
            </MenuItem>
          ))}
        </Select>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          To:
        </Typography>
        <Select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          fullWidth
          margin="normal"
        >
          {temperatureUnits.map((unit) => (
            <MenuItem key={unit} value={unit.split(' ')[0].toLowerCase()}>
              {unit}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={convertTemperature}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Convert Temperature
        </Button>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {convertedValue}
        </Typography>
      </Paper>
    </Container>
  );
}

function App() {
  return (
    <div>
      <TimeConverter />
      <TemperatureConverter />
    </div>
  );
}

export default App;
