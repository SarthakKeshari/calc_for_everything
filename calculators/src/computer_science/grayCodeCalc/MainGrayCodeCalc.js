import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";

const textFieldStyle = {
  marginBottom: "20px", // Add space between input boxes
};

function BinaryToGrayConverter() {
  const [binary, setBinary] = useState("");
  const [gray, setGray] = useState("");

  const binaryToGray = (binary) => {
    let gray = binary[0];
    for (let i = 1; i < binary.length; i++) {
      gray += binary[i - 1] !== binary[i] ? "1" : "0";
    }
    return gray;
  };

  const grayToBinary = (gray) => {
    let binary = gray[0];
    for (let i = 1; i < gray.length; i++) {
      binary +=
        gray[i] === "1" ? (binary[i - 1] === "0" ? "1" : "0") : binary[i - 1];
    }
    return binary;
  };

  const handleBinaryChange = (e) => {
    const input = e.target.value;
    setBinary(input);
    setGray(binaryToGray(input));
    if (input === "") {
      setGray("");
    }
  };

  const handleGrayChange = (e) => {
    const input = e.target.value;
    setGray(input);
    setBinary(grayToBinary(input));
    if (input === "") {
      setBinary("");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Gray Code Calculator
      </Typography>
      <hr />
      <br />
      {/* Write your code here */}
      <Container maxWidth="sm">
        <TextField
          label="Binary Code"
          value={binary}
          onChange={handleBinaryChange}
          fullWidth
          style={textFieldStyle}
        />
        <TextField
          label="Gray Code"
          value={gray}
          onChange={handleGrayChange}
          fullWidth
          style={textFieldStyle}
        />
      </Container>
    </Container>
  );
}

export default BinaryToGrayConverter;
