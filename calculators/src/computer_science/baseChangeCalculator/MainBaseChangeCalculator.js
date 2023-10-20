import React from "react";
import { Container, Typography, TextField, Grid, Button } from "@mui/material";

function MainBaseChangeCalculator() {
  const [inputNumber, setInputNumber] = React.useState("");
  const [inputBase, setInputBase] = React.useState(10);
  const [outputBase, setOutputBase] = React.useState(10);
  const [outputNumber, setOutputNumber] = React.useState("");
// Handle conversion when the "Convert" button is clicked
  const handleConvert = () => {
    // Check if all required inputs are provided
    if (!inputNumber || !inputBase || !outputBase) {
      return;
    }
    // Convert input number to decimal using parseInt
    const parsedInputNumber = parseInt(inputNumber, inputBase);
    // Convert decimal number to output base using toString
    const convertedNumber = parsedInputNumber.toString(outputBase);
    // Update output number state
    setOutputNumber(convertedNumber);
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Base Change Calculator
      </Typography>
      <hr />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Input Number"
            value={inputNumber}
            onChange={(event) => setInputNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Input Base"
            type="number"
            value={inputBase}
            onChange={(event) => setInputBase(event.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Output Base"
            type="number"
            value={outputBase}
            onChange={(event) => setOutputBase(event.target.value)}
          />
        </Grid>
      </Grid>
      <br />
      <Button variant="contained" onClick={handleConvert}>
        Convert
      </Button>
      <br />
      <br />
      <Typography variant="h6" sx={{ textAlign: "center" }}>
        Output Number: {outputNumber}
      </Typography>
    </Container>
  );
}

export default MainBaseChangeCalculator;
