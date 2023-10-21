import React, { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function MainSurfaceAreaOf3DShapes() {
  const [shape, setShape] = useState("sphere");
  const [radius, setRadius] = useState(0);
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [surfaceArea, setSurfaceArea] = useState(0);

  const setCalculator = (e) => {
    setShape(e.target.value);
    setRadius(0);
    setLength(0);
    setWidth(0);
    setHeight(0);
    setSurfaceArea(0);
  };

  const calculateSurfaceArea = () => {
    if (shape === "sphere") {
      const sphereSurfaceArea = 4 * Math.PI * Math.pow(parseFloat(radius), 2);
      setSurfaceArea(sphereSurfaceArea);
    } else if (shape === "cube") {
      const cubeSurfaceArea = 6 * Math.pow(parseFloat(length), 2);
      setSurfaceArea(cubeSurfaceArea);
    } else if (shape === "cylinder") {
      const cylinderSurfaceArea =
        2 * Math.PI * parseFloat(radius) * parseFloat(height) +
        2 * Math.PI * Math.pow(parseFloat(radius), 2);
      setSurfaceArea(cylinderSurfaceArea);
    } else if (shape === "cone") {
      const coneSurfaceArea =
        Math.PI * parseFloat(radius) * parseFloat(length) + parseFloat(radius);
      setSurfaceArea(coneSurfaceArea);
    } else if (shape === "pyramid") {
      const pyramidSurfaceArea =
        0.5 * Math.PI + parseFloat(length) * parseFloat(width);
      setSurfaceArea(pyramidSurfaceArea);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Surface Area Of 3D Shapes Calculator
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
          <option value="sphere">Sphere</option>
          <option value="cube">Cube</option>
          <option value="cylinder">Cylinder</option>
          <option value="cone">Cone</option>
          <option value="pyramid">Pyramid</option>
        </select>
      </div>

      {shape === "sphere" && (
        <div>
          <TextField
            label="Radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
      )}

      {shape === "cube" && (
        <div>
          <TextField
            label="Side Length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
      )}

      {shape === "cylinder" && (
        <div>
          <TextField
            label="Radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
          <TextField
            label="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
      )}

      {shape === "cone" && (
        <div>
          <TextField
            label="length"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextField
            label="Radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
          />
        </div>
      )}

      {shape === "pyramid" && (
        <div>
          <TextField
            label="Length of base"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <TextField
            label="Width of base"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>
      )}

      <Button
        variant="contained"
        onClick={calculateSurfaceArea}
        style={{
          marginTop: ".5rem",
          paddingTop: "0 20rem",
        }}
      >
        Calculate
      </Button>

      {surfaceArea > 0 && (
        <Typography variant="h6" sx={{ textAlign: "center" }}>
          Surface Area of the {shape} is {surfaceArea}
        </Typography>
      )}
    </Container>
  );
}

export default MainSurfaceAreaOf3DShapes;
