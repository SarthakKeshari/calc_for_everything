import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

function MainCRCCalc() {
  const [inputData, setInputData] = useState("");
  const [crcResult, setCRCResult] = useState("");

  const calculateCRC = () => {
    const poly = 0x1021; // CRC-16 polynomial (X.25 standard)
    let crc = 0xffff; // Initial CRC value (X.25 standard)

    for (let i = 0; i < inputData.length; i++) {
      crc ^= inputData.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        if (crc & 0x8000) {
          crc = (crc << 1) ^ poly;
        } else {
          crc <<= 1;
        }
      }
    }

    crc = crc & 0xffff; // Ensure the CRC result is a 16-bit value

    setCRCResult(`CRC Result: 0x${crc.toString(16).toUpperCase()}`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 10 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        CRC Calculator
      </Typography>
      <hr />
      <br />
      <TextField
        label="Input Data (hex)"
        variant="outlined"
        fullWidth
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button
        variant="contained"
        onClick={calculateCRC}
        sx={{ marginBottom: 2 }}
      >
        Calculate CRC
      </Button>
      <Box>
        <Typography variant="h6">{crcResult}</Typography>
      </Box>
    </Container>
  );
}

export default MainCRCCalc;
