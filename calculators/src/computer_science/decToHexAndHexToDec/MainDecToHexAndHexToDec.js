import React, { useState } from "react";
import { Container, TextField, Button, Grid, Typography } from "@mui/material";

function MainDecToHexAndHexToDec() {
  const [hex, setHex] = useState("");
  const [decimal, setDecimal] = useState("");

  const handleHexChange = (event) => {
    const inputValue = event.target.value;
    setHex(inputValue);
    if (/^[0-9A-Fa-f]*$/.test(inputValue)) {
      const decimal = parseInt(inputValue, 16);
      setDecimal(isNaN(decimal) ? "" : decimal.toString());
    } else {
      setDecimal("Invalid Hex");
    }
  };

  const handleDecimalChange = (event) => {
    const inputValue = event.target.value;
    setDecimal(inputValue);
    if (/^-?\d*$/.test(inputValue)) {
      const hex = parseInt(inputValue, 10).toString(16);
      setHex(isNaN(hex) ? "" : hex.toUpperCase());
    } else {
      setHex("Invalid Decimal");
    }
  };
  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Decimal to Hexadecimal and Hexadecimal to Decimal Calculator
      </Typography>
      <hr />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Hexadecimal to Decimal</Typography>
          <TextField
            label="Hexadecimal"
            variant="outlined"
            fullWidth
            value={hex}
            onChange={handleHexChange}
          />
          <Typography variant="h6">Decimal Value</Typography>
          <TextField
            label="Decimal"
            variant="outlined"
            fullWidth
            value={decimal}
            onChange={handleDecimalChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Decimal to Hexadecimal</Typography>
          <TextField
            label="Decimal"
            variant="outlined"
            fullWidth
            value={decimal}
            onChange={handleDecimalChange}
          />
          <Typography variant="h6">Hexadecimal Value</Typography>
          <TextField
            label="Hexadecimal"
            variant="outlined"
            fullWidth
            value={hex}
            onChange={handleHexChange}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainDecToHexAndHexToDec;
