import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { Container, Paper, Grid } from '@mui/material';
function MainNotCalc(){
    const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const calculateNot = () => {
    const binaryString = input.trim();
    if (!binaryString.match(/^[01]+$/)) {
      setResult('Invalid input');
      return;
    }
    const invertedString = binaryString
      .split('')
      .map((bit) => (bit === '0' ? '1' : '0'))
      .join('');
    setResult(invertedString);
  };

    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Not Calculator</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
         <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <Paper >
            <TextField
              label="Enter binary input"
              variant="outlined"
              fullWidth
              value={input}
              onChange={handleInput}
            />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper >
            <Button variant="contained" color="primary" onClick={calculateNot}>
              Calculate NOT
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper >
            <Typography variant="h5" gutterBottom>
              Result: {result}
            </Typography>
          </Paper>
        </Grid>
      </Grid>


            {/* End your code here */}
        </Container>
    )
}

export default MainNotCalc;