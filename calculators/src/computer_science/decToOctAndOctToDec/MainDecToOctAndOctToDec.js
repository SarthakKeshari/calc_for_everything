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

function DecOctalConverter() {
  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");
  const [conversionType, setConversionType] = useState("decimalToOctal");

  const convertDecimalToOctal = () => {
    const decimalValue = parseInt(inputValue, 10);
    const octalValue = decimalValue.toString(8);
    setOutputValue(octalValue);
  };

  const convertOctalToDecimal = () => {
    const decimalValue = parseInt(inputValue, 8);
    setOutputValue(decimalValue);
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
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", marginBottom: "20px" }}
      >
        Decimal to Octal and Vice Versa Converter with Decimal Value Calculator
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
              <MenuItem value="decimalToOctal">Decimal to Octal</MenuItem>
              <MenuItem value="octalToDecimal">Octal to Decimal</MenuItem>
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
              conversionType === "decimalToOctal"
                ? convertDecimalToOctal
                : convertOctalToDecimal
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

export default DecOctalConverter;
