import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';

function MainDecToOctAndOctToDec() {
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [conversionMode, setConversionMode] = useState('decimalToOctal');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleConvert = () => {
    if (conversionMode === 'decimalToOctal') {
      // Convert decimal to octal
      const decimalValue = parseInt(inputValue, 10);
      if (!isNaN(decimalValue)) {
        setOutputValue(decimalValue.toString(8));
      } else {
        setOutputValue('Invalid input');
      }
    } else {
      // Convert octal to decimal
      const octalValue = parseInt(inputValue, 8);
      if (!isNaN(octalValue)) {
        setOutputValue(octalValue.toString());
      } else {
        setOutputValue('Invalid input');
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Decimal to Octal and Octal to Decimal Calculator</Typography>
      <hr />
      <br />
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Input Value"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label={conversionMode === 'decimalToOctal' ? 'Octal Value' : 'Decimal Value'}
            variant="outlined"
            fullWidth
            value={outputValue}
            disabled
          />
        </Grid>
      </Grid>
      <br />
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={handleConvert}>
          Convert
        </Button>
        <br />
        <br />
        <Button
          variant="outlined"
          onClick={() => setConversionMode(conversionMode === 'decimalToOctal' ? 'octalToDecimal' : 'decimalToOctal')}
        >
          {conversionMode === 'decimalToOctal' ? 'Switch to Octal to Decimal' : 'Switch to Decimal to Octal'}
        </Button>
      </Box>
    </Container>
  );
}

export default MainDecToOctAndOctToDec;