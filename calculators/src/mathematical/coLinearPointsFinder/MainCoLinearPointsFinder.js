import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const minPoints = 3;
const maxPoints = 6;

function MainCoLinearPointsFinder() {
  const [numPoints, setNumPoints] = useState("");
  const [points, setPoints] = useState([]);
  const [isCoLinear, setIsCoLinear] = useState(null);
  const [showError, setShowError] = useState(false);

  const handleNumPointsChange = (e) => {
    setIsCoLinear(null);
    setNumPoints(e.target.value);
    if (e.target.value < minPoints || e.target.value > maxPoints) {
      setPoints([]);
      setShowError(true);
      return;
    }
    setShowError(false);
    let pointArray = [];
    for (let i = 0; i < e.target.value; i++) {
      pointArray.push({ x: "", y: "" });
    }
    setPoints(pointArray);
  };

  const handlePointsChange = (e, coordinate, index) => {
    setIsCoLinear(null);
    let pointArray = [...points];
    if (coordinate === "x") {
      pointArray[index].x = e.target.value;
    } else {
      pointArray[index].y = e.target.value;
    }
    setPoints(pointArray);
  };

  const checkCoLinearity = () => {
    const pointArray = points;
    if (pointArray.length !== Number(numPoints)) {
      setIsCoLinear(false);
      return;
    }
    const { x: x1, y: y1 } = pointArray[0];
    const { x: x2, y: y2 } = pointArray[1];
    const slope = (y2 - y1) / (x2 - x1);

    for (let i = 2; i < pointArray.length; i++) {
      const { x, y } = pointArray[i];
      const currentSlope = (y - y1) / (x - x1);

      if (currentSlope !== slope) {
        setIsCoLinear(false);
        return;
      }
    }
    setIsCoLinear(true);
  };

  const getPointString = () => {
    let pointArray = [];
    points.forEach((point) => pointArray.push(`(${point.x},${point.y})`));
    return pointArray.join(" ");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ bgcolor: "#eeeeee", minHeight: "90vh", paddingY: "10" }}
    >
      <Typography pt={1} variant="h5" sx={{ textAlign: "center" }}>
        Co-Linear Points Finder
      </Typography>
      <hr />
      <br />
      <TextField
        label="Number of Points"
        variant="outlined"
        type="number"
        fullWidth
        sx={{ mb: 2 }}
        value={numPoints}
        onChange={handleNumPointsChange}
      />
      {showError && (
        <Typography sx={{ color: "red" }}>
          Number of points should be between {minPoints} and {maxPoints}
        </Typography>
      )}
      <Stack spacing={2} sx={{ mb: 2 }}>
        {points.map((point, idx) => {
          return (
            <Stack spacing={2} direction={"row"} key={idx}>
              <Typography sx={{ flex: 2, textAlign: "center", pt: 2 }}>
                Point {idx + 1}
              </Typography>
              <TextField
                label="x coordinate"
                variant="outlined"
                type="number"
                sx={{ flex: 4 }}
                value={point.x}
                onChange={(e) => handlePointsChange(e, "x", idx)}
              />
              <TextField
                label="y coordinate"
                variant="outlined"
                type="number"
                sx={{ flex: 4 }}
                value={point.y}
                onChange={(e) => handlePointsChange(e, "y", idx)}
              />
            </Stack>
          );
        })}
      </Stack>
      {points.length>0 &&
        <Button variant="contained" color="primary" onClick={checkCoLinearity}>
            Check Co-Linearity
        </Button>
       }
      {isCoLinear !== null && (
        <Typography
          pt={2}
          variant="h6"
          sx={{ textAlign: "center", color: isCoLinear ? "green" : "red" }}
        >
          {isCoLinear
            ? `The points ${getPointString()} are co-linear.`
            : `The points are not co-linear.`}
        </Typography>
      )}
    </Container>
  );
}

export default MainCoLinearPointsFinder;