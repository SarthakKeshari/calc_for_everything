import React, { useState } from 'react';
import {  Container,
    TextField,
    Button,
    Typography, } from '@mui/material';
import InfoFactorialCalc from './InfoFactorialCalc';

function MainFactorialCalc(){
  const [number, setNumber] = useState('');
  const [factorial, setFactorial] = useState(null);

  const calculateFactorial = () => {
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      setFactorial(null);
    } else {
      let result = 1;
      for (let i = 1; i <= num; i++) {
        result *= i;
      }
      setFactorial(result);
    }
  };

     return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Factorial Calculator<InfoFactorialCalc/></Typography>
            <hr/>
            <br/>
            <TextField
            label="Enter a number"
            type="number"
            variant="outlined"
            fullWidth
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            />
            <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '10px' }}
            onClick={calculateFactorial}
            >
              Calculate Factorial
              </Button>
          {factorial !== null && (
            <Typography variant="h5" style={{ marginTop: '20px' }}>
              {`Factorial of ${number} is: ${factorial}`}
            </Typography>
          )}
        </Container>
      );
}
export default MainFactorialCalc;