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
  const [binaryValue, setBinaryValue] = useState("");

  const handleOctalChange = (event) => {
    const inputValue = event.target.value;
    setOctalValue(inputValue);
    setBinaryValue(octalToBinary(inputValue));
  };

  const handleBinaryChange = (event) => {
    const inputValue = event.target.value;
    setBinaryValue(inputValue);
    setOctalValue(binaryToOctal(inputValue));
  };

  const octalToBinary = (octal) => {
    if (!octal.match(/^[0-7.]+$/)) {
      return "Invalid Octal";
    }

    const isNegative = octal[0] === "-";
    octal = octal.replace("-", "");

    const parts = octal.split(".");
    const integerPart = parts[0];
    const fractionalPart = parts[1] || "0";

    const integerBinary = parseInt(integerPart, 8).toString(2);
    const fractionalBinary = parseInt(fractionalPart, 8)
      .toString(2)
      .padStart(fractionalPart.length * 3, "0");

    let result = isNegative ? "-" : "";
    result += integerBinary;

    if (fractionalPart !== "0") {
      result += "." + fractionalBinary;
    }

    return result;
  };

  const binaryToOctal = (binary) => {
    if (!binary.match(/^[01.]+$/)) {
      return "Invalid Binary";
    }

    const isNegative = binary[0] === "-";
    binary = binary.replace("-", "");

    const parts = binary.split(".");
    const integerPart = parts[0];
    const fractionalPart = parts[1] || "0";

    const integerOctal = parseInt(integerPart, 2).toString(8);
    let fractionalOctal = "";
    if (fractionalPart !== "0") {
      const fractionalBinary = "1" + fractionalPart;
      fractionalOctal = parseInt(fractionalBinary, 2).toString(8).slice(1);
    }

    let result = isNegative ? "-" : "";
    result += integerOctal;

    if (fractionalOctal !== "") {
      result += "." + fractionalOctal;
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
                  Octal to Binary
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
                    <strong>Binary:</strong> {binaryValue}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3}>
              <Box p={2}>
                <Typography variant="h5" align="center">
                  Binary to Octal
                </Typography>
                <TextField
                  label="Binary"
                  variant="outlined"
                  fullWidth
                  value={binaryValue}
                  onChange={handleBinaryChange}
                  placeholder="Enter Binary"
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
