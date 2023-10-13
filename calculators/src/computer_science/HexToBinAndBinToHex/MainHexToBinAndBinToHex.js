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
  const [hexValue, setHexValue] = useState("");
  const [binaryValue, setBinaryValue] = useState("");

  const handleHexChange = (event) => {
    const inputValue = event.target.value;
    setHexValue(inputValue);
    setBinaryValue(hexToBinary(inputValue));
  };

  const handleBinaryChange = (event) => {
    const inputValue = event.target.value;
    setBinaryValue(inputValue);
    setHexValue(binaryToHex(inputValue));
  };

  const hexToBinary = (hex) => {
    if (!hex.match(/^[0-9a-fA-F.]+$/)) {
      return "Invalid Hex";
    }

    const isNegative = hex[0] === "-";
    hex = hex.replace("-", "");

    const parts = hex.split(".");
    const integerPart = parts[0];
    const fractionalPart = parts[1] || "0";

    const integerBinary = parseInt(integerPart, 16).toString(2);
    const fractionalBinary = parseInt(fractionalPart, 16)
      .toString(2)
      .padStart(fractionalPart.length * 4, "0");

    let result = isNegative ? "-" : "";
    result += integerBinary;

    if (fractionalPart !== "0") {
      result += "." + fractionalBinary;
    }

    return result;
  };

  const binaryToHex = (binary) => {
    if (!binary.match(/^[01.]+$/)) {
      return "Invalid Binary";
    }

    const isNegative = binary[0] === "-";
    binary = binary.replace("-", "");

    const parts = binary.split(".");
    const integerPart = parts[0];
    const fractionalPart = parts[1] || "0";

    const integerHex = parseInt(integerPart, 2).toString(16);
    let fractionalHex = "";
    if (fractionalPart !== "0") {
      const fractionalBinary = "1" + fractionalPart;
      fractionalHex = parseInt(fractionalBinary, 2).toString(16).slice(1);
    }

    let result = isNegative ? "-" : "";
    result += integerHex;

    if (fractionalHex !== "") {
      result += "." + fractionalHex;
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
                  Hexadecimal to Binary
                </Typography>
                <TextField
                  label="Hexadecimal"
                  variant="outlined"
                  fullWidth
                  value={hexValue}
                  onChange={handleHexChange}
                  placeholder="Enter Hexadecimal"
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
                  Binary to Hexadecimal
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
                    <strong>Hexadecimal:</strong> {hexValue}
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
