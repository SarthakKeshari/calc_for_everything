import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';

function OhmsLawCalculator() {
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');

  const calculateVoltage = () => {
    if (current && resistance) {
      const calculatedVoltage = current * resistance;
      setVoltage(calculatedVoltage);
    }
  };

  const calculateCurrent = () => {
    if (voltage && resistance) {
      const calculatedCurrent = voltage / resistance;
      setCurrent(calculatedCurrent);
    }
  };

  const calculateResistance = () => {
    if (voltage && current) {
      const calculatedResistance = voltage / current;
      setResistance(calculatedResistance);
    }
  };

  const handleVoltageChange = (e) => {
    setVoltage(e.target.value);
  };

  const handleCurrentChange = (e) => {
    setCurrent(e.target.value);
  };

  const handleResistanceChange = (e) => {
    setResistance(e.target.value);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>Ohm's Law Calculator</Typography>
      <hr />
      <br />
      <div style={{ textAlign: 'center' }}>
        <label htmlFor="voltage">Voltage (V):</label>
        <input
          type="number"
          id="voltage"
          value={voltage}
          onChange={handleVoltageChange}
        />

        <label htmlFor="current">Current (A):</label>
        <input
          type="number"
          id="current"
          value={current}
          onChange={handleCurrentChange}
        />

        <label htmlFor="resistance">Resistance (Ω):</label>
        <input
          type="number"
          id="resistance"
          value={resistance}
          onChange={handleResistanceChange}
        />

        <Button variant="contained" onClick={calculateVoltage}>Calculate Voltage</Button>
        <Button variant="contained" onClick={calculateCurrent}>Calculate Current</Button>
        <Button variant="contained" onClick={calculateResistance}>Calculate Resistance</Button>

        {voltage !== '' && <div>Calculated Voltage: {voltage} V</div>}
        {current !== '' && <div>Calculated Current: {current} A</div>}
        {resistance !== '' && <div>Calculated Resistance: {resistance} Ω</div>}
      </div>
    </Container>
  );
}

export default OhmsLawCalculator;
