import React, { Component } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUnit: 'bits',
      outputUnit: 'bits',
      inputValue: 0,
      result: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value }, this.convert);
  };

  handleInputUnitChange = (event) => {
    this.setState({ inputUnit: event.target.value }, this.convert);
  };

  handleOutputUnitChange = (event) => {
    this.setState({ outputUnit: event.target.value }, this.convert);
  };

  convert = () => {
    const { inputValue, inputUnit, outputUnit } = this.state;
    let result = parseFloat(inputValue);

    if (inputUnit === 'bytes') {
      result *= 8;
    } else if (inputUnit === 'KB') {
      result *= 8 * 1024;
    } else if (inputUnit === 'MB') {
      result *= 8 * 1024 * 1024;
    } else if (inputUnit === 'GB') {
      result *= 8 * 1024 * 1024 * 1024;
    } else if (inputUnit === 'TB') {
      result *= 8 * 1024 * 1024 * 1024 * 1024;
    }

    if (outputUnit === 'bytes') {
      result /= 8;
    } else if (outputUnit === 'KB') {
      result /= 8 * 1024;
    } else if (outputUnit === 'MB') {
      result /= 8 * 1024 * 1024;
    } else if (outputUnit === 'GB') {
      result /= 8 * 1024 * 1024 * 1024;
    } else if (outputUnit === 'TB') {
      result /= 8 * 1024 * 1024 * 1024 * 1024;
    }

    this.setState({ result });
  };

  render() {
    return (
      <Container maxWidth="lg" sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 2 }}>
        <Typography variant="h4" sx={{ textAlign: "center", paddingBottom: 2 }}>
          Unit Converter
        </Typography>
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <TextField
              type="number"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
              label="Value"
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              select
              value={this.state.inputUnit}
              onChange={this.handleInputUnitChange}
              label="Input Unit"
              variant="outlined"
            >
              <MenuItem value="bits">Bits</MenuItem>
              <MenuItem value="bytes">Bytes</MenuItem>
              <MenuItem value="KB">Kilobytes</MenuItem>
              <MenuItem value="MB">Megabytes</MenuItem>
              <MenuItem value="GB">Gigabytes</MenuItem>
              <MenuItem value="TB">Terabytes</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <Typography>=</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" pt={1}>
              {this.state.result} {this.state.outputUnit}
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              select
              value={this.state.outputUnit}
              onChange={this.handleOutputUnitChange}
              label="Output Unit"
              variant="outlined"
            >
              <MenuItem value="bits">Bits</MenuItem>
              <MenuItem value="bytes">Bytes</MenuItem>
              <MenuItem value="KB">Kilobytes</MenuItem>
              <MenuItem value="MB">Megabytes</MenuItem>
              <MenuItem value="GB">Gigabytes</MenuItem>
              <MenuItem value="TB">Terabytes</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Converter;
