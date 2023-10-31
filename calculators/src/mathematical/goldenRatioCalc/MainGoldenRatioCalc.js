import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function MainGoldenRatioCalc() {

    const [sum, setSum] = useState('');
    const [a, setA] = useState('');
    const [b, setB] = useState('');

    const ableTextFields = () => {
        document.querySelectorAll('input[type="text"]').forEach((input) => {
            input.disabled = false;
        });
    };

    const handleClear = () => {
        setSum('');
        setA('');
        setB('');
        ableTextFields();
    };
              
    useEffect(() => {
        if ( (a !== '' && !isNaN(a)) && (b !== '' && !isNaN(b) )) {
            setSum(a + b);                         
        } else if ((a !== '' && !isNaN(a)) && (sum !== '' && !isNaN(sum))) {
            setB(sum - a)                    
        } else if ((sum !== '' && !isNaN(sum)) && (b !== '' && !isNaN(b))) {
            setA(sum - b);                      
        }       
            
    }, [sum,a,b]);

    const handleA = (e) => {
        setA(parseFloat(e.target.value));
    };

    const handleB = (e) => {
        setB(parseFloat(e.target.value));
    };

    const handleSum = (e) => {
        setSum(parseFloat(e.target.value));
    };

    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Golden Ratio Calculator</Typography>
            <hr />
            <br />
          
            <TextField
                label="Value of A+B"
                type="number"
                value={sum || ''}
                onChange={ handleSum}
                
                
            />
            <TextField
                label="Value of A"
                type="number"
                value={a || ''}
                onChange={ handleA}
                
                
            />
            <TextField
                label="Value of B"
                type="number"
                value={b || ''}
                onChange={ handleB}
                            
            />
            <Typography variant="h6" sx={{ marginTop: '2rem', textAlign: 'center' }}>
                (A+B:A)   {(sum / a) || ''} = (A:B)  {(a / b) || ''} 
            </Typography>

            <Button variant="contained" onClick={handleClear}>Clear</Button>

            

            
        </Container>
    )
}

export default MainGoldenRatioCalc;
