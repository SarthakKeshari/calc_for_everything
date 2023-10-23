import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainDeMUXCalc() {
  const [n, setN] = useState(2); // Default value for n
  const [f, setF] = useState('01'); // Default value for f
  const [selectedOutput, setSelectedOutput] = useState(null);
  const [binaryString, setBinaryString] = useState(null);

  const handleCalculate = () => {
    const numOutputLines = Math.pow(2, n);
    const decimalValue = parseInt(f, 2);

    if (decimalValue >= 0 && decimalValue < numOutputLines) {
      setSelectedOutput(`Selected Output Line: ${decimalValue}`);
      const binaryOutput = decimalValue.toString(2).padStart(n, '0');
      setBinaryString(`Binary Output ${decimalValue}: ${binaryOutput}`);
    } else {
      setSelectedOutput('Invalid input. Out of range.');
      setBinaryString('');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: 10 }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: 'center' }}>DeMUX Calculator</Typography>
      <hr />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField 
        label="Number of Selection Lines (n)"
        variant="outlined"
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
       
      />
      </div>
<br />
<br />
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <TextField
        label="Input Binary String (f)"
        variant="outlined"
        value={f}
        onChange={(e) => setF(e.target.value)}
        
      />
      </div>
 <br />
<br />

      <Button variant="contained" onClick={handleCalculate} sx={{ display: 'block', margin: '0 auto' }}>
        Calculate
      </Button>

      {selectedOutput && (
        <Typography variant="h6" sx={{ textAlign: 'center', paddingTop: 2 }}>
          {selectedOutput}
        </Typography>
      )}

      {binaryString && (
        <Typography variant="h6" sx={{ textAlign: 'center', paddingTop: 2 }}>
          {binaryString}
        </Typography>
      )}
    </Container>
  );
}

export default MainDeMUXCalc;
