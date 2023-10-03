import React, { useState } from 'react';
import { Container, Typography, Card, TextField, Button } from '@mui/material';

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

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Use regular expressions to allow only numerical values
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

  const getIntersectionPoints = (discriminant1, a1, b1, c1, a2, b2, c2) => {
    if (discriminant1 >= 0) {
        const x1 = (-b1 + Math.sqrt(discriminant1)) / (2 * a1);
        const x2 = (-b1 - Math.sqrt(discriminant1)) / (2 * a1);
      
        const y1 = a1 * x1 * x1 + b1 * x1 + c1;
        const y2 = a1 * x2 * x2 + b1 * x2 + c1;
      
        // Format the intersection points as a single string with both points separated by a comma
        return `[${x1.toFixed(2)}, ${y1.toFixed(2)}], [${x2.toFixed(2)}, ${y2.toFixed(2)}]`;
    }
      
  
    return "Equations do not intersect";
  };

  const discriminantHandler = (a1,b1,c1,a2,b2,c2) =>{

        // D = b^2 - 4ac
        var discriminantEquationOne = (Math.pow(b1,2) - (4*a1*c1))
        var discriminantEquationTwo = (Math.pow(b2,2) - (4*a2*c2))


        if(discriminantEquationOne>=0 && discriminantEquationTwo>=0){

            //surely they'll intersect
            var points = getIntersectionPoints(discriminantEquationOne,a1, b1, c1, a2, b2, c2)
            setResult("They intersect at\n"+points)

        } else {
            //won't intersect
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
        //passing parameters
        discriminantHandler(
            coefficientA1,
            coefficientB1,
            coefficientC1,
            coefficientA2,
            coefficientB2,
            coefficientC2
        )
    }
    // Perform your discriminant calculations here...

  };

  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: '10' }}>
      <Typography pt={1} variant="h5" sx={{ textAlign: 'center' }}>
        Quadratic Equation Intersection Calculator
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

        <div style={{alignSelf:'center', margin:'10px'}} >
            <Typography variant="h6" style={equationStyle}>
                {result}
            </Typography>
        </div>

      </Card>

    </Container>
  );
}

export default MainQuadraticEquationIntersection;
