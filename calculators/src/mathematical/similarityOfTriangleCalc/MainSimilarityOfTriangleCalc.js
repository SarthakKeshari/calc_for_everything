import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

function MainSimilarityOfTriangleCal() {
  const [side1A, setSide1A] = useState('');
  const [side2A, setSide2A] = useState('');
  const [side3A, setSide3A] = useState('');
  const [side1B, setSide1B] = useState('');
  const [side2B, setSide2B] = useState('');
  const [side3B, setSide3B] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const ratio1 = side1A / side1B;
    const ratio2 = side2A / side2B;
    const ratio3 = side3A / side3B;

    if (ratio1 === ratio2 && ratio2 === ratio3) {
      setResult('The triangles are similar.');
    } else {
      setResult('The triangles are not similar.');
    }
  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
      <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Similarity Of Triangle Calculator</Typography>
      <hr />
      <br />
      <div style={{
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '2rem',
        border: '2px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#cbeeff'
      }}>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Triangle A:</label>
          <input
            type="number"
            placeholder="Side 1"
            style={{
              width: '60px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px'
            }}
            value={side1A}
            onChange={(e) => setSide1A(e.target.value)}
          />
          <input
            type="number"
            placeholder="Side 2"
            style={{
              width: '60px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px'
            }}
            value={side2A}
            onChange={(e) => setSide2A(e.target.value)}
          />
          <input
            type="number"
            placeholder="Side 3"
            style={{
              width: '60px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            value={side3A}
            onChange={(e) => setSide3A(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Triangle B:</label>
          <input
            type="number"
            placeholder="Side 1"
            style={{
              width: '60px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px'
            }}
            value={side1B}
            onChange={(e) => setSide1B(e.target.value)}
          />
          <input
            type="number"
            placeholder="Side 2"
            style={{
              width: '60px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              marginRight: '10px'
            }}
            value={side2B}
            onChange={(e) => setSide2B(e.target.value)}
          />
          <input
            type="number"
            placeholder="Side 3"
            style={{
              width: '60px',
              padding: '5px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            value={side3B}
            onChange={(e) => setSide3B(e.target.value)}
          />
        </div>
        <button style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }} onClick={handleCalculate}>Calculate</button>
        {result && <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{result}</p>}
      </div>
    </Container>
  );
}

export default MainSimilarityOfTriangleCal;
