import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

function MainHexToOctAndOctToHex() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [conversionType, setConversionType] = useState("hexToOctal");

  const convertHexToOctal = () => {
    const decimalValue = parseInt(inputValue, 16);
    const octalValue = decimalValue.toString(8);
    setOutputValue(octalValue);
  };

  const convertOctalToHex = () => {
    const decimalValue = parseInt(inputValue, 8);
    const hexValue = decimalValue.toString(16).toUpperCase();
    setOutputValue(hexValue);
  };

  const handleConversionTypeChange = (event) => {
    setConversionType(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setOutputValue("");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Hexadecimal to Octal and Octal to Hexadecimal Calculator
      </Typography>

      <hr />
      <br />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Select Conversion Type</InputLabel>
            <Select
              value={conversionType}
              onChange={handleConversionTypeChange}
            >
              <MenuItem value="hexToOctal">Hex to Octal</MenuItem>
              <MenuItem value="octalToHex">Octal to Hex</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Enter Value"
            variant="outlined"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={
              conversionType === "hexToOctal"
                ? convertHexToOctal
                : convertOctalToHex
            }
          >
            Convert
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Converted Value"
            variant="outlined"
            fullWidth
            value={outputValue}
            disabled
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MainHexToOctAndOctToHex;
