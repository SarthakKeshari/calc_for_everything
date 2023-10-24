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
  const [octalValue, setOctalValue] = useState("");
  const [hexadecimalValue, setHexadecimalValue] = useState("");

  const handleOctalChange = (event) => {
    const inputValue = event.target.value;
    setOctalValue(inputValue);
    setHexadecimalValue(octalToHexadecimal(inputValue));
  };

  const handleHexadecimalChange = (event) => {
    const inputValue = event.target.value;
    setHexadecimalValue(inputValue);
    setOctalValue(hexadecimalToOctal(inputValue));
  };

  const octalToHexadecimal = (octal) => {
    if (!octal.match(/^-?[0-7]+(\.[0-7]+)?$/)) {
      return "Invalid Octal";
    }

    const isNegative = octal[0] === "-";
    octal = octal.replace("-", "");

    const parts = octal.split(".");
    const integerPart = parseInt(parts[0], 8).toString(16).toUpperCase();
    const fractionalPart = parts[1]
      ? parseInt("0" + parts[1], 8)
          .toString(16)
          .toUpperCase()
      : "0";

    let result = isNegative ? "-" : "";
    result += integerPart;

    if (fractionalPart !== "0") {
      result += "." + fractionalPart;
    }

    return result;
  };

  const hexadecimalToOctal = (hexadecimal) => {
    if (!hexadecimal.match(/^-?[0-9a-fA-F]+(\.[0-9a-fA-F]+)?$/)) {
      return "Invalid Hexadecimal";
    }

    const isNegative = hexadecimal[0] === "-";
    hexadecimal = hexadecimal.replace("-", "");

    const parts = hexadecimal.split(".");
    const integerPart = parseInt(parts[0], 16).toString(8);
    const fractionalPart = parts[1]
      ? parseInt("0x" + parts[1], 16).toString(8)
      : "0";

    let result = isNegative ? "-" : "";
    result += integerPart;

    if (fractionalPart !== "0") {
      result += "." + fractionalPart;
    }

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
                  Octal to Hexadecimal
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
                  Hexadecimal to Octal
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
                    <strong>Octal:</strong> {octalValue}
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
