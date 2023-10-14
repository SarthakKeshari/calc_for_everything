import React, { useState } from 'react';
import { Container, Typography, Button, TextField } from '@mui/material';
import InfoPythagorasTheorem from './InfoPythagorasTheorem';

function MainPythagorasTheorem(){
    const [sideA, setSideA] = useState('');
    const [sideB, setSideB] = useState('');
    const [hypotenuse, setHypotenuse] = useState('');
  
    const calculateHypotenuse = () => {
      const a = parseFloat(sideA);
      const b = parseFloat(sideB);
  
      if (!isNaN(a) && !isNaN(b) && a > 0 && b > 0) {
        const hyp = Math.sqrt(a * a + b * b);
        setHypotenuse(hyp.toFixed(2));
      } else {
        setHypotenuse('Invalid input');
      }
    };
  
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Pythagoras Theorem Calculator <InfoPythagorasTheorem/></Typography>
            <hr/>
            <div>
      <TextField
        label="Enter length of side A"
        variant="outlined"
        value={sideA}
        onChange={(e) => setSideA(e.target.value)}
      />
      <TextField
        label="Enter length of side B"
        variant="outlined"
        value={sideB}
        onChange={(e) => setSideB(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={calculateHypotenuse}>
        Calculate Hypotenuse
      </Button>

      <div style={{ marginTop: '20px' }}>
        <strong>Hypotenuse:</strong> {hypotenuse}
      </div>
    </div>
            <br/>
        </Container>
    )
}

export default MainPythagorasTheorem;