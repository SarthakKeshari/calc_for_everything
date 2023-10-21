import React, { Component } from 'react';
import { Container, Typography } from '@mui/material';

class MainPOSSOPConverter extends Component {
  constructor() {
    super();
    this.state = {
      inputExpression: '',
      outputExpression: '',
      variableCount: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputExpression: event.target.value });
  }

  convertToSOP = () => {
    const posExpression = this.state.inputExpression;
    const terms = posExpression.split('+');
    const sopTerms = terms.map(term => {
      const literals = term.split('*');
      return `(${literals.join(' + ')})`;
    });
    const sopExpression = sopTerms.join(' * ');
    this.setState({ outputExpression: sopExpression });
  }

  convertToPOS = () => {
    const sopExpression = this.state.inputExpression;
    const terms = sopExpression.split('*');
    const posTerms = terms.map(term => {
      const literals = term.split('+');
      return `(${literals.join(' * ')})`;
    });
    const posExpression = posTerms.join(' + ');
    this.setState({ outputExpression: posExpression });
  }

  countVariables = () => {
    const expression = this.state.inputExpression;
    const variables = new Set();

    // Regex to match variable names (letters or digits)
    const variableRegex = /[a-zA-Z0-9]+/g;
    let match;
    while ((match = variableRegex.exec(expression)) !== null) {
      variables.add(match[0]);
    }

    this.setState({ variableCount: variables.size });
  }

  render() {
    return (
      <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
        <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>POS - SOP Converter</Typography>
        <hr />
        <br />

        <div>
          <h2>Expression Converter</h2>
          <div>
            <label>Enter Expression:</label>
            <input
              type="text"
              value={this.state.inputExpression}
              onChange={this.handleInputChange}
            />
          </div>
          <div>
            <button onClick={this.convertToSOP}>Convert to SOP</button>
            <button onClick={this.convertToPOS}>Convert to POS</button>
            <button onClick={this.countVariables}>Count Variables</button>
          </div>
          <div>
            <p>Result: {this.state.outputExpression}</p>
            <p>Variable Count: {this.state.variableCount}</p>
          </div>
        </div>
      </Container>
    );
  }
}

export default MainPOSSOPConverter;
