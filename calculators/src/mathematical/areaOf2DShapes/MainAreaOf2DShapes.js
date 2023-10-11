// import React from 'react';
// import { Container, Typography } from '@mui/material';
// function MainAreaOf2DShapes(){
//     return(
//         <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
//             <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Area Of 2D Shapes Calculator</Typography>
//             <hr/>
//             <br/>
//         </Container>
//     )
// };
// export default MainAreaOf2DShapes;


////////////////////////////////////////////////

import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

function MainAreaOf2DShapes() {
  const [shape, setShape] = useState('circle');
  const [radius, setRadius] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);

  const calculateArea = () => {
    if (shape === 'circle') {
      const circleArea = Math.PI * Math.pow(radius, 2);
      setArea(circleArea);
    } else if (shape === 'square') {
      const squareArea = Math.pow(length, 2);
      setArea(squareArea);
    } else if (shape === 'rectangle') {
      const rectangleArea = length * width;
      setArea(rectangleArea);
    } else if (shape === 'triangle') {
      const triangleArea = 0.5 * base * height;
      setArea(triangleArea);
    } else if (shape === 'oval') {
      const ovalArea = Math.PI * length * width;
      setArea(ovalArea);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Area Of 2D Shapes Calculator</Typography>
      <hr />
      <br />

      <div
        style={{
            marginTop: '0.2rem', marginBottom: '.7rem'
        }}
      >
        <select value={shape} onChange={(e) => setShape(e.target.value)}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
          <option value="oval">Oval</option>
        </select>
      </div>

      {shape === 'circle' && (
        <div>
          <TextField label="Radius" value={radius} onChange={(e) => setRadius(e.target.value)} />
        </div>
      )}

      {shape === 'square' && (
        <div>
          <TextField label="Side Length" value={length} onChange={(e) => setLength(e.target.value)} />
        </div>
      )}

      {shape === 'rectangle' && (
        <div>
          <TextField label="Length" value={length} onChange={(e) => setLength(e.target.value)} />
          <TextField label="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
      )}

      {shape === 'triangle' && (
        <div>
          <TextField label="Base" value={base} onChange={(e) => setBase(e.target.value)} />
          <TextField label="Height" value={height} onChange={(e) => setHeight(e.target.value)} />
        </div>
      )}

      {shape === 'oval' && (
        <div>
          <TextField label="Length" value={length} onChange={(e) => setLength(e.target.value)} />
          <TextField label="Width" value={width} onChange={(e) => setWidth(e.target.value)} />
        </div>
      )}

      <Button variant="contained" onClick={calculateArea}
      style={{
        marginTop: ".5rem",
        paddingTop: "0 20rem"
    }}
      >Calculate</Button>

      {area > 0 && (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Area of the {shape} is {area}
        </Typography>
      )}
    </Container>
  )
};

export default MainAreaOf2DShapes;

///////////////////////////////////////////