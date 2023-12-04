import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import romanize from 'roman-numerals';

function MainRomanNumeralOperationCalc() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const performOperation = () => {
    try {
      const intNum1 = romanize.toArabic(num1);
      const intNum2 = romanize.toArabic(num2);

      let operationResult;
      switch (operation) {
        case '+':
          operationResult = intNum1 + intNum2;
          break;
        case '-':
          operationResult = intNum1 - intNum2;
          break;
        case '*':
          operationResult = intNum1 * intNum2;
          break;
        case '/':
          operationResult = intNum1 / intNum2;
          break;
        default:
          throw new Error('Invalid operation');
      }

      setResult(romanize.toRoman(operationResult));
    } catch (error) {
      setResult('Error: ' + error.message);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Roman Numeral Operation Calculator
      </Typography>
      <hr />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Roman Numeral 1"
            variant="outlined"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Roman Numeral 2"
            variant="outlined"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Operation (+, -, *, /)"
            variant="outlined"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={performOperation}>
            Perform Operation
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Result:</Typography>
          <Typography variant="subtitle1">{result}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainRomanNumeralOperationCalc;