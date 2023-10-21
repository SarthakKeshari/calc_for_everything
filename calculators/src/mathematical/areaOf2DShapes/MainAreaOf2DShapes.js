import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainAreaOf2DShapes() {
  const [shape, setShape] = useState("circle");
  const [radius, setRadius] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [base, setBase] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);
  const [diagonal1, setDiagonal1] = useState(0);
  const [diagonal2, setDiagonal2] = useState(0);
  const [parallelsideA, setParallelsideA] = useState(0);
  const [parallelsideB, setParallelsideB] = useState(0);
  const [semimajoraxis, setSemimajoraxis] = useState(0);
  const [semiminoraxis, setSemiminoraxis] = useState(0);

  const setCalculator = (e) => {
    setShape(e.target.value);
    setRadius(0);
    setLength(0);
    setWidth(0);
    setBase(0);
    setHeight(0);
    setArea(0);
    setDiagonal1(0);
    setDiagonal2(0);
    setParallelsideA(0);
    setParallelsideB(0);
    setSemimajoraxis(0);
    setSemiminoraxis(0);
  };

  const calculateArea = () => {
    if (shape === "circle") {
      const circleArea = Math.PI * Math.pow(parseFloat(radius), 2);
      setArea(circleArea);
    } else if (shape === "square") {
      const squareArea = Math.pow(parseFloat(length), 2);
      setArea(squareArea);
    } else if (shape === "rectangle") {
      const rectangleArea = parseFloat(length) * parseFloat(width);
      setArea(rectangleArea);
    } else if (shape === "triangle") {
      const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
      setArea(triangleArea);
    } else if (shape === "oval") {
      const ovalArea = Math.PI * parseFloat(length) * parseFloat(width);
      setArea(ovalArea);
    } else if (shape === "rhombus") {
      const rhombusArea = 0.5 * parseFloat(diagonal1) * parseFloat(diagonal2);
      setArea(rhombusArea);
    } else if (shape === "trapezoid") {
      const trapezoidArea =
        0.5 *
        (parseFloat(parallelsideA) + parseFloat(parallelsideB)) *
        parseFloat(height);
      setArea(trapezoidArea);
    } else if (shape === "parallelogram") {
      const parallelogramArea = parseFloat(base) * parseFloat(height);
      setArea(parallelogramArea);
    } else if (shape === "ellipse") {
      const ellipseArea =
        Math.PI * parseFloat(semimajoraxis) * parseFloat(semiminoraxis);
      setArea(ellipseArea);
    } else if (shape === "arrow") {
      const triangleArea = 0.5 * parseFloat(base) * parseFloat(height);
      const rectangleArea = parseFloat(length) * parseFloat(width);
      const arrowArea = parseFloat(triangleArea) + parseFloat(rectangleArea);
      setArea(arrowArea);
    } else if (shape === "kite") {
      const kiteArea = 0.5 * parseFloat(diagonal1) * parseFloat(diagonal2);
      setArea(kiteArea);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Area Of 2D Shapes Calculator
      </Typography>
      <hr />
      <br />

      <div
        style={{
          marginTop: "0.2rem",
          marginBottom: ".7rem",
        }}
      >
        <select value={shape} onChange={setCalculator}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="rectangle">Rectangle</option>
          <option value="triangle">Triangle</option>
          <option value="oval">Oval</option>
          <option value="rhombus">Rhombus</option>
          <option value="trapezoid">Trapezoid</option>
          <option value="parallelogram">Parallelogram</option>
          <option value="ellipse">Ellipse</option>
          <option value="arrow">Arrow</option>
          <option value="kite">Kite</option>
        </select>
      </div>

      {shape === "circle" && (
        <div>
          <TextField
            label="Radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
      )}

      {shape === "square" && (
        <div>
          <TextField
            label="Side Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
      )}

      {shape === "rectangle" && (
        <div>
          <TextField
            label="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextField
            label="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      )}

      {shape === "triangle" && (
        <div>
          <TextField
            label="Base"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <TextField
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      )}

      {shape === "oval" && (
        <div>
          <TextField
            label="Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextField
            label="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      )}

      {shape === "rhombus" && (
        <div>
          <TextField
            label="Length of Diagonal 1"
            value={diagonal1}
            onChange={(e) => setDiagonal1(e.target.value)}
          />
          <TextField
            label="Length of Diagonal 2"
            value={diagonal2}
            onChange={(e) => setDiagonal2(e.target.value)}
          />
        </div>
      )}

      {shape === "trapezoid" && (
        <div>
          <TextField
            label="Length of Parallelside A"
            value={parallelsideA}
            onChange={(e) => setParallelsideA(e.target.value)}
          />
          <TextField
            label="Length of Parallelside B"
            value={parallelsideB}
            onChange={(e) => setParallelsideB(e.target.value)}
          />
          <TextField
            label="Height of Trapezoid"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      )}

      {shape === "ellipse" && (
        <div>
          <TextField
            label="Length of Semi-Major Axis"
            value={semimajoraxis}
            onChange={(e) => setSemimajoraxis(e.target.value)}
          />
          <TextField
            label="Length of Semi-Minor Axis"
            value={semiminoraxis}
            onChange={(e) => setSemiminoraxis(e.target.value)}
          />
        </div>
      )}

      {shape === "parallelogram" && (
        <div>
          <TextField
            label="Length of base "
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <TextField
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      )}

      {shape === "arrow" && (
        <div>
          <TextField
            label="Height of Arrow Head"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <TextField
            label="Length of base of Arrow Head"
            value={base}
            onChange={(e) => setBase(e.target.value)}
          />
          <TextField
            label="Length of Arrow Shaft"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextField
            label="Width of Arrow Shaft"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      )}

      {shape === "kite" && (
        <div>
          <TextField
            label="Length of Diagonal 1"
            value={diagonal1}
            onChange={(e) => setDiagonal1(e.target.value)}
          />
          <TextField
            label="Length of Diagonal 2"
            value={diagonal2}
            onChange={(e) => setDiagonal2(e.target.value)}
          />
        </div>
      )}
      <Button
        variant="contained"
        onClick={calculateArea}
        style={{
          marginTop: ".5rem",
          paddingTop: "0 20rem",
        }}
      >
        Calculate
      </Button>

      {area > 0 && (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Area of the {shape} is {area}
        </Typography>
      )}
    </Container>
  );
}

export default MainAreaOf2DShapes;
