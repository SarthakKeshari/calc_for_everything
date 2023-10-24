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
  const [octalValue, setOctalValue] = useState("");

  const handleDecimalChange = (event) => {
    const inputValue = event.target.value;
    setDecimalValue(inputValue);
    setOctalValue(decimalToOctal(inputValue));
  };

  const handleOctalChange = (event) => {
    const inputValue = event.target.value;
    setOctalValue(inputValue);
    setDecimalValue(octalToDecimal(inputValue));
  };

  const decimalToOctal = (decimal) => {
    if (!decimal.match(/^-?\d+(\.\d+)?$/)) {
      return "Invalid Decimal";
    }

    const isNegative = decimal[0] === "-";
    decimal = decimal.replace("-", "");

    const parts = decimal.split(".");
    const integerPart = parseInt(parts[0]);
    const fractionalPart = parts[1] ? parseFloat("0." + parts[1]) : 0;

    let result = isNegative ? "-" : "";
    result += integerPart.toString(8);

    if (fractionalPart !== 0) {
      result += "." + fractionalPart.toString(8).slice(2); // Remove "0o" from the octal part
    }

    return result;
  };

  const octalToDecimal = (octal) => {
    if (!octal.match(/^-?[0-7]+(\.[0-7]+)?$/)) {
      return "Invalid Octal";
    }

    const isNegative = octal[0] === "-";
    octal = octal.replace("-", "");

    const parts = octal.split(".");
    const integerPart = parseInt(parts[0], 8);
    const fractionalPart = parts[1]
      ? parseInt("0o" + parts[1], 8) / Math.pow(8, parts[1].length)
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
                  Decimal to Octal
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
                    <strong>Octal:</strong> {octalValue}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5" align="center">
                  Octal to Decimal
                </Typography>
                <TextField
                  label="Octal"
                  variant="outlined"
                  fullWidth
                  value={octalValue}
                  onChange={handleOctalChange}
                  placeholder="Enter Octal"
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
