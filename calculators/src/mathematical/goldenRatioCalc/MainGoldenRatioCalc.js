import React from 'react';
import { Container, Typography } from '@mui/material';

function MainGoldenRatioCalc(){
    return(
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY:"10" }}>
            <Typography pt={1} variant='h5' sx = {{textAlign: "center"}}>Golden Ratio Calculator</Typography>
            <hr/>
            <br/>
            {/* Write your code here */}
            const [a, setA] = useState('');
            const [b, setB] = useState('');
            const [result, setResult] = useState('');

            const calculateGoldenRatio = () => {
                if (a && b) {
                    const aValue = parseFloat(a);
            const bValue = parseFloat(b);

            if (bValue !== 0) {
                        const ratio = (aValue + bValue) / aValue;
            setResult(`The golden ratio is ${ratio.toFixed(2)}`);
                    } else {
                        setResult("Error: B value cannot be zero.");
                    }
                } else {
                    setResult("Error: Please enter values for A and B.");
                }
            };


            {/* End your code here */}
        </Container>
    )
}

export default MainGoldenRatioCalc;