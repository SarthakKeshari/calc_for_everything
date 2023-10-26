import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainHomogeneousInterpreter() {
  const [equation, setEquation] = useState('');
  const [isHomogeneous, setIsHomogeneous] = useState(null);

  const checkHomogeneity = () => {
    // Split the equation into terms using '+'
    const equationTerms = equation.split('+');

    let isHomogeneous = true; // Assume it's homogeneous initially

    let degree = null; // Initialize the degree

    for (const term of equationTerms) {
      // Extract exponents of 'x' and 'y'
      const xExponentMatch = term.match(/x\^?(-?\d+)?/);
      const yExponentMatch = term.match(/y\^?(-?\d+)?/);

      // Parse exponents as integers
      const termXExponent = xExponentMatch ? parseInt(xExponentMatch[1]) : 0;
      const termYExponent = yExponentMatch ? parseInt(yExponentMatch[1]) : 0;

      // Calculate the degree of the term
      const termDegree = termXExponent + termYExponent;

      if (degree === null) {
        // Initialize the degree with the first term
        degree = termDegree;
      } else {
        // Check if the degree is consistent across all terms
        if (termDegree !== degree) {
          isHomogeneous = false;
          break; // No need to check further
        }
      }
    }

    setIsHomogeneous(isHomogeneous);
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Homogeneous Interpreter</Typography>
      <hr />
      <br />

      <TextField
        label="Enter Difference Equation"
        fullWidth
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={checkHomogeneity}
      >
        Check Homogeneity
      </Button>

      {isHomogeneous !== null && (
        <Typography variant='h6' sx={{ textAlign: "center" }}>
          {isHomogeneous ? "The equation is homogeneous." : "The equation is not homogeneous."}
        </Typography>
      )}
    </Container>
  );
}

export default MainHomogeneousInterpreter;



