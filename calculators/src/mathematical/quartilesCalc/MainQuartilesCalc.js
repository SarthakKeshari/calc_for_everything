import React from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";

class QuartileCalculator extends React.Component {
  constructor() {
    super();
    this.state = {
      data: "",
      quartiles: {
        Q1: 0,
        Q2: 0,
        Q3: 0,
      },
    };
  }

  handleChange = (event) => {
    this.setState({ data: event.target.value });
  };

  calculateQuartiles = () => {
    const data = this.state.data
      .split(",")
      .map((item) => parseFloat(item))
      .sort((a, b) => a - b);

    const q1Index = Math.ceil((data.length - 1) * 0.25);
    const q2Index = Math.ceil((data.length - 1) * 0.5);
    const q3Index = Math.ceil((data.length - 1) * 0.75);

    this.setState({
      quartiles: {
        Q1: data[q1Index],
        Q2: data[q2Index],
        Q3: data[q3Index],
      },
    });
  };

  render() {
    return (
      <Container>
        <Typography variant="h5">Quartile Calculator</Typography>
        <TextField
          label="Data (comma-separated values)"
          fullWidth
          multiline
          variant="outlined"
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.calculateQuartiles}
        >
          Calculate Quartiles
        </Button>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>First Quartile (Q1): {this.state.quartiles.Q1}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Second Quartile (Q2): {this.state.quartiles.Q2}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>Third Quartile (Q3): {this.state.quartiles.Q3}</Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default QuartileCalculator;
