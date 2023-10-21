import React, { useState } from "react";
import "./style.css";
import { Container, Typography, Button, TextField } from "@mui/material";

function MainSumAPGPHPCalc() {
  const [activeButton, setActiveButton] = useState(0);
  const [first, setFirst] = useState(0);
  const [diff, setDiff] = useState(0);
  const [number, setNumber] = useState(0);
  const [disp, setDisp] = useState(null);

  const sumAP = () => {
    const ans = (number / 2) * (2 * first + (number - 1) * diff);
    setDisp(ans);
  };
  const sumGP = () => {
    const ans = (first * (diff ** number - 1)) / (diff - 1);
    setDisp(ans);
  };
  const sumHP = () => {
    const ans =
      (1 / diff) *
      Math.log((2 * first + 2 * number * diff - diff) / (2 * first - diff));
    setDisp(ans);
  };

  const render = () => {
    if (activeButton === 1) {
      return (
        <>
          <container className="input">
            <TextField
              label="First Term(a)"
              type="number"
              sx={{ margin: "40px" }}
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            ></TextField>
            <TextField
              label="Common Difference(d)"
              type="number"
              sx={{ margin: "40px" }}
              value={diff}
              onChange={(e) => setDiff(e.target.value)}
            ></TextField>
            <TextField
              label="Number of Terms(n)"
              type="number"
              sx={{ margin: "40px" }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></TextField>
          </container>
          <button onClick={sumAP}>Calculate Sum</button>
          {disp !== null && (
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Sum of AP is: {disp}
            </Typography>
          )}
        </>
      );
    }

    if (activeButton === 2) {
      return (
        <>
          <container className="input">
            <TextField
              label="First Term(a)"
              type="number"
              sx={{ margin: "40px" }}
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            ></TextField>
            <TextField
              label="Common Ratio(r)"
              type="number"
              sx={{ margin: "40px" }}
              value={diff}
              onChange={(e) => setDiff(e.target.value)}
            ></TextField>
            <TextField
              label="Number of Terms(n)"
              type="number"
              sx={{ margin: "40px" }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></TextField>
          </container>

          <button onClick={sumGP}>Calculate Sum</button>
          {disp !== null && (
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Sum of GP is: {disp}
            </Typography>
          )}
        </>
      );
    }

    if (activeButton === 3) {
      return (
        <>
          <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
            ( For corresponding AP )
          </Typography>
          <container className="input">
            <TextField
              label="First Term(a)"
              type="number"
              sx={{ margin: "40px" }}
              value={first}
              onChange={(e) => setFirst(e.target.value)}
            ></TextField>
            <TextField
              label="Common Difference(d)"
              type="number"
              sx={{ margin: "40px" }}
              value={diff}
              onChange={(e) => setDiff(e.target.value)}
            ></TextField>
            <TextField
              label="Number of Terms(n)"
              type="number"
              sx={{ margin: "40px" }}
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></TextField>
          </container>
          <button variant="contained" color="inherit" onClick={sumHP}>
            Calculate Sum
          </button>
          {disp !== null && (
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Sum of HP is: {disp}
            </Typography>
          )}
        </>
      );
    }
  };

  return (
    <Container className="main">
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Sum of N terms of AP/GP/HP Calculator
      </Typography>
      <hr />
      <br />
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Button
          variant="contained"
          color={activeButton === 1 ? "primary" : "inherit"}
          sx={{ margin: "40px" }}
          onClick={() => {
            setDisp(null);
            setActiveButton(1);
            setFirst(0);
            setDiff(0);
            setNumber(0);
          }}
        >
          Arithmetic Progression
        </Button>
        <Button
          variant="contained"
          color={activeButton === 2 ? "primary" : "inherit"}
          sx={{ margin: "40px" }}
          onClick={() => {
            setDisp(null);
            setActiveButton(2);
            setFirst(0);
            setDiff(0);
            setNumber(0);
          }}
        >
          Geometric Progression
        </Button>
        <Button
          variant="contained"
          color={activeButton === 3 ? "primary" : "inherit"}
          sx={{ margin: "40px" }}
          onClick={() => {
            setDisp(null);
            setActiveButton(3);
            setFirst(0);
            setDiff(0);
            setNumber(0);
          }}
        >
          Harmonic Progression
        </Button>
      </Container>
      {render()}
    </Container>
  );
}

export default MainSumAPGPHPCalc;
