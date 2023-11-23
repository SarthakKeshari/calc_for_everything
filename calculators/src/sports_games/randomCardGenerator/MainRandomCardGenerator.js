import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

const RandomCardGenerator = () => {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const getRandomCard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

    return `${randomRank} of ${randomSuit}`;
  };

  const [generatedCard, setGeneratedCard] = useState('');

  const generateRandomCard = () => {
    const card = getRandomCard();
    setGeneratedCard(card);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
        <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Random Card Generator</Typography>
        <button onClick={generateRandomCard}>Generate Card</button>
        {generatedCard && <p>Generated Card: {generatedCard}</p>}
      </Container>
  );
};

export default RandomCardGenerator;
