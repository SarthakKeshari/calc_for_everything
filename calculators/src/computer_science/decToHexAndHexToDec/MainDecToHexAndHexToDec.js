import React, { useState } from "react";
import {
  TextField,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
} from "@mui/material";

function Converter() {
  const [decimalValue, setDecimalValue] = useState("");
  const [hexadecimalValue, setHexadecimalValue] = useState("");

  const handleDecimalChange = (event) => {
    const inputValue = event.target.value;
    setDecimalValue(inputValue);
    setHexadecimalValue(decimalToHexadecimal(inputValue));
  };

  const handleHexadecimalChange = (event) => {
    const inputValue = event.target.value;
    setHexadecimalValue(inputValue);
    setDecimalValue(hexadecimalToDecimal(inputValue));
  };

  const decimalToHexadecimal = (decimal) => {
    if (!decimal.match(/^-?\d+(\.\d+)?$/)) {
      return "Invalid Decimal";
    }

    const isNegative = decimal[0] === "-";
    decimal = decimal.replace("-", "");

    const parts = decimal.split(".");
    const integerPart = parseInt(parts[0]).toString(16).toUpperCase();
    const fractionalPart = parts[1]
      ? parseFloat("0." + parts[1]).toString(16).toUpperCase()
      : "0";

    let result = isNegative ? "-" : "";
    result += integerPart;

    if (fractionalPart !== "0") {
      result += "." + fractionalPart.slice(2); // Remove "0x" from the fractional part
    }

    return result;
  };

  const hexadecimalToDecimal = (hexadecimal) => {
    if (!hexadecimal.match(/^-?[0-9a-fA-F]+(\.[0-9a-fA-F]+)?$/)) {
      return "Invalid Hexadecimal";
    }

    const isNegative = hexadecimal[0] === "-";
    hexadecimal = hexadecimal.replace("-", "");

    const parts = hexadecimal.split(".");
    const integerPart = parseInt(parts[0], 16);
    const fractionalPart = parts[1]
      ? parseInt("0x" + parts[1], 16) / Math.pow(16, parts[1].length)
      : 0;

    let result = isNegative ? "-" : "";
    result += (integerPart + fractionalPart).toString();

    return result;
  };

  return (
    <div style={{ display: "flex", alignItems: "center", minHeight: "30vh" }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5" align="center">
                  Decimal to Hexadecimal
                </Typography>
                <TextField
                  label="Decimal"
                  variant="outlined"
                  fullWidth
                  value={decimalValue}
                  onChange={handleDecimalChange}
                  placeholder="Enter Decimal"
                />
                <Box mt={2}>
                  <Typography variant="h6">
                    <strong>Hexadecimal:</strong> {hexadecimalValue}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5" align="center">
                  Hexadecimal to Decimal
                </Typography>
                <TextField
                  label="Hexadecimal"
                  variant="outlined"
                  fullWidth
                  value={hexadecimalValue}
                  onChange={handleHexadecimalChange}
                  placeholder="Enter Hexadecimal"
                />
                <Box mt={2}>
                  <Typography variant="h6">
                    <strong>Decimal:</strong> {decimalValue}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Converter;
