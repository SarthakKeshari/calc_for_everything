import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function MainVietaCalculator(){
   
        const [a, setA] = useState('');
        const [b, setB] = useState('');
        const [c, setC] = useState('');
        const [x1, setX1] = useState('');
        const [x2, setX2] = useState('');
      
        const calculateVieta = () => {
          const numA = parseFloat(a);
          const numB = parseFloat(b);
          const numC = parseFloat(c);
      
          if (numA !== 0) {
            const sumRoots = (-numB / numA).toFixed(2);
            const productRoots = (numC / numA).toFixed(2);
      
            setX1(sumRoots);
            setX2(productRoots);
          } else {
            setX1('A must be nonzero');
            setX2('A must be nonzero');
          }
        };
      
        return (
          <Box>
            <TextField
              label="Enter a"
              type="number"
              value={a}
              onChange={(e) => setA(e.target.value)}
            />
            <TextField
              label="Enter b"
              type="number"
              value={b}
              onChange={(e) => setB(e.target.value)}
            />
            <TextField
              label="Enter c"
              type="number"
              value={c}
              onChange={(e) => setC(e.target.value)}
            />
            <button onClick={calculateVieta}>Calculate</button>
            <p>x1: {x1}</p>
            <p>x2: {x2}</p>
          </Box>
        );
      }
      
      export default MainVietaCalculator;