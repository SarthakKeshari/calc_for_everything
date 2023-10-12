// src/BinaryDecimalConverter.js
import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function BinaryDecimalConverter() {
  const [binaryInput, setBinaryInput] = useState("");
  const [decimalInput, setDecimalInput] = useState("");

  const handleBinaryChange = (event) => {
    setBinaryInput(event.target.value);
  };

  const handleDecimalChange = (event) => {
    setDecimalInput(event.target.value);
  };

  const convertBinaryToDecimal = () => {
    const decimalValue = parseFloat(binaryInput, 2);
    if (!isNaN(decimalValue)) {
      setDecimalInput(decimalValue.toString());
    } else {
      setDecimalInput("Invalid input");
    }
  };

  const convertDecimalToBinary = () => {
    const decimalValue = parseFloat(decimalInput, 10);
    if (!isNaN(decimalValue)) {
      setBinaryInput(decimalValue.toString(2));
    } else {
      setBinaryInput("Invalid input");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Decimal to Binary and Binary to Decimal Calculator
      </Typography>
      <hr />
      <br />
      <div>
        <TextField
          label="Decimal or Floating Point"
          type="text"
          value={decimalInput}
          onChange={handleDecimalChange}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          onClick={convertDecimalToBinary}
          sx={{ margin: 1, padding: 1 }}
        >
          Convert to Binary
        </Button>
      </div>
      <div>
        <TextField
          label="Binary"
          type="text"
          value={binaryInput}
          onChange={handleBinaryChange}
          sx={{ marginBottom: 2 }}
        />
        <Button
          variant="contained"
          onClick={convertBinaryToDecimal}
          sx={{ margin: 1, padding: 1 }}
        >
          Convert to Decimal or Floating Point
        </Button>
      </div>
    </Container>
  );
}

export default BinaryDecimalConverter;
