import React, { useState } from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';

function MainBingoCardGenerator() {
  const [bingoCards, setBingoCards] = useState([]);

  // Function to generate a random number between 1 and 75
  const generateRandomNumber = () => Math.floor(Math.random() * 75) + 1;

  // Function to generate a random Bingo card
  const generateBingoCard = () => {
    const card = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => generateRandomNumber())
    );
    setBingoCards([...bingoCards, card]);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Bingo Card Generator
      </Typography>
      <hr />
      <br />
      <Button variant="contained" onClick={generateBingoCard}>
        Generate Bingo Card
      </Button>
      <br />
      <br />
      <Grid container spacing={2}>
        {bingoCards.map((card, index) => (
          <Grid item key={index}>
            <Typography variant="subtitle1">Card {index + 1}</Typography>
            <table>
              <tbody>
                {card.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((number, colIndex) => (
                      <td key={colIndex}>{number}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MainBingoCardGenerator;
