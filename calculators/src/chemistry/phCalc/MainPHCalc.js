import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

import { Container, Typography } from '@mui/material'
import InfoPHCalc from './InfoPHCalc';

function MainPHCalc () {
  const [phValue, setPhValue] = useState('');
  const [result, setResult] = useState('');

  const calculatePh = () => {
    const ph = parseFloat(phValue);

    if (isNaN(ph)) {
      setResult('Invalid input. Please enter a valid pH value.');
    } else if (ph < 0 || ph > 14) {
      setResult('pH value must be between 0 and 14.');
    } else if (ph < 7) {
      setResult('This pH is acidic.');
    } else if (ph === 7) {
      setResult('This pH is neutral.');
    } else {
      setResult('This pH is basic/alkaline.');
    }
  };

  return (
    <Container
      maxWidth='lg'
      sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}
    >
      <Typography pt={1} variant='h5' sx={{ textAlign: 'center' }}>
        pH Calculator<InfoPHCalc/>
      </Typography>
      <hr />
      <br />
      <TextField
        label='Enter pH Value'
        value={phValue}
        onChange={e => setPhValue(e.target.value)}
        fullWidth
      />
      <Button variant='contained' onClick={calculatePh}>
        Calculate pH
      </Button>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </Container>
  )
}

export default MainPHCalc;
