import React, { useState } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

function MainBingoGame() {
  const [currentNumber, setCurrentNumber] = useState(null);
  const [calledNumbers, setCalledNumbers] = useState([]);

  // Function to generate a random Bingo number between 1 and 75, excluding already called numbers
  const generateBingoNumber = () => {
    const availableNumbers = Array.from({ length: 75 }, (_, index) => index + 1).filter(
      (number) => !calledNumbers.includes(number)
    );

    if (availableNumbers.length > 0) {
      const randomNumber = availableNumbers[Math.floor(Math.random() * availableNumbers.length)];
      setCurrentNumber(randomNumber);
      setCalledNumbers([...calledNumbers, randomNumber]);
    } else {
      // All numbers have been called
      setCurrentNumber(null);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Bingo Number Caller
      </Typography>
      <hr />
      <br />
      <Button variant="contained" onClick={generateBingoNumber}>
        Call Bingo Number
      </Button>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Current Number:</Typography>
          <Paper sx={{ textAlign: 'center', padding: '8px' }}>{currentNumber}</Paper>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Called Numbers:</Typography>
        </Grid>
        {calledNumbers.map((number, index) => (
          <Grid item key={index} xs={3}>
            <Paper sx={{ textAlign: 'center', padding: '8px' }}>{number}</Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MainBingoGame;

