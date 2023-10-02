import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function MainLinearEquationIntersection() {
  const [equation1, setEquation1] = useState({ a: '', b: '', c: '' });
  const [equation2, setEquation2] = useState({ a: '', b: '', c: '' });
  const [result, setResult] = useState('');

  const handleChange = (event, equation) => {
    const { name, value } = event.target;
    if (equation === 1) {
      setEquation1(prevState => ({ ...prevState, [name]: value }));
    } else {
      setEquation2(prevState => ({ ...prevState, [name]: value }));
    }
  }

  const calculateIntersection = () => {
    const a1 = parseFloat(equation1.a);
    const b1 = parseFloat(equation1.b);
    const c1 = parseFloat(equation1.c);
    const a2 = parseFloat(equation2.a);
    const b2 = parseFloat(equation2.b);
    const c2 = parseFloat(equation2.c);

    const det = a1 * b2 - a2 * b1;

    if (det !== 0) {
      const x = (c1 * b2 - c2 * b1) / det;
      const y = (a1 * c2 - a2 * c1) / det;
      setResult(`Intersection Point: (${x}, ${y})`);
    } else {
      setResult('Lines are parallel, so do not intersect');
    }
  }

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Linear Equation Intersection Calculator</Typography>
      <hr />
      <Typography pt={1} variant='h5' sx={{ textAlign: "center"}}>Give your input for lines as ax+by=c</Typography>
      <Box mt={2} textAlign="center">
        <TextField
          label="a"
          variant="outlined"
          name="a"
          value={equation1.a}
          onChange={(e) => handleChange(e, 1)}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="b"
          variant="outlined"
          name="b"
          value={equation1.b}
          onChange={(e) => handleChange(e, 1)}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="c"
          variant="outlined"
          name="c"
          value={equation1.c}
          onChange={(e) => handleChange(e, 1)}
        />
        <br /><br />
        <TextField
          label="a"
          variant="outlined"
          name="a"
          value={equation2.a}
          onChange={(e) => handleChange(e, 2)}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="b"
          variant="outlined"
          name="b"
          value={equation2.b}
          onChange={(e) => handleChange(e, 2)}
          sx={{ marginRight: 2 }}
        />
        <TextField
          label="c"
          variant="outlined"
          name="c"
          value={equation2.c}
          onChange={(e) => handleChange(e, 2)}
        />
        <br /><br />
        <Button variant="contained" onClick={calculateIntersection}>Calculate Intersection</Button>
      </Box>
      <Box mt={6} textAlign="center">
        <Typography variant='h6'>{result}</Typography>
      </Box>
    </Container>
  )
}

export default MainLinearEquationIntersection;
