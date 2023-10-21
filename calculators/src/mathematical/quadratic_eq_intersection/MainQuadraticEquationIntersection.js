import React, { useState } from 'react';
import { Container, Typography, Card, TextField, Button } from '@mui/material';
import InfoQuadraticEquationIntersection from './InfoQuadraticEquationIntersection';

const equationStyle = {
    fontSize: '1.5rem', // Adjust the font size as needed
    lineHeight: '1.5',
    fontFamily: 'KaTeX_Math',
    textAlign: 'center', // Center the equation
};

function MainQuadraticEquationIntersection() {
  const [a1, setA1] = useState('');
  const [b1, setB1] = useState('');
  const [c1, setC1] = useState('');
  const [a2, setA2] = useState('');
  const [b2, setB2] = useState('');
  const [c2, setC2] = useState('');

  const [result,setResult] = useState('Please ensure that you enter valid numerical values in all fields to view the result')

  // Handle input change and allow only numerical values
  const handleInputChange = (e) => {
    const value = e.target.value;

    // allow only numerical values
    const numericValue = value.replace(/[^0-9.-]/g, '');

    switch (e.target.name) {
      case 'a1':
        setA1(numericValue);
        break;
      case 'b1':
        setB1(numericValue);
        break;
      case 'c1':
        setC1(numericValue);
        break;
      case 'a2':
        setA2(numericValue);
        break;
      case 'b2':
        setB2(numericValue);
        break;
      case 'c2':
        setC2(numericValue);
        break;
      default:
        break;
    }
  };

  // Calculate intersection points of quadratic equations
  function discriminantHandler(a1,b1,c1,a2,b2,c2){
    
    var A = a1-a2
    var B = b1-b2
    var C = c1-c2
        
    var disc = Math.pow(B,2)-(4*A*C)
        
    // three cases handled seperately
    if(disc > 0){
        //two real roots
        
        //first root
        var x1 = ((-1*B) + Math.sqrt(disc))/(2*A)
        var y1 = (a1*Math.pow(x1,2) + b1*x1 + c1)
        
        //second root
        var x2 = ((-1*B) - Math.sqrt(disc))/(2*A)
        var y2 = (a2*Math.pow(x2,2) + b2*x2 + c2)

        setResult("Equations intersect at "+`[ ${x1.toPrecision(2)} , ${y1.toPrecision(2)} ]`+" and "+`[ ${x2.toPrecision(2)} , ${y2.toPrecision(2)} ]`)
    }
    else if(disc==0){
        //one real root
        var x = ((-1*B))/(2*A)
        var y = (a1*Math.pow(x,2) + b1*x + c1)
        
        setResult("Equations intersect at "+`[ ${x.toPrecision(2)} , ${y.toPrecision(2)} ]`)
    }
    else{
        //no root
        setResult("Equations do not intersect")
    }
  }

  const startCalculation = () => {
    // Convert input values to numbers
    const coefficientA1 = parseFloat(a1);
    const coefficientB1 = parseFloat(b1);
    const coefficientC1 = parseFloat(c1);
    const coefficientA2 = parseFloat(a2);
    const coefficientB2 = parseFloat(b2);
    const coefficientC2 = parseFloat(c2);


    // Check if any of the fields are empty
    if (isNaN(coefficientA1) || isNaN(coefficientB1) || isNaN(coefficientC1) || isNaN(coefficientA2) || isNaN(coefficientB2) || isNaN(coefficientC2)) {
        alert('Please enter valid numerical values in all fields');
        return;
    } else {
        // Call the discriminantHandler function with the input coefficients
        discriminantHandler(coefficientA1, coefficientB1, coefficientC1, coefficientA2, coefficientB2, coefficientC2);
    }

  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Quadratic Equation Intersection Calculator <InfoQuadraticEquationIntersection/>
      </Typography>
      <hr />

      <Card
        sx={{
          backgroundColor: 'inherit',
          margin: '5px',
          padding: '5px',
          boxSizing: 'border-box',

          display: 'flex',
          flexDirection: 'column',
        }}
      >

        {/* Input UI */}
        <div style = {{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}
        >
            <div
                className="equationOneInput"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',

                    margin: '10px',
                    padding: '10px',
                    boxSizing: 'border-box',
                }}
            >
            <Typography variant="h6" style={equationStyle}>
                Equation One
            </Typography>
            <Typography variant="h6" style={equationStyle}>
                a<sub>1</sub> x<sup>2</sup> + b<sub>1</sub>x + c<sub>1</sub>
            </Typography>
            <TextField
                sx={{ m: '20px' }}
                name="a1"
                label="a1"
                variant="filled"
                required
                value={a1}
                onChange={handleInputChange}
            />
            <TextField
                sx={{ m: '20px' }}
                name="b1"
                label="b1"
                variant="filled"
                required
                value={b1}
                onChange={handleInputChange}
            />
            <TextField
                sx={{ m: '20px' }}
                name="c1"
                label="c1"
                variant="filled"
                required
                value={c1}
                onChange={handleInputChange}
            />
            </div>

            <Typography variant="h1" style={equationStyle}>
                <span style={{fontSize:'2em'}}>x</span>
            </Typography>

            <div
            className="equationTwoInput"
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',

                margin: '10px',
                padding: '10px',
                boxSizing: 'border-box',
            }}
            >
            <Typography variant="h6" style={equationStyle}>
                Equation Two
            </Typography>
            <Typography variant="h6" style={equationStyle}>
                a<sub>2</sub> x<sup>2</sup> + b<sub>2</sub>x + c<sub>2</sub>
            </Typography>
            <TextField
                sx={{ m: '20px' }}
                name="a2"
                label="a2"
                variant="filled"
                required
                value={a2}
                onChange={handleInputChange}
            />
            <TextField
                sx={{ m: '20px' }}
                name="b2"
                label="b2"
                variant="filled"
                required
                value={b2}
                onChange={handleInputChange}
            />
            <TextField
                sx={{ m: '20px' }}
                name="c2"
                label="c2"
                variant="filled"
                required
                value={c2}
                onChange={handleInputChange}
            />
            </div>
        </div>

        <div style={{alignSelf:'center', margin:'10px'}}>
            <Button variant="contained" color="primary" onClick={startCalculation}>
                Calculate
            </Button>
        </div>

        <div style={{alignSelf:'center', margin:'30px'}} >
            <Typography variant="h6" style={{
                lineHeight: '1.5',
                fontFamily: 'KaTeX_Math',
                textAlign: 'center',
                fontSize:'30px'
            }}>
                {result}
            </Typography>
        </div>

      </Card>

    </Container>
  );
}

export default MainQuadraticEquationIntersection;
