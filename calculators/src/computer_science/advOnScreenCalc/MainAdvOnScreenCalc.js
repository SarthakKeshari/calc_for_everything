import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import * as math from "mathjs";

function MainAdvOnScreenCalc() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const deleteLastChar = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const calculatedResult = math.evaluate(input);
      setResult(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: 2 }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Advanced On-Screen Calculator
      </Typography>
      <hr />
      <br />
      <Paper sx={{ padding: 2 }}>
        <TextField
          label="Input"
          fullWidth
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
          {result}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {[
            "7",
            "8",
            "9",
            "+",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "*",
            "0",
            "(",
            ")",
            "/",
            "^",
          ].map((button) => (
            <Grid item xs={3} key={button}>
              <Button
                variant="contained"
                onClick={() => handleButtonClick(button)}
                sx={{
                  backgroundColor:
                    button === "+" ||
                    button === "-" ||
                    button === "*" ||
                    button === "/" ||
                    button === "^"
                      ? "#801123"
                      : "#5632a8",

                  marginLeft: "100px",
                }}
              >
                {button}
              </Button>
            </Grid>
          ))}
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("sin(")}
              sx={{
                backgroundColor: "#076324",

                marginLeft: "100px",
              }}
            >
              sin
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("cos(")}
              sx={{
                backgroundColor: "#076324",

                marginLeft: "100px",
              }}
            >
              cos
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("tan(")}
              sx={{
                backgroundColor: "#076324",

                marginLeft: "100px",
              }}
            >
              tan
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("log(")}
              sx={{
                backgroundColor: "#076324",

                marginLeft: "100px",
              }}
            >
              log
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("pi")}
              sx={{
                backgroundColor: "#076324",

                marginLeft: "100px",
              }}
            >
              π
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("e")}
              sx={{
                backgroundColor: "#076324",

                marginLeft: "100px",
              }}
            >
              e
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={() => handleButtonClick("sqrt(")}
              sx={{ backgroundColor: "#076324", marginLeft: "100px" }}
            >
              √
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={deleteLastChar}
              sx={{
                backgroundColor: "#ff6f61",

                marginLeft: "40px",
              }}
            >
              Delete
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={clearInput}
              sx={{
                backgroundColor: "#ff6f61",

                marginLeft: "40px",
              }}
            >
              Clear
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              onClick={calculateResult}
              sx={{
                backgroundColor: "#0836cc",
                width: "100%",

                marginLeft: "20px",
              }}
            >
              Calculate
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default MainAdvOnScreenCalc;
