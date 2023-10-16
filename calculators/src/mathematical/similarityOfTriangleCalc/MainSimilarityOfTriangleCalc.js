import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';

function MainSimilarityOfTriangleCalc() {
    const [side1A, setSide1A] = useState('');
    const [side2A, setSide2A] = useState('');
    const [side3A, setSide3A] = useState('');
    const [side1B, setSide1B] = useState('');
    const [side2B, setSide2B] = useState('');
    const [side3B, setSide3B] = useState('');
    const [result, setResult] = useState('');

    const handleCalculate = () => {

        const sidesA = [side1A, side2A, side3A];
        const sidesB = [side1B, side2B, side3B];

        if (sidesA.concat(sidesB).some(side => side <= 0)) {
            setResult('Invalid input: sides must be positive and non-zero.');
            return;
        }
        // Check for SSS
        if (side1A / side1B === side2A / side2B && side2A / side2B === side3A / side3B) {
            setResult('The triangles are similar (SSS).');
            return;
        }

        // Check for SAS
        if (
            (side1A / side1B === side2A / side2B && side3A / side3B === side1A / side1B) ||
            (side1A / side1B === side3A / side3B && side2A / side2B === side1A / side1B) ||
            (side2A / side2B === side3A / side3B && side1A / side1B === side2A / side2B)
        ) {
            setResult('The triangles are similar (SAS).');
            return;
        }

        // Check for AAA
        if (
            (side1A / side1B === side2A / side2B && side2A / side2B === side3A / side3B) ||
            (side1A / side1B === side3A / side3B && side3A / side3B === side2A / side2B) ||
            (side2A / side2B === side3A / side3B && side3A / side3B === side1A / side1B)
        ) {
            setResult('The triangles are similar (AAA).');
            return;
        }

        setResult('The triangles are not similar.');
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
                        onChange={(e) => setSide1A(Math.max(e.target.value, 0))}
                        min="0"
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
                        onChange={(e) => setSide2A(Math.max(e.target.value, 0))}
                        min="0"
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
                        onChange={(e) => setSide3A(Math.max(e.target.value, 0))}
                        min="0"
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
                        onChange={(e) => setSide1B(Math.max(e.target.value, 0))}
                        min="0"
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
                        onChange={(e) => setSide2B(Math.max(e.target.value, 0))}
                        min="0"
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
                        onChange={(e) => setSide3B(Math.max(e.target.value, 0))}
                        min="0"
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

export default MainSimilarityOfTriangleCalc;
