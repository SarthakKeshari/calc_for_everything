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



function MassConverter() {
  const [inputMass, setInputMass] = useState('');
  const [fromUnit, setFromUnit] = useState('kilograms');
  const [toUnit, setToUnit] = useState('grams');
  const [convertedMass, setConvertedMass] = useState('');

  const massUnits = ['kilograms', 'grams', 'pounds', 'ounces', 'tonnes']; 

  const massUnitValues = {
    kilograms: 1,
    grams: 1000,
    pounds: 2.20462,
    ounces: 35.274,
    tonnes: 0.001, 
  };

  const convertMass = () => {
    if (isNaN(inputMass)) {
      setConvertedMass('Please enter a valid number for mass.');
      return;
    }
    

    const result = (inputMass * massUnitValues[fromUnit]) / massUnitValues[toUnit];

    setConvertedMass(`Converted mass: ${result.toFixed(2)} ${fromUnit}`);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4">Mass Converter</Typography>
      <Paper elevation={3} style={{ padding: '16px' }}>
        <TextField
          label="Enter mass"
          type="number"
          value={inputMass}
          onChange={(e) => setInputMass(e.target.value)}
          fullWidth
          margin="normal"
        />
        
        <Select
          value={toUnit}
          onChange={(e) => setToUnit(e.target.value)}
          fullWidth
          margin="normal"
        >
          {massUnits.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={fromUnit}
          onChange={(e) => setFromUnit(e.target.value)}
          fullWidth
          margin="normal"
        >
          {massUnits.map((unit) => (
            <MenuItem key={unit} value={unit}>
              {unit}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={convertMass}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Convert Mass
        </Button>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {convertedMass}
        </Typography>
      </Paper>
    </Container>
  );
}


function PlanetaryMassCalculator() {
  const [inputMass, setInputMass] = useState('');
  const [selectedPlanet, setSelectedPlanet] = useState('earth');
  const [result, setResult] = useState('');

  const planets = [
    { name: 'Earth', gravity: 9.81 },
    { name: 'Mars', gravity: 3.71 },
    { name: 'Jupiter', gravity: 24.79 },
    { name: 'Venus', gravity: 8.87 },
    { name: 'Saturn', gravity: 10.44 },
    { name: 'Mercury', gravity: 3.7 }, // Added Mercury
    { name: 'Uranus', gravity: 8.69 }, // Added Uranus
  ];

  const calculateWeight = () => {
    if (isNaN(inputMass) || inputMass <= 0) {
      setResult('Please enter a valid mass.');
      return;
    }

    const selectedPlanetData = planets.find((planet) => planet.name === selectedPlanet);

    if (selectedPlanetData) {
      const massOnSelectedPlanet = (inputMass / 9.81) * selectedPlanetData.gravity;
      setResult(`Your mass on ${selectedPlanetData.name}: ${massOnSelectedPlanet.toFixed(2)} kg`);
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} style={{ padding: '16px' }}>
        <Typography variant="h4">Planetary Mass Calculator</Typography>
        <TextField
          label="Enter your mass (in kg)"
          type="number"
          value={inputMass}
          onChange={(e) => setInputMass(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Select
          value={selectedPlanet}
          onChange={(e) => setSelectedPlanet(e.target.value)}
          fullWidth
          margin="normal"
        >
          {planets.map((planet) => (
            <MenuItem key={planet.name} value={planet.name}>
              {planet.name}
            </MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={calculateWeight}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          Calculate Mass
        </Button>
        <Typography variant="body1" style={{ marginTop: '10px' }}>
          {result}
        </Typography>
      </Paper>
    </Container>
  );
}

function App() {
  return (
    <div>
      <MassConverter />
      <PlanetaryMassCalculator />
    </div>
  );
}

export default App;