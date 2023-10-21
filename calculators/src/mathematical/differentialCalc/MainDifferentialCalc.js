import React, { Component } from 'react';
import { create, all } from 'mathjs';
import { Container, Typography, TextField, Button, Grid, Paper, Card, CardContent } from '@mui/material';

const math = create(all);

const appStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const cardStyle = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

class App extends Component {
    constructor() {
      super();
      this.state = {
        expression: '',
        nthDerivative: 1, 
        result: '',
        isInvalidNthDerivative: false,
      };
    }
  
    handleInputChange = (event) => {
      this.setState({ expression: event.target.value });
    }
  
    handleNthDerivativeChange = (event) => {
      const value = event.target.value;
      this.setState({ nthDerivative: value, isInvalidNthDerivative: value < 1 });
    }
  
    calculateDerivative = () => {
      const { expression, nthDerivative } = this.state;
  
      if (nthDerivative < 1) {
        alert('Nth Derivative must be at least 1');
        return;
      }
  
      try {
        const parsedExpression = math.parse(expression);
        let resultExpression = parsedExpression;
  
        for (let i = 0; i < nthDerivative; i++) {
          resultExpression = math.derivative(resultExpression, 'x');
        }
  
        this.setState({ result: resultExpression.toString() });
      } catch (error) {
        this.setState({ result: 'Invalid expression' });
      }
    }
  
    render() {
      return (
        <Paper style={appStyle} elevation={3}>
          <Typography variant="h4">Add Equation and Order</Typography>
          <TextField
            type="text"
            label="Expression (e.g., 3*x^2 + 2*x + 1)"
            onChange={this.handleInputChange}
            variant="outlined"
            fullWidth
            style={{ marginBottom: '20px', marginTop: '20px' }}
          />
          <TextField
            type="number"
            label="Nth Derivative"
            value={this.state.nthDerivative}
            onChange={this.handleNthDerivativeChange}
            variant="outlined"
            fullWidth
            error={this.state.isInvalidNthDerivative}
            helperText={this.state.isInvalidNthDerivative ? 'Nth Derivative must be at least 1' : ''}
            style={{ marginBottom: '20px' }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={this.calculateDerivative}
            fullWidth
          >
            Calculate Derivative
          </Button>
          <div style={{ marginTop: '20px' }}>
            <Typography variant="h6">Expression: {this.state.expression}</Typography>
            <Typography variant="h6">Derivative: {this.state.result}</Typography>
          </div>
        </Paper>
      );
    }
}

function MainDifferentialCalc() {
    return (
      <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh' }}>
        <Typography pt={1} variant="h4" sx={{ textAlign: 'center' }}>Differential Calculator</Typography>
        <Grid container justifyContent="center" alignItems="center" style={{ marginTop: '100px' }}>
          <Grid item xs={12} md={6}>
            <App />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={cardStyle} elevation={3}>
              <CardContent>
                <Typography variant="h5">Instructions</Typography>
                <ul>
                  <li>Use basic operators: +, -, *, /</li>
                  <li>Exponents: x^2</li>
                  <li>Trigonometric functions: sin(x), cos(x), tan(x), csc(x), cot(x)</li>
                  <li>Logarithmic functions: log(x), log(x, base)</li>
                  <li>Square roots: sqrt(x)</li>
                  <li>Parentheses: (2*x + 3)/(x - 1)</li>
                  <li>Constants: pi, e</li>
                  <li>Variables: x (or other symbols)</li>
                  <li>Derivatives: derivative(expression, variable)</li>
                  <li>Higher-order derivatives: derivative(expression, variable, order)</li>
                  <li>Mixed expressions: 2*sin(x) + log(x) - sqrt(x)</li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    );
}

export default MainDifferentialCalc;


