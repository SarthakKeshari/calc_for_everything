import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';

function OhmsLawCalculator() {
  const [calculationType, setCalculationType] = useState(null);
  const [voltage, setVoltage] = useState('');
  const [current, setCurrent] = useState('');
  const [resistance, setResistance] = useState('');

  const handleCalculationTypeChange = (type) => {
    setCalculationType(type);
    setVoltage('');
    setCurrent('');
    setResistance('');
  };

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    if (type === 'voltage') setVoltage(value);
    else if (type === 'current') setCurrent(value);
    else if (type === 'resistance') setResistance(value);
  };

  const handleCalculation = () => {
    if (calculationType === 'voltage') calculateVoltage();
    else if (calculationType === 'current') calculateCurrent();
    else if (calculationType === 'resistance') calculateResistance();
  };

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

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>Ohm's Law Calculator</Typography>
      <hr />
      <br />
      <div style={{ textAlign: 'center' }}>
        <select value={calculationType} onChange={(e) => handleCalculationTypeChange(e.target.value)}>
          <option value="">Select Calculation Type</option>
          <option value="voltage">Calculate Voltage</option>
          <option value="current">Calculate Current</option>
          <option value="resistance">Calculate Resistance</option>
        </select>

        {calculationType !== null && (
          <div>
            {calculationType === 'voltage' && (
              <div>
                <label htmlFor="current">Current (A):</label>
                <input
                  type="number"
                  id="current"
                  value={current}
                  onChange={(e) => handleInputChange(e, 'current')}
                />

                <label htmlFor="resistance">Resistance (Ω):</label>
                <input
                  type="number"
                  id="resistance"
                  value={resistance}
                  onChange={(e) => handleInputChange(e, 'resistance')}
                />
              </div>
            )}

            {calculationType === 'current' && (
              <div>
                <label htmlFor="voltage">Voltage (V):</label>
                <input
                  type="number"
                  id="voltage"
                  value={voltage}
                  onChange={(e) => handleInputChange(e, 'voltage')}
                />

                <label htmlFor="resistance">Resistance (Ω):</label>
                <input
                  type="number"
                  id="resistance"
                  value={resistance}
                  onChange={(e) => handleInputChange(e, 'resistance')}
                />
              </div>
            )}

            {calculationType === 'resistance' && (
              <div>
                <label htmlFor="voltage">Voltage (V):</label>
                <input
                  type="number"
                  id="voltage"
                  value={voltage}
                  onChange={(e) => handleInputChange(e, 'voltage')}
                />

                <label htmlFor="current">Current (A):</label>
                <input
                  type="number"
                  id="current"
                  value={current}
                  onChange={(e) => handleInputChange(e, 'current')}
                />
              </div>
            )}

            <Button variant="contained" onClick={handleCalculation}>Calculate</Button>
          </div>
        )}

        {voltage !== '' && calculationType === 'voltage' && <div>Calculated Voltage: {voltage} V</div>}
        {current !== '' && calculationType === 'current' && <div>Calculated Current: {current} A</div>}
        {resistance !== '' && calculationType === 'resistance' && <div>Calculated Resistance: {resistance} Ω</div>}
      </div>
    </Container>
  );
}

export default OhmsLawCalculator;
