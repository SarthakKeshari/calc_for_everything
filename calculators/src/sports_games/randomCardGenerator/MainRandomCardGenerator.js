import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

const RandomCardGenerator = () => {
  // Arrays to represent suits and ranks of playing cards
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  // Function to get a random playing card
  const getRandomCard = () => {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

    return `${randomRank} of ${randomSuit}`;
  };

  // State to store the generated card
  const [generatedCard, setGeneratedCard] = useState('');

  // Function to generate a random card and update the state
  const generateRandomCard = () => {
    const card = getRandomCard();
    setGeneratedCard(card);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      {/* Heading for the card generator */}
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Random Card Generator</Typography>
      
      {/* Button to generate a random card */}
      <button onClick={generateRandomCard}>Generate Card</button>
      
      {/* Display the generated card if available */}
      {generatedCard && <p>Generated Card: {generatedCard}</p>}
    </Container>
  );
};

export default RandomCardGenerator;
